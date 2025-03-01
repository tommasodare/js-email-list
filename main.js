fetch("https://flynn.boolean.careers/exercises/api/random/mail")
.then(response => response.json())
.then (data => {
    console.log(data);
})
.catch(error => {
    console.error(error);
})