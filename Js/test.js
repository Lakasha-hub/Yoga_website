/**
 * Este programa es una prueba del funcionamiento real de la 
 * pagina con arrays de objetos en vez de la base de datos en 
 * formato Json.
 */

//Posturas 
let posturas = [{
    nombre:"Boat",
    img_url:"https://www.dropbox.com/s/4m64ztxkj8a4dab/boatstraightlegs.svg?raw=1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet omnis animi sapiente inventore aspernatur quae autem laborum nemo, aut magni fugit, commodi ullam molestias nisi praesentium optio accusamus voluptatum atque!"
},{
    nombre:"Half-Boat",
    img_url:"https://www.dropbox.com/s/1nx0r94msxjwvyp/boatbentlegs.svg?raw=1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet omnis animi sapiente inventore aspernatur quae autem laborum nemo, aut magni fugit, commodi ullam molestias nisi praesentium optio accusamus voluptatum atque!"
},{
    nombre:"Bow",
    img_url:"https://www.dropbox.com/s/wizj5kwxvez4c0a/bow.svg?raw=1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet omnis animi sapiente inventore aspernatur quae autem laborum nemo, aut magni fugit, commodi ullam molestias nisi praesentium optio accusamus voluptatum atque!"
},{
    nombre:"Bridge",
    img_url:"https://www.dropbox.com/s/f1w64ybg4sn8ejt/bridge.svg?raw=1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet omnis animi sapiente inventore aspernatur quae autem laborum nemo, aut magni fugit, commodi ullam molestias nisi praesentium optio accusamus voluptatum atque!"
},{
    nombre:"Butterfly",
    img_url:"https://www.dropbox.com/s/3h2pts6xbn28dh7/butterfly%3F.svg?raw=1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet omnis animi sapiente inventore aspernatur quae autem laborum nemo, aut magni fugit, commodi ullam molestias nisi praesentium optio accusamus voluptatum atque!"
}];

//Respiraciones con distintos efectos
let respiraciones = [{
    nombre: "Ujjayi",
    Tipo: "Relajante",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet omnis animi sapiente inventore aspernatur quae autem laborum nemo, aut magni fugit, commodi ullam molestias nisi praesentium optio accusamus voluptatum atque!"
},{
    nombre:"Nasagra",
    Tipo: "Activante",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet omnis animi sapiente inventore aspernatur quae autem laborum nemo, aut magni fugit, commodi ullam molestias nisi praesentium optio accusamus voluptatum atque!"
},{
    nombre:"Completa",
    Tipo: "Equilibrante",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet omnis animi sapiente inventore aspernatur quae autem laborum nemo, aut magni fugit, commodi ullam molestias nisi praesentium optio accusamus voluptatum atque!"
},{
    nombre:"Abdominal",
    Tipo: "Relajante",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet omnis animi sapiente inventore aspernatur quae autem laborum nemo, aut magni fugit, commodi ullam molestias nisi praesentium optio accusamus voluptatum atque!"
},{
    nombre:"Toracica",
    Tipo: "Equilibrante",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet omnis animi sapiente inventore aspernatur quae autem laborum nemo, aut magni fugit, commodi ullam molestias nisi praesentium optio accusamus voluptatum atque!"
},{
    nombre:"Clavicular",
    Tipo: "Activante",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet omnis animi sapiente inventore aspernatur quae autem laborum nemo, aut magni fugit, commodi ullam molestias nisi praesentium optio accusamus voluptatum atque!"
}];

//Gestos con manos
let mudras =[{
    nombre:"Pronam",
    img_url: "/assets/img/mudras/Pronam_mudra.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet omnis animi sapiente inventore aspernatur quae autem laborum nemo, aut magni fugit, commodi ullam molestias nisi praesentium optio accusamus voluptatum atque!"
},{
    nombre:"Adhi",
    img_url: "/assets/img/mudras/Adhi_mudra.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet omnis animi sapiente inventore aspernatur quae autem laborum nemo, aut magni fugit, commodi ullam molestias nisi praesentium optio accusamus voluptatum atque!"
},{
    nombre:"Govinda",
    img_url: "/assets/img/mudras/Govinda_mudra.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet omnis animi sapiente inventore aspernatur quae autem laborum nemo, aut magni fugit, commodi ullam molestias nisi praesentium optio accusamus voluptatum atque!"
},{
    nombre:"Apas",
    img_url: "/assets/img/mudras/Apas_mudra.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet omnis animi sapiente inventore aspernatur quae autem laborum nemo, aut magni fugit, commodi ullam molestias nisi praesentium optio accusamus voluptatum atque!"
},{
    nombre:"Vayu",
    img_url: "/assets/img/mudras/Vayu_mudra.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet omnis animi sapiente inventore aspernatur quae autem laborum nemo, aut magni fugit, commodi ullam molestias nisi praesentium optio accusamus voluptatum atque!"
}];

/**Options -- Menu*/

//Display Menu Selections 
document.querySelector('.dropdown').addEventListener('click', () =>{
    document.querySelector('.dropdown').classList.toggle('active');
});

//Display Menu of Posturas
document.querySelector('#btn_posturas').addEventListener('click', () =>{
    let exists = document.querySelector('.dropdown2') || null;
    if(exists == null){
        displayDataOptions(posturas);
        document.querySelector('#posturas').classList.toggle('active');
        console.log('mostrar posturas');

        Toastify({
            text: "Elegiste las Posturas",
            className: "info",
            style: {
                background: "linear-gradient(to right, #000000, #ff9a04)",
            }
        }).showToast();
    }else{
        exists.remove();
        displayDataOptions(posturas);
        document.querySelector('#posturas').classList.toggle('active');
        console.log('mostrar posturas');

        Toastify({
            text: "Elegiste las Posturas",
            className: "info",
            style: {
                background: "linear-gradient(to right, #000000, #ff9a04)",
            }
        }).showToast();

    }
});

//Display Menu of Respiraciones
document.querySelector('#btn_respiraciones').addEventListener('click', () =>{
    let exists = document.querySelector('.dropdown2') || null;
    if(exists == null){
        displayDataOptions(respiraciones);
        document.querySelector('#respiraciones').classList.toggle('active');
        console.log('mostrar respiraciones');

        Toastify({
            text: "Elegiste las Tecnicas Respiratorias",
            className: "info",
            style: {
            background: "linear-gradient(to right, #000000, #ff9a04)",
            }
        }).showToast();
    }else{
        exists.remove();
        displayDataOptions(respiraciones);
        document.querySelector('#respiraciones').classList.toggle('active');
        console.log('mostrar respiraciones');

        Toastify({
            text: "Elegiste las Tecnicas Respiratorias",
            className: "info",
            style: {
                background: "linear-gradient(to right, #000000, #ff9a04)",
            }
        }).showToast();
    }
});

//Display Menu of Mudras
document.querySelector('#btn_mudras').addEventListener('click', () =>{

    let exists = document.querySelector('.dropdown2') || null;
    if(exists == null){
        displayDataOptions(mudras);
        document.querySelector('#mudras').classList.toggle('active');
        console.log('mostrar mudras');

        Toastify({
            text: "Elegiste los Mudras",
            className: "info",
            style: {
                background: "linear-gradient(to right, #000000, #ff9a04)",
            }
        }).showToast();
    }else{
        exists.remove();
        displayDataOptions(mudras);
        document.querySelector('#mudras').classList.toggle('active');
        console.log('mostrar mudras');

        Toastify({
            text: "Elegiste los Mudras",
            className: "info",
            style: {
                background: "linear-gradient(to right, #000000, #ff9a04)",
            }
        }).showToast();
    }
});

//Add Selection to input value
function show(selection){
    document.querySelector('.textbox').value = selection;
}

//Function to display Menu Options of database
function displayDataOptions(database){
    //Create Containers
    let dropdown2 = document.createElement('div');
    dropdown2.classList.add('dropdown2');
    document.body.appendChild(dropdown2);

    let option2 = document.createElement('div');
    option2.classList.add('option2');
    dropdown2.appendChild(option2);
    let num = 1;
    //Create options for each element
    for(let element of database){
        if(database == posturas){
            let select = document.createElement('div');
            select.innerHTML = `${element['nombre']}`;
            select.setAttribute("id", "selection" + num)
            dropdown2.setAttribute("id", "posturas");
            option2.appendChild(select);
            num = num + 1;
        }else if(database == mudras){
            let select = document.createElement('div');
            select.innerHTML = `${element['nombre']}`;
            select.setAttribute("id", "selection" + num)
            dropdown2.setAttribute("id", "mudras");
            option2.appendChild(select);
            num = num + 1;
        }else{
            let select = document.createElement('div');
            select.innerHTML = `${element['nombre']}`;
            select.setAttribute("id", "selection" + num)
            dropdown2.setAttribute("id", "respiraciones");
            option2.appendChild(select);
            num = num + 1;
        }
    }
    
}

//Function to Display Cards of Database
function displayCards(database){
    //Create Containers
    let body_cards = document.createElement('div');
    body_cards.classList.add('body_cards');
    document.body.appendChild(body_cards);

    let container_card = document.createElement('div');
    container_card.classList.add('container_card');
    body_cards.appendChild(container_card);

    let card = document.createElement('div');
    card.classList.add('card');
    container_card.appendChild(card);

    let info_description = document.createElement('div');
    info_description.classList.add('info_description');
    card.appendChild(info_description);

    //Create img and desc for each element
    for(let element of database){
        let img_card = document.createElement('div');
        img_card.classList.add('img_card');
        img_card.innerHTML = `<img src="${element['img_url']}" alt="img">`;
        card.appendChild(img_card);

        let info_description = document.createElement('div');
        info_description.classList.add('info_description');
        info_description.innerHTML = `<p>${element['desc']}<p>`;
        card.appendChild(info_description);
    }
}

//Function to Display selections in a list
function displayElementsClass(){
    let list = document.querySelector('.elements');
    let element = document.createElement('li');

}
