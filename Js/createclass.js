var database;
fetch("../assets/json/database.json")
    .then(res => res.json())
    .then(res => {
        database = res;
    })
    console.log(database)
function show(selection){
    document.querySelector('.textbox').value = selection;
}

document.querySelector('.dropdown').addEventListener('click', () =>{
    document.querySelector('.dropdown').classList.toggle('active');
});

function displaydata(){
    console.log(database)
    for(let element of database){
        if( 48>=element["id"]>=1 || 90>=element["id"]>=74){
            let div = document.createElement('div');
            div.innerHTML = `<h4> ${element["Nombre"]}</h4>
                            <img src = "${element["img_url"]}" alt="img"</img>`;
            document.body.appendChild(div);
            div.classList.add('data');
        }else{
            for(let element of database){
                let div = document.createElement('div')
                div.innerHTML = `<h4> ${element["Nombre"]}</h4>`;
                document.body.appendChild(div);
                div.classList.add('data');
            }
        }
    }  
}
displaydata();
