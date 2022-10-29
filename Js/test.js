/**
 * Este programa es una prueba del funcionamiento real de la 
 * pagina con arrays de objetos en vez de la base de datos en 
 * formato Json.
 */

//Posturas 
let posturas = [{
    nombre:"Barco",
    img_url:"https://www.dropbox.com/s/4m64ztxkj8a4dab/boatstraightlegs.svg?raw=1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet omnis animi sapiente inventore aspernatur quae autem laborum nemo, aut magni fugit, commodi ullam molestias nisi praesentium optio accusamus voluptatum atque!"
},{
    nombre:"Medio Barco",
    img_url:"https://www.dropbox.com/s/1nx0r94msxjwvyp/boatbentlegs.svg?raw=1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet omnis animi sapiente inventore aspernatur quae autem laborum nemo, aut magni fugit, commodi ullam molestias nisi praesentium optio accusamus voluptatum atque!"
},{
    nombre:"Arco",
    img_url:"https://www.dropbox.com/s/wizj5kwxvez4c0a/bow.svg?raw=1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet omnis animi sapiente inventore aspernatur quae autem laborum nemo, aut magni fugit, commodi ullam molestias nisi praesentium optio accusamus voluptatum atque!"
},{
    nombre:"Puente",
    img_url:"https://www.dropbox.com/s/f1w64ybg4sn8ejt/bridge.svg?raw=1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet omnis animi sapiente inventore aspernatur quae autem laborum nemo, aut magni fugit, commodi ullam molestias nisi praesentium optio accusamus voluptatum atque!"
},{
    nombre:"Mariposa",
    img_url:"https://www.dropbox.com/s/3h2pts6xbn28dh7/butterfly%3F.svg?raw=1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet omnis animi sapiente inventore aspernatur quae autem laborum nemo, aut magni fugit, commodi ullam molestias nisi praesentium optio accusamus voluptatum atque!"
}];

//Respiraciones con distintos efectos
let respiraciones = [{
    nombre: "Ujjayi",
    Tipo: "Relajante",
    img_url:"/assets/img/respiraciones/respiracion_ujjayi.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet omnis animi sapiente inventore aspernatur quae autem laborum nemo, aut magni fugit, commodi ullam molestias nisi praesentium optio accusamus voluptatum atque!"
},{
    nombre:"Nasagra",
    Tipo: "Activante",
    img_url:"/assets/img/respiraciones/respiracion_nasagra.webp",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet omnis animi sapiente inventore aspernatur quae autem laborum nemo, aut magni fugit, commodi ullam molestias nisi praesentium optio accusamus voluptatum atque!"
},{
    nombre:"Completa",
    Tipo: "Equilibrante",
    img_url:"/assets/img/respiraciones/respiracion_completa.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet omnis animi sapiente inventore aspernatur quae autem laborum nemo, aut magni fugit, commodi ullam molestias nisi praesentium optio accusamus voluptatum atque!"
},{
    nombre:"Abdominal",
    Tipo: "Relajante",
    img_url:"/assets/img/respiraciones/respiracion_abdominal.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet omnis animi sapiente inventore aspernatur quae autem laborum nemo, aut magni fugit, commodi ullam molestias nisi praesentium optio accusamus voluptatum atque!"
},{
    nombre:"Toracica",
    Tipo: "Equilibrante",
    img_url:"/assets/img/respiraciones/respiracion_toracica.gif",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet omnis animi sapiente inventore aspernatur quae autem laborum nemo, aut magni fugit, commodi ullam molestias nisi praesentium optio accusamus voluptatum atque!"
},{
    nombre:"Clavicular",
    Tipo: "Activante",
    img_url:"/assets/img/respiraciones/respiracion_clavicular.jpg",
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

/**Global Variables */
var num_list = 0; //Save the number of item list
var num_of_classes = 1; //Save the number of classes in LocalStorage
/**Options -- Menu*/

//Display Menu Selections 
document.querySelector('.dropdown').addEventListener('click', () =>{
    document.querySelector('.dropdown').classList.toggle('active');
});

//Display Menu of Posturas
document.querySelector('#btn_posturas').addEventListener('click', () =>{
    //I ask if the menu exists
    let exists = document.querySelector('.dropdown2') || null;
    //if not exists, create a new one
    if(exists == null){
        displayDataOptions(posturas);
        document.querySelector('#posturas').classList.toggle('active');
        console.log('Desplegar Menú de Posturas');

        Toastify({
            text: "Elegiste las Posturas",
            className: "info",
            style: {
                background: "linear-gradient(to right, #000000, #ff9a04)",
            }
        }).showToast();
    }
    //if exists delete and create a new one
    else{
        exists.remove();
        displayDataOptions(posturas);
        document.querySelector('#posturas').classList.toggle('active');
        console.log('Desplegar Menú de Posturas');

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
    //I ask if the menu exists
    let exists = document.querySelector('.dropdown2') || null;
    //if not exists, create a new one
    if(exists == null){
        displayDataOptions(respiraciones);
        document.querySelector('#respiraciones').classList.toggle('active');
        console.log('Desplegar Menú de Respiraciones');

        Toastify({
            text: "Elegiste las Tecnicas Respiratorias",
            className: "info",
            style: {
            background: "linear-gradient(to right, #000000, #ff9a04)",
            }
        }).showToast();
    }
    //if exists delete and create a new one
    else{
        exists.remove();
        displayDataOptions(respiraciones);
        document.querySelector('#respiraciones').classList.toggle('active');
        console.log('Desplegar Menú de Respiraciones');

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
    //I ask if the menu exists
    let exists = document.querySelector('.dropdown2') || null;
    //if not exists, create a new one
    if(exists == null){
        displayDataOptions(mudras);
        document.querySelector('#mudras').classList.toggle('active');
        console.log('Desplegar Menú de Mudras');

        Toastify({
            text: "Elegiste los Mudras",
            className: "info",
            style: {
                background: "linear-gradient(to right, #000000, #ff9a04)",
            }
        }).showToast();
    }
    //if exists delete and create a new one
    else{
        exists.remove();
        displayDataOptions(mudras);
        document.querySelector('#mudras').classList.toggle('active');
        console.log('Desplegar Menú de Mudras');

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
    //I call a container label
    let container_card = document.querySelector('.container_card');
    //Create Containers
    let dropdown2 = document.createElement('div');
    dropdown2.classList.add('dropdown2');
    container_card.appendChild(dropdown2);

    let option2 = document.createElement('div');
    option2.classList.add('option2');
    dropdown2.appendChild(option2);
    //Create options for each element
    for(let element of database){
        //If database is Posturas, create menu elements of array Posturas
        if(database == posturas){
            let select = document.createElement('div');
            select.innerHTML = `${element['nombre']}`;
            select.setAttribute("id", "selection")
            dropdown2.setAttribute("id", "posturas");
            option2.appendChild(select);
            let name_selection = select.innerHTML;
            select.addEventListener('click', () =>{
                //Diplay Menu in index
                document.querySelector('.card').classList.add('active');
                //Display Card information of selection
                displayCards(database, name_selection);
                //Display selection in a list of elements class
                displayElementsClass(name_selection);
                document.getElementById(name_selection).setAttribute('class', 'element_postura');
            });
        }
        //If database is Mudras, create menu of elements of array Mudras
        else if(database == mudras){
            let select = document.createElement('div');
            select.innerHTML = `${element['nombre']}`;
            select.setAttribute("id", "selection")
            dropdown2.setAttribute("id", "mudras");
            option2.appendChild(select);
            let name_selection = select.innerHTML;
            select.addEventListener('click', () =>{
                //Diplay Menu in index
                document.querySelector('.card').classList.add('active');
                //Display Card information of selection
                displayCards(database, name_selection);
                //Display selection in a list of elements class
                displayElementsClass(name_selection);
                document.getElementById(name_selection).setAttribute('class', 'element_mudra');
            });
        }//If else, database is Respiraciones, create menu of elements of array Respiraciones
        else{
            let select = document.createElement('div');
            select.innerHTML = `${element['nombre']}`;
            select.setAttribute("id", "selection")
            dropdown2.setAttribute("id", "respiraciones");
            option2.appendChild(select);
            let name_selection = select.innerHTML;
            select.addEventListener('click', () =>{
                //Diplay Menu in index
                document.querySelector('.card').classList.add('active');
                //Display Card information of selection
                displayCards(database, name_selection);
                //Display selection in a list of elements class
                displayElementsClass(name_selection);
                document.getElementById(name_selection).setAttribute('class', 'element_respiracion');
            });
        }
    }
    
}

//Function to Display Cards of Content
function displayCards(database, name_object){
    //Get Containers
    let info_description = document.querySelector('.info_description');
    let img_card = document.querySelector('.img_card');
    //I ask if the Card exists
    let exists_img = document.querySelector('#img') || null;
    let exists_desc = document.querySelector('#desc')||null;

    //If img and desc not exists:
    if(exists_img == null && exists_desc == null){

        //Find img and desc of object in database
        let {img_url, desc} = database.find(element => {
            if(element.nombre == name_object){
                return element;
            }
        })
        //Create Card of element
        img_card.innerHTML = `<img src="${img_url}" alt="img" id = 'img'>`;
        info_description.innerHTML = `<p id = 'desc'>${desc}<p>`;
        document.querySelector('.button_clear').classList.add('active')
    }
    //If img and desc exists:
    else{
        //delete them
        exists_desc.remove();
        exists_img.remove();
        //And Find them again
        let {img_url, desc} = database.find(element => {
            if(element.nombre == name_object){
                return element;
            }
        })
        //Create Card of element
        img_card.innerHTML = `<img id = 'img' src="${img_url}" alt="img">`;
        info_description.innerHTML = `<p id = 'desc'>${desc}<p>`;
        document.querySelector('.button_clear').classList.add('active')
    }
}

//Function to Display selections in a list
function displayElementsClass(name_selection){
    //Call List of elements class
    let ul = document.querySelector('.elements');
    //I ask if item already exists in element class
    let same_content = document.getElementById(name_selection) || null;        
    //if not exists:
    if(same_content == null ){
        //Update the value of num_list
        num_list += 1;
        //Create item in elements class
        let li =document.createElement('li');
        li.innerHTML = `<span>${num_list}</span>${name_selection}`;
        li.setAttribute('name', 'list');
        li.setAttribute('id', name_selection);
        ul.appendChild(li);
    }
    //If item already exists in elements class:
    else{
        //Send message error
        Toastify({
            text: "El elemento ya se encuentra en la clase",
            className: "info",
            style: {
            background: "linear-gradient(to right, #000000, #ff0000)",
            }
        }).showToast();
    }
}

//Listener to Save Class
document.querySelector('.button_save').addEventListener('click', () => {
    //Select all posturas of list elements of class
    let arrayP = document.querySelectorAll('.element_postura');
    //Save id in array
    let object_P = [];
    for(let i=0;i<arrayP.length;i++){
        object_P.push(arrayP[i].id);
    }
    console.log(object_P);
    //Select all mudras of list elements of class
    let arrayM = document.querySelectorAll('.element_mudra');
    let object_M = [];
    for(let i=0;i<arrayM.length;i++){
        object_M.push(arrayM[i].id);
    }
    console.log(object_M);
    //Select all respiraciones of list elements of class
    let arrayR = document.querySelectorAll('.element_respiracion');
    let object_R = [];
    for(let i=0;i<arrayR.length;i++){
        object_R.push(arrayR[i].id);
    }
    console.log(object_R);

    //Create object new class of yoga
    let user_class = new Yoga_Class (object_R, object_M, object_P);
    console.log(user_class);
    //I ask if exists one class in LocalStorage
    let exists_class = localStorage.getItem('Clase 1:') || null;
    //if yoga class not exists in LocalStorage create a new one With key: "clase 1"
    if(exists_class == null){
        localStorage.setItem('Clase 1:', JSON.stringify(user_class));
    }
    //if exists create a new one with other number class
    else{
        num_of_classes += 1;
        localStorage.setItem('Clase'+ num_of_classes + ':', JSON.stringify(user_class));
    }
    Toastify({
        text: "Se Guardo la Clase",
        className: "info",
        style: {
        background: "linear-gradient(to right, #000000, #1ACB12)",
        }
    }).showToast();
})
//Select button delete class
document.querySelector('.button_error').addEventListener('click', () =>{
    //Clear all LocalStorage
    localStorage.clear();
    Toastify({
        text: "Se Eliminaron las Clases",
        className: "info",
        style: {
        background: "linear-gradient(to right, #000000, #ff0000)",
        }
    }).showToast();
})

//Select button clear elements
document.querySelector('.button_clear').addEventListener('click', () => {
    let elements_class = document.getElementsByName('list');
    console.log(elements_class);
    //this function give me error
    elements_class.remove();
})