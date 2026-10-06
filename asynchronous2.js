const POSTS_API = "https://jsonplaceholder.typicode.com/posts";

const sendDataToServer = async () => {
  try {
    const postData = { title: "foo", body: "bar", userId: 1 };

    const response = await fetch(POSTS_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Posted Data Response:", data);
    return data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};

/* ------------------------------------------------------------------------------------------------------ */
const promiseExample = () => {
  return new Promise((resolve, reject) => {
    console.log("Fetching data....");
    setTimeout(() => {
      const isSuccess = Math.random() > 0.5; // 50% chance
      if (isSuccess) {
        resolve({ id: 101, name: "John Doe" });
      } else {
        reject(new Error("Request failed"));
      }
    }, 2000);
  });
};

/* ------------------------------------------------------------------------------------------------------ */
const makeAJAXRequest = async () => {
  try {
    const data = await $.ajax({ type: "GET", url: POSTS_API });
    console.log(data.length);
    return data;
  } catch (error) {
    console.error("Request failed:", error.status, error.statusText);
    throw error;
  }
};

/* ------------------------------------------------------------------------------------------------------ */
const makeXMLHTTPRequest = () => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", POSTS_API);
    xhr.timeout = 5000;

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          resolve(JSON.parse(xhr.responseText));
        } catch (e) {
          reject(e);
        }
      } else {
        reject(new Error(`HTTP error: ${xhr.status}`));
      }
    };

    xhr.onerror = () => reject(new Error("Network error"));
    xhr.ontimeout = () => reject(new Error("Timeout"));
    xhr.send();
  });
};

/* ------------------------------------------------------------------------------------------------------ */
