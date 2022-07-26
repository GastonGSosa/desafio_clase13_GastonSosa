/* ******************************************************************************* */
/* ******************************DECLARACION DE CLASES**************************** */
/* ******************************************************************************* */

class Producto {
    constructor (id,nombre,marca,precio) {
        this.id=id
        this.nombre=nombre
        this.marca=marca
        this.precio=precio
    }
    inflacion (rate) {
        return(this.precio*rate)
    }
}
/* ******************************************************************************* */
/* ******************DECLARACION DE CONSTANTES Y VARIABLES************************ */
/* ******************************************************************************* */

//Productos
const producto1 = new Producto (1,'fideos','Don Vicente',200)
const producto2 = new Producto (2,'yerba','La Merced',800)
const producto3 = new Producto (3,'Dulce de Leche','La Serenisima',450)
const producto4 = new Producto (4,'Atun','Gomes Da Costa',600)
const producto5 = new Producto (5,'Queso Rallado','La Serenisima',550)
const producto6 = new Producto (6,'Chocolate','Cadbury',350)

//Array con todos los productos
const productos = [producto1,producto2,producto3,producto4,producto5,producto6]
const carrito = []



//Constantes con elementos del HTML
const htmlMain = document.getElementById('htmlMain')
const botonCarrito = document.getElementById('botonCarrito')

botonCarrito.addEventListener('click',()=>{
    Swal.fire({
        title: '<strong><u>Tu Carrito</u></strong>',
        icon: 'info',
        html:carrito,
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
          'OK!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:
          'Cancelar',
        cancelButtonAriaLabel: 'Thumbs down'
      })

})


/* ******************************************************************************* */
/* ****************************DECLARACION DE FUNCIONES*************************** */
/* ******************************************************************************* */

//Esta funcion crea el html de las cartas para los objetos de clase Producto - NO ES NECESARIO LLAMAR ESTA FUNCION YA QUE ESTA DENTRO DE LA FUNCION crearCartaTodos()
function crearCartaProducto (prod) {
    let htmlCarta = `<div class="card text-white bg-dark mb-4" style="max-width: 18rem;">
                        <div class="card-header">${prod.nombre}</div>
                        <div class="card-body">
                            <h4 class="card-title">${prod.marca}</h4>
                            <p class="card-text">$${prod.precio}</p>
                        </div>
                        <div class="card-footer"><button class="btn btn-primary" id="botonProducto${prod.id}">Agregar al carrito!</button></div>
                    </div>`
    return(htmlCarta)
}

//Esta funcion toma la funcion de creacion de cartas, y la aplica a un array de objetos clase Producto, los parámetros son un array y un objeto html que contendra todos.
function crearCartaTodos (array,htmlElement) {
    array.forEach(element => {
        htmlElement.innerHTML+= crearCartaProducto(element)
    });
}

//Esta funcion le da funcionalidad al boton de cada producto. Se core después de la función crearCartaTodos()
function crearBotonProductos (array) {
    array.forEach(element =>{
        document.getElementById(`botonProducto${element.id}`).addEventListener('click',()=>{
            carrito.push(element.nombre)
            Toastify({
                text: "Producto agregado al carrito",
                duration: 3000,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(315deg, #ff4e00 0%, #ec9f05 74%)",
                },
                onClick: function(){} // Callback after click
              }).showToast();

        })
    })
}

/* ******************************************************************************* */
/* ***********************************EJECUCION*********************************** */
/* ******************************************************************************* */

crearCartaTodos(productos,htmlMain)
crearBotonProductos(productos)
