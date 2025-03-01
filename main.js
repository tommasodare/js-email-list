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

                // Creo un elemento lista che non è ancora inserito nel documento DOM
                const li = document.createElement(`li`)
                // Qui il contenuto della variabile thisEmail viene aggiunto all'interno dell'elemento <li> creato sopra
                li.append(thisEmail)
                // L'elemento <li> viene inserito come figlio dell'elemento listEl
                listEl.appendChild(li)


                // Usando innerHTML vado ad aggiungere all'elemento listEL un <li></li> che contenga tutte le email ciclate sopra tramite il simbolo +=
                listEl.innerHTML += `<li>${thisEmail}</li>`
            }
        })
}