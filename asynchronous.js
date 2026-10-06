const BASE_URL = "https://jsonplaceholder.typicode.com";

const makeRequestToServer = async () => {
  try {
    const response = await fetch(`${BASE_URL}/posts`);
    if (response.ok) {
      const data = await response.json();
      console.log("Fetched Data:", data);
      return data;
    } else {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

/* ------------------------------------------------------------------------------------------------------ */
const makeRequestToServerChain = () => {
  fetch(`${BASE_URL}/posts`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Request failed:", error);
    });
};

/* ------------------------------------------------------------------------------------------------------ */
const sendDataToServer = async () => {
  try {
    const postData = {
      title: "foo",
      body: "bar",
      userId: 1,
    };

    const response = await fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Posted Data Response:", data);
      return data;
    } else {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};

/* ------------------------------------------------------------------------------------------------------ */
const promiseExample = () => {
  const promise = new Promise((resolve, reject) => {
    console.log("Fetching data....");
    setTimeout(() => {
      const isSuccess = Math.random() > 0.5; // 50% chance to succeed or fail
      if (isSuccess) {
        resolve({
          status: 200,
          message: "Request successful",
          data: {
            id: 101,
            name: "John Doe",
          },
        });
      } else {
        reject(new Error("Request failed"));
      }
    }, 2000);
  });

  return promise;
};

/* ------------------------------------------------------------------------------------------------------ */
