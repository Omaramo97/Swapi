const axios = require('axios')

const resbtn = document.querySelector("#resBtn")

function buttonClicked(){
    console.log("Woohoo button clicked!")
}

resbtn.addEventListener('click', buttonClicked)

axios.get("https://swapi.dev/api/planets/2").then((res) => {
    data=res.data
    for (i = 0; i < res.data.residents.length; i++){
       res.data.residents[i]
    }  
})
