//Variable para guardar Base de Datos
var database;
//Array que va almacenando los elementos de la clase elegidos por el usuario
var class_elements = [];
//Llamo la base de datos
fetch("/assets/json/database.json")
.then((resp) => {
    return resp.text();
})
.then((data) => {
    //Lo convierto a un objeto
    data = JSON.parse(data); 
    //Y lo almaceno en la variable global database
    database = data;
})


//Funcion que carga todos los events listener
function LoadEventListeners(){

    //Listener que carga el carrusel cuando la pagina se lanza
    window.addEventListener('load', () => {
        //Creo el carrusel con los datos del Local Storage
        createCarousel()
    });

    //Selecciono el menu selector que despliega las opciones:(Posturas, Respiraciones, Mudras) 
    document.querySelector('.dropdown').addEventListener('click', () =>{
        //Le agrego active a su clase para mostrar o no el menu al usuario
        document.querySelector('.dropdown').classList.toggle('active');
    });

    //Selecciono el boton de opcion:(posturas) y le agrego un evento de tipo click
    document.querySelector('#btn_posturas').addEventListener('click', () =>{
        //Por lo cual creo el menu de opciones de posturas
        displayDataOptions("Posturas");
        //Le agrego la clase active para mostrarlo en el DOM
        document.querySelector('#Posturas').classList.toggle('active');
        console.log('Desplegar Menú de Posturas');
    });
    //Selecciono el boton de opcion:(Respiraciones) y le agrego un evento de tipo click
    document.querySelector('#btn_respiraciones').addEventListener('click', () =>{
        //Por lo cual creo el menu de opciones de respiraciones
        displayDataOptions("Respiraciones");
        //Le agrego la clase active para mostrarlo en el DOM
        document.querySelector('#Respiraciones').classList.toggle('active');
        console.log('Desplegar Menú de Respiraciones');
    });
    //Selecciono el boton de opcion:(Mudras) y le agrego un evento de tipo click
    document.querySelector('#btn_mudras').addEventListener('click', () =>{
        //Por lo cual creo el menu de opciones de mudras
        displayDataOptions("Mudras");
        //Le agrego la clase active para mostrarlo en el DOM
        document.querySelector('#Mudras').classList.toggle('active');
        console.log('Desplegar Menú de Mudras');
    });

    //Boton que elimina el ultimo elemento que se agrego a la clase
    document.querySelector('.button_clear').addEventListener('click', () => {
        deleteLastElement()
    })

    //Boton que guarda la clase personalizada del usuario
    document.querySelector('.button_save').addEventListener('click', () =>{
        //Ejecuto la función de verificación para comprobar que en la clase a guardar se encuentre almenos una postura
        if(verifySaveClass()){
            //Le doy la opción al usuario de darle un nombre a su clase
            Swal.fire({
                title: 'Escribe un nombre para tu clase',
                input: 'text',
                inputLabel: 'Clase de: ',
                showCancelButton: true,
                background: '#EFF3F5',
                confirmButtonColor: '#ff9a04',
                cancelButtonColor: '#000000',
                width: 500,
                //Validación de la información:
                inputValidator: (value) => {
                    //Si el campo esta vacío:
                if (!value) {
                    return 'Debes escribir un nombre'
                }
                //Si no:
                else{
                    //Ejecuto la función para guardar la nueva clase
                    SaveNewClass(class_elements, value);
                }}
            })
        }
        //Si no hay por lo menos una postura:
        else{
            //Le aviso al usuario
            Toastify({
                text: "La clase debe contener por lo menos una postura",
                className: "info",
                style: {
                background: "linear-gradient(to right, #000000, #ff0000)",
                }
            }).showToast();
        }
    })

    //Boton para borrar clase del Local Storage o del DOM
    document.querySelector('.button_error').addEventListener('click', () => {
        Swal.fire({
            title: '¿Estas seguro de eliminar todos los elementos de la clase?',
            showDenyButton: true,
            background: '#EFF3F5',
            confirmButtonColor: '#ff9a04',
            denyButtonColor: '#000000',
            confirmButtonText: 'Si',
            denyButtonText: `No, cancelar`,
            background: '#EFF3F5',
            width: 500,
          }).then((result) => {
            //Si el resultado es 'Si' (Eliminar todos los elementos):
            if (result.isConfirmed) {
                deleteAllElementsDOM();
            }
        })  
    })
}

//Agrego el valor de la seleccion(Posturas, Raspiraciones, Mudras) en el dropdown (Solo Estético)
function show(selection){
    document.querySelector('.textbox').value = selection;
}

//Funcion que despliega un menu con los elementos de la base de datos = (Posturas || Respiraciones || Mudras)
function displayDataOptions(arrayOfDatabase)
{
    //Pregunto si el menu ya existe en el DOM
    let exists_menu = document.querySelector('.dropdown2') || null;
    //Si no existe:
    if(exists_menu == null){
        //Selecciono la clase container del DOM
        let menu_dropdowns = document.querySelector('.menu_dropdowns');
        //Creo el div contenedor del menu
        let dropdown2 = document.createElement('div');
        //Le asigno la clase dropdown2
        dropdown2.classList.add('dropdown2');
        //Lo inserto en menu_dropdowns
        menu_dropdowns.appendChild(dropdown2);

        //Creo otro div con las opciones del menu
        let option2 = document.createElement('div');
        //Le asigno la clase option2
        option2.classList.add('option2');
        //Lo inserto en el dropdown2
        dropdown2.appendChild(option2);

        //Por cada elemento de la base de datos creo una opcion para el usuario
        for(let element of database[arrayOfDatabase]){
            //Creo el div contenedor
            let select = document.createElement('div');
            //Le agrego el nombre del elemento
            select.innerHTML = `${element['nombre']}`;
            //Le agrego un id de su respectiva array al menu
            dropdown2.setAttribute("id", arrayOfDatabase);
            //Lo inserto en option2
            option2.appendChild(select)
            //Le agrego un evento de tipo click a cada selección
            select.addEventListener('click', () => {
                //Cuando se le realiza click se despliega una card con su información
                displayCards(arrayOfDatabase, element['nombre']);
                //Tambien se guarda el objeto en una array con todos los demás elementos
                saveElement_inArray(arrayOfDatabase, element['nombre']);
                //Y se muestra en "Elementos de Clase Personalizada"
                displayElementsClass(arrayOfDatabase, element['nombre']);
            })
        }
    }
    //En caso de que ya exista el menu de opciones:
    else{
        //Elimino el Menu
        exists_menu.remove()
        //Y vuelvo a llamar la funcion displayDataOptions para que tome el camino del IF
        displayDataOptions(arrayOfDatabase)
    }
}

//Función para desplegar Card de un elemento de la base de datos
function displayCards(arrayOfDatabase, name_object)
{
    //Llamo los contenedores que conforman la card del DOM
    let info_description = document.querySelector('.info_description');
    let img_card = document.querySelector('.img_card');
    //Consulto si ya existe una Card de algun elemento
    let exists_img = document.querySelector('#img') || null;
    let exists_desc = document.querySelector('#desc')||null;

    //Si la card no existe:
    if(exists_desc == null && exists_img == null){
        //Busco la imagen y la descripcion del elemento por su nombre y su tipo de base de datos(Posturas, Respiraciones, Mudras)
        for(let element of database[arrayOfDatabase]){
            //Si el nombre del elemento coincide:
            if(element.nombre == name_object){
                //Obtengo la img
                let img_url = element["img_url"];
                //Obtengo su descripción
                let desc = element["desc"];
                //Creo la Card con los datos del elemento
                img_card.innerHTML = `<img id = 'img' src="${img_url}" alt="img">`;
                info_description.innerHTML = `<p id = 'desc'>${desc}<p>`;
                //Le agrego la clase active para que se muestre en el DOM
                document.querySelector('.card').classList.add('active')
            }
        }
    }
    //Si la Card ya existe:
    else{
        //Elimino su contenido
        exists_desc.remove();
        exists_img.remove();
        //Y vuelvo a ejecutar la función
        displayCards(arrayOfDatabase, name_object);
    }
}

//Función para desplegar los elementos que eligió el usuario a una lista en el DOM(Elementos de clase personalizada)
function displayElementsClass(arrayOfDatabase, name_selection)
{   
    //Llamo al contenedor de los elementos de clase
    let ul = document.querySelector('.elements');
    //Pregunto si el elemento ya se encuentra en la lista
    let same_content = document.getElementById(name_selection) || null;
    //Si el elemento no existe:
    if(same_content == null){
        //Creo la lista
        let li = document.createElement('li');
        //Actualizo su contenido con los datos
        let num_list = class_elements.length;
        li.innerHTML = `<span>${num_list}</span>${name_selection}`;
        //Le agrego atributo List
        li.setAttribute('name', 'list');
        //Y un id con el nombre del objeto
        li.setAttribute("class", "element_of_" + arrayOfDatabase)
        li.setAttribute('id', name_selection);
        //Lo inserto en ul
        ul.appendChild(li);
    }
    //Si el item ya existe en la lista:
    else{
        //Envío un mensaje de error
        Toastify({
            text: "El elemento ya se encuentra en la clase",
            className: "info",
            style: {
            background: "linear-gradient(to right, #000000, #ff0000)",
            }
        }).showToast();
    }
}

//Función que guarda un elemento de la clase en la array class_elements
function saveElement_inArray(arrayOfDatabase, name_object)
{
    //Busca el objeto en la base de datos
    for(let object of database[arrayOfDatabase]){
        //Si el nombre del elemento coincide y no se encuentra en class element:
        if(object.nombre == name_object && class_elements.indexOf(object) == -1){
            //Lo agrego al arreglo class_elements
            class_elements.push(object)
        }
    }
}

//Función que elimina un elemento de la clase en la array class_elements
function deleteElement_inArray(arrayOfDatabase, name_object)
{
    //Busco el objeto a eliminar en la base de datos
    for(let object of database[arrayOfDatabase]){
        //Si el nombre del elemento coincide:
        if(object.nombre == name_object){
            //Busco el objeto en class_elements
            let found_object= class_elements.indexOf(object);
            //Y lo elimino
            class_elements.splice(found_object, 1);
        }
    }
   
}

//Función para elminar el ultimo elemento agregado a la clase personalizada del DOM y del class_elements
function deleteLastElement()
{
    //Obtengo el ultimo elemento añadido y lo elimino de class_elements
    let last_element = class_elements.pop();
    //Luego lo elimino del DOM
    document.getElementById(last_element['nombre']).remove()
}

//Función que guarda la clase personalizada en el Local Storage y se asegura de que no exista una con el mismo nombre de clase
function SaveNewClass(arrayOfElementsClass, nameOfClass)
{
    //Consulto si existe la clase en el Local Storage
    let exists_class = localStorage.getItem('Clase de: ' + nameOfClass)|| null;
    //Si no existe:
    if(exists_class == null){
        //Lo guardo en el Local Storage
        localStorage.setItem('Clase de: '+ nameOfClass, JSON.stringify(arrayOfElementsClass));
        //Y le aviso al usuario que se guardó correctamente
        Swal.fire({
            icon: 'success',
            title: 'Tu clase ha sido guardada',
            text: 'Los cambios se realizaron con éxito',
            width: 500,
            background: '#EFF3F5',
            iconColor: '#000000',
            confirmButtonColor: '#ff9a04'
        });
        //Muestro la clase en carrusel
        displayClassInCarousel()
    }
    //Si ya existe una clase con el mismo nombre:
    else{
        //Le doy la opción al usuario de guardarla con otro nombre o sobrescribir los datos
        Swal.fire({
            title: 'Ya existe una clase con ese nombre, Deseas remplazarla?',
            showDenyButton: true,
            showCancelButton: true,
            background: '#EFF3F5',
            confirmButtonColor: '#ff9a04',
            denyButtonColor: '#000000',
            cancelButtonColor: '#000000',
            confirmButtonText: 'Si',
            denyButtonText: `No, quiero crear otra con otro nombre`,
          }).then((result) => {
            //Si el resultado es 'Si' (Sobreescribir los datos):
            if (result.isConfirmed) {
                //Lo guardo en el Local Storage
                localStorage.setItem('Clase de: '+ nameOfClass, JSON.stringify(arrayOfElementsClass));
                //Y le aviso al usuario de sus cambios
                Swal.fire({
                    icon: 'success',
                    title: 'Tu clase ha sido guardada',
                    text: 'Los cambios se realizaron con éxito',
                    width: 500,
                    background: '#EFF3F5',
                    iconColor: '#000000',
                    confirmButtonColor: '#ff9a04'
                });
                //Muestro la clase personalizada en el carrusel
                displayClassInCarousel();
            }
            //Si el resultado es 'No, quiero crear otra con otro nombre':
            else if (result.isDenied){
                //Le doy la opción de cambiarle el nombre
                Swal.fire({
                    title: 'Escribe un nombre para tu clase',
                    input: 'text',
                    inputLabel: 'Clase de: ',
                    showCancelButton: true,
                    background: '#EFF3F5',
                    confirmButtonColor: '#ff9a04',
                    cancelButtonColor: '#000000',
                    width: 500,
                    //Validación:
                    inputValidator: (value) => {
                        //Si el campo se encuentra vacío:
                      if (!value) {
                        return 'Debes escribir un nombre'
                      }else{
                        //Ejecuto la función nuevamente para guardar la clase
                        SaveNewClass(arrayOfElementsClass, value)
                      }
                    }
                  })
            }
        })
    }
}

//Función que crea el carrusel con las clases personalizadas
function createCarousel()
{
    //Selecciono el cuerpo del carrusel
    new Glider(document.querySelector('.carousel__lista'), {
        //Version Movil
        //Se muestra un slide (1 clase Personalizada)
        slidesToShow: 1,
        //Cantidad de slides que se mueven al realizar scroll
        slidesToScroll: 1,
        //indicadores de pagina de slides
        dots: '.carousel__indicadores',
        //flechas de scroll
        arrows: {
            prev: '.carousel__anterior',
            next: '.carousel__siguiente'
        },
        responsive: [
            {
              //Cuando la pantalla es >= 450px
              breakpoint: 450,
              settings: {
                //Se muestran 2 slides (2 clases Personalizadas)
                slidesToShow: 2,
                //Se mueven 2 slides al hacer scroll 
                slidesToScroll: 2
              }
            },{
              //Cuando la pantalla es >= 800px
              breakpoint: 800,
              settings: {
                //Se muestran 4 slides (4 clases Personalizadas)
                slidesToShow: 4,
                //Se mueven 4 slides al hacer scroll
                slidesToScroll: 4
              }
            }
        ]
    });
}

//Función que elimina el carrusel anterior y lo actualiza con las nuevas clases guardadas en el Local Storage
function displayClassInCarousel()
{
    //Selecciono la etiqueta contenedora del carrusel
    let carousel__contenedor = document.querySelector('.carousel__contenedor');
    //Elimino su contenido
    carousel__contenedor.innerHTML = "";

    //Creo los botones para deslizar el carrusel
    carousel__contenedor.innerHTML = `<button aria-label="Anterior" class="carousel__anterior">
    <i class="fas fa-chevron-left"></i>
    </button>
    <button aria-label="Siguiente" class="carousel__siguiente">
            <i class="fas fa-chevron-right"></i>
    </button>`;

    //Creo la etiqueta contenedora que almacenará todas las clases personalizadas del Local Storage
    let carousel__lista = document.createElement('div');
    //Le agrego la clase carousel__lista
    carousel__lista.setAttribute('class', 'carousel__lista');
    //Y lo inserto en l contenedor
    carousel__contenedor.appendChild(carousel__lista);

    //Recorro el Local Storage para mostrar las clases en el carrusel
    for(let i = 0; i < localStorage.length; i++){
        //Almaceno la clave de cada clase en la variable key
        let key = localStorage.key(i);
        //Almaceno el valor(Clase del usuario) de esa clave en class_achieved
        let class_achieved = (JSON.parse(localStorage.getItem(key)));

        //Creo la etiqueta que contendrá una imagen de la primera postura de la clase y el nombre de la clase(key)
        let carousel_elemento = document.createElement('div');
        //Le agrego la clase carousel__elemento
        carousel_elemento.classList.add('carousel__elemento');

        //Busco la imagen de la primera postura (Las posturas tienen un id de entre 1 y 48)
        let img_class = class_achieved.find(element => element.id <= 48).img_url
        //Agrego la imagen y la key en la etiqueta que representa una clase en el carrusel
        carousel_elemento.innerHTML = `<img src="${img_class}" alt="img_class">
        <p class = 'key' >${key}<p>`;
        //Agrego el elemento en la lista de elementos del carrusel
        carousel__lista.appendChild(carousel_elemento);
    }
    //Ejecuto la función de crear carrusel para actualizarlo con la nueva información
    createCarousel()
    //Y le agrego el listener que me da la clave de la clase
    searchKey()
}

//Función que verífica que haya almenos 1 postura en la clase personalizada a guardar
function verifySaveClass()
{
    //Consulta si existe un elemento de tipo postura en la lista con los elementos de la clase
    let exists_posture = document.querySelector('.element_of_Posturas') || null;
    //Si no existe devuelve false y si no true
    let ready_to_save = (exists_posture == null) ? false : true
    return ready_to_save
}

//Función que elimina todos los elementos de la lista del DOM (Elementos de Clase Persdonalizada) y del Array (Class_elements)
function deleteAllElementsDOM()
{
    //Paso a una array todos los elementos de la lista del DOM
    let list_elements_DOM = Array.from(document.getElementsByName('list'));
    //Y por cada elemento:
    list_elements_DOM.forEach(element => {
        //Elimino el ultimo del DOM y de la array
        deleteLastElement()
    });
}

//Función que muestra en la lista personalizada los elementos de una clase del Local Storage 
function displayClassInDOMList(keyOfClass)
{
    //Obtengo la Clase del storage a traves de su clave
    let class_achieved = JSON.parse(localStorage.getItem(keyOfClass));
    console.log(class_achieved)
    //Si en el array de elementos de clase ya se encuentran elementos:
    if(class_elements.length > 0){
        //Le aviso al usuario que esos datos no guardados se eliminarán
        Swal.fire({
            title: 'Hay elementos que no se han guardado, ¿deseas cargar igualmente la clase?',
            text: 'Los elementos no guardados se eliminarán',
            showDenyButton: true,
            background: '#EFF3F5',
            confirmButtonColor: '#ff9a04',
            denyButtonColor: '#000000',
            confirmButtonText: 'Si',
            denyButtonText: `No, cancelar`,
            background: '#EFF3F5',
            width: 500,
          }).then((result) => {
            //Si el resultado es 'Si' (Eliminar todos los elementos):
            if (result.isConfirmed) {
                deleteAllElementsDOM();
                //Y Por cada elemento de clase:
                class_achieved.forEach(element => {
                    //Lo guardo en la class_list
                    class_elements.push(element)
                    //Calculo mediante el id su tipo de base de datos (Posturas || Respiraciones || Mudras)
                    //Ejecuto displayElementsClass para mostrarlo en la lista del DOM (Elementos de clase personalizada)
                    if(element.id <= 48){
                        displayElementsClass('Posturas', element.nombre)
                    }else if(48 <= element.id <= 73){
                        displayElementsClass('Respiraciones', element.nombre)
                    }else{
                        displayElementsClass('Mudras', element.nombre)
                    }
                    
                })
            }
        })
    }else{
        //Por cada elemento de clase:
        class_achieved.forEach(element => {
            //Lo guardo en la class_list
            class_elements.push(element)
            //Calculo mediante el id su tipo de base de datos (Posturas || Respiraciones || Mudras)
            //Ejecuto displayElementsClass para mostrarlo en la lista del DOM (Elementos de clase personalizada)
            if(element.id <= 48){
                displayElementsClass('Posturas', element.nombre)
            }else if(48 <= element.id <= 73){
                displayElementsClass('Respiraciones', element.nombre)
            }else{
                displayElementsClass('Mudras', element.nombre)
            }
            
        })
    }

    
}
//Funcion que busca la clave de las clases del DOM y les agrega un listener que muestra los elementos que componen la clase
function searchKey(){
    //Convierto en una array a las clases que aparecen en el carrusel 
    let listOfClasses = Array.from(document.getElementsByClassName('carousel__elemento'));
    //Y por cada clase:
    listOfClasses.forEach(element => {
        //Le agrego un listener
        element.addEventListener('click', () => {
            //obtengo la clave
            let key = element.querySelector('.key')
            //Y muestro la clase en (elementos de clase personalizada)
            displayClassInDOMList(key.innerHTML)
        })   
    });
}

displayClassInCarousel()
LoadEventListeners()
