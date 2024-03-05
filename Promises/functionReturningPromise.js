
const fetchAPI = () => {
  return new Promise((resolve, reject) => {
    
      const data = false; //if data recieved
      if (data === true) {
        const getdata = { name: "Anushka", age: 21, hobby: "dance" };
        resolve(getdata);
      } else {
        reject("Fail to Fetch API");
      }
   
  });
};

fetchAPI()
  .then((result) => {
    console.log("Data recived succussfully", result);
  })
  .catch((error) => {
    console.log(error);
  });

