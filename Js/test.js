fetch("../assets/json/database.json")
    .then(res => res.json())
    .then(data => {
        console.log(data.posturas)
    })