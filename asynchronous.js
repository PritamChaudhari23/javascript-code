const POSTS_API = "https://jsonplaceholder.typicode.com/posts";
const COMMENTS_API = "https://jsonplaceholder.typicode.com/comments";
const USERS_API = "https://jsonplaceholder.typicode.com/users";

/* ------------------------------------------------------------------------------------------------------ */
const makeRequestToServer = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching ${url}:`, error.message);
    throw error;
  }
};

/* ------------------------------------------------------------------------------------------------------ */
const loadDashboard = async () => {
  const [posts, users, comments] = await Promise.all([
    makeRequestToServer(POSTS_API),
    makeRequestToServer(USERS_API),
    makeRequestToServer(COMMENTS_API),
  ]); // waits for all, fails fast on the first rejection.
  console.log("all:", posts.length, users.length, comments.length);
  return { posts, users, comments };
};

const loadWithPartialFailure = async () => {
  const results = await Promise.allSettled([
    makeRequestToServer(POSTS_API),
    makeRequestToServer(USERS_API),
    makeRequestToServer(`${POSTS_API}-invalid`), // 404 -> rejected
  ]); // waits for all, never rejects, reports each outcome.

  results.forEach((r, i) => {
    if (r.status === "fulfilled") {
      console.log(`allSettled #${i} ok, items:`, r.value.length);
    } else {
      console.log(`allSettled #${i} failed:`, r.reason.message);
    }
  });
  return results;
};

const fetchWithTimeout = async () => {
  const data = await Promise.race([
    makeRequestToServer(POSTS_API),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Timed out")), 5000),
    ),
  ]); // first to settle wins, whether it resolves or rejects.
  console.log("race: got data before timeout:", data.length);
  return data;
};

const fetchFromFallbacks = async () => {
  const data = await Promise.any([
    makeRequestToServer(`${POSTS_API}-invalid1`),
    makeRequestToServer(`${POSTS_API}-invalid2`),
    makeRequestToServer(USERS_API),
  ]); // first to fulfil wins. It rejects with AggregateError only if all fail.
  console.log("any: first success, items:", data.length);
  return data;
};

const runAll = async () => {
  try {
    await loadDashboard();
    await loadWithPartialFailure();
    await fetchWithTimeout();
    await fetchFromFallbacks();
  } catch (error) {
    console.error("Something failed:", error.message);
  }
};

runAll();

/* ------------------------------------------------------------------------------------------------------ */
const makeRequestToServerChain = () => {
  return fetch(POSTS_API)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data.length);
      return data;
    })
    .catch((error) => {
      console.error("Request failed:", error);
      throw error;
    });
};

/* ------------------------------------------------------------------------------------------------------ */
