const promise = new Promise((resolve, reject) => {
  const makeRequest = () => {
    const code = Math.random().toFixed(1);
    return {
      code: code * 1000,
      status: code >= 0.5 ? "OK" : "ERROR",
    };
  };
  const request = makeRequest();
  if (request.status === "OK") {
    resolve(request);
  } else if (request.status === "ERROR") {
    const err = request;
    reject(err);
  }
});

promise
  .then((data) => {
    console.log(`Request with code ${data.code} `);
  })
  .catch((err) => {
    // console.log("object_error");
    console.log(`Error with code ${err.code} `);
  });
