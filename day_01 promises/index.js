const myPromise = new promise((resolve, reject) => {
  let marks = 78;
  if (marks >= 60) {
    resolve("You passed the exam");
  } else {
    reject("You failed the exam");
  }
})
myPromise.then((message) => 
    console.log(message)
).catch((message) =>
    console.log(error)
);
