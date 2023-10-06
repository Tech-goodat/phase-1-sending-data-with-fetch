const formData = {
    dogName: "Byron",
    dogBreed: "Poodle",
  };
 const configurationObject ={
    method: "POST",
    headers:{
        "content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({
        dogName:"Byron",
        dogBreed:"Poodie",
    })
}

fetch("http://localhost:3000/dogs", configurationObject)
.then(function(response){
    return response.json();
})
.then(function (object){
    console.log(object);
});


