const listEl = document.querySelector(".list")

// Ciclo per 10 volte
for (let index = 0; index < 10; index++) {
    fetch("https://flynn.boolean.careers/exercises/api/random/mail")
        .then(response => response.json())
        .then(data => {
            //console.log(data.response)

            const emailList = []
            emailList.push(data.response)
            //console.log(emailList);
            
            // Ciclo all'interno della lista vuota emailList riempita dalle 10 email random richiamate tramite fetch
            for (let index = 0; index < emailList.length; index++) {
                const thisEmail = emailList[index];
                console.log(thisEmail);

                listEl.innerHTML += `<li>${thisEmail}</li>`
            }
        })
}