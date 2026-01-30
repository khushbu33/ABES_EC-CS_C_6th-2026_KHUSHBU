const myPromise = new promise((resolve, reject) => {
  let marks = 78;
  if (marks >= 60) {
    resolve("pass");
  } else {
    reject("fail");
  }
})
const f1 = async()=>{
    try{
        const message = await myPromise;
        console.log(message);
    }
    catch(error){
        console.log(error);
    }
}
// f1();
const getData = async()=>{
    fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log("Error occurred: " + error));
    //OR    
    // try {
    //     const response = await fetch('https://fakestoreapi.com/products');

    //     console.log(await response.json());
    // } catch (error) {
    //     return "Error occurred: " + error;
    // }

}
