fetch("../assets/json/database.json")
    .then(res => res.json())
    .then(res => {
        var database = res;
    })

function show(any){
    document.querySelector('.textbox').value = any;
}

document.querySelector('.dropdown').addEventListener('click', () =>{
    document.querySelector('.dropdown').classList.toggle('active');
});


