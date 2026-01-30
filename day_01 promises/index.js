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
//Promise is asynchronous in nature which means it will not block the execution of the code that comes after it.
//synchronous meaning it will block the execution of the code that comes after it until it is resolved or rejected.
//hosted functions are functions that are provided by the JavaScript environment (like the browser or Node.js) and are available for use without needing to be defined by the user. Examples include setTimeout, console.log, and document.getElementById.
