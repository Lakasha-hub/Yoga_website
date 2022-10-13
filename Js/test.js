fetch("../assets/json/database.json")
    .then(res => res.json())
    .then(data => {
        
    })

    let h1=document.getElementById(titulo)

    h1.innerText=data.posturas[2].title