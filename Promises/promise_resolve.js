console.log("script start");

// const myPromise = Promise.resolve();
// myPromise.then(value=>{console.log("hii")})
// promise chaining

function myPromise() {
  return new Promise((resolve) => {
    resolve("foo");
  });
}
myPromise()
  .then((value) => {
    console.log(value);
    value = value + "bar";
    // internally javascrip is returning promise like this
    // return Promise.resolve(value)
    return value;
  })
  .then((value) => {
    console.log(value);
    value += "bazz";
    return value;
  })
  .then((value) => console.log(value));
