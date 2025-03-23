function squarePromise(promise) {
  return new Promise((resolve, reject) => {
    promise
      .then((value) => {
        if (!isNaN(value)) {
          resolve(value ** 2);
        } else {
          reject(`Cannot convert ${value} to a number!`);
        }
      })
      .catch(reject);
  });
}

let promiseInner = new Promise((_, reject) => reject(1134));
squarePromise(promiseInner)
  .then(console.log)
  .catch((e) => console.log("catch", e));
