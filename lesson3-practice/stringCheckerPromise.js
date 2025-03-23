function stringCheckerPromise(param) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof param === "string") {
        resolve(param.toUpperCase());
      } else {
        reject(param);
      }
    }, 500);
  });
}

stringCheckerPromise("gachjwad779").then(console.log).catch(console.error);
