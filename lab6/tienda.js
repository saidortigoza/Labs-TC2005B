const cards = document.getElementById('cards')
const items = document.getElementById('items')
const footer = document.getElementById('footer')
const templateCard = document.getElementById('template-card').content
const templateFooter = document.getElementById('template-footer').content
const templateCarrito = document.getElementById('template-carrito').content
const fragment = document.createDocumentFragment()
let carrito = {}

document.addEventListener('DOMContentLoaded', () => {
    fetchData()
    if(localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
    }
    generarCarrito()
})

cards.addEventListener('click', e => {
    agregarCarrito(e)

})

items.addEventListener('click', e => {
    btnAccion(e)
})

const fetchData = async () => {
    try {
        const res = await fetch('api.json')
        const data = await res.json()
        generarCards(data)
    } catch(error){
        console.log(error)
    }
}

const generarCards = (data) => {
    data.forEach(producto =>{
        templateCard.querySelector('h5').textContent = producto.title
        templateCard.querySelector('p').textContent = producto.precio
        templateCard.querySelector('img').setAttribute('src', producto.thumbnailUrl)
        templateCard.querySelector('.btn-dark').dataset.id = producto.id
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    cards.appendChild(fragment)
}

const agregarCarrito = e => {
    if(e.target.classList.contains('btn-dark')){
        setCarrito(e.target.parentElement)
    }
    e.stopPropagation()
}

const setCarrito = objeto => {
    console.log(objeto)
    const producto = {
        id: objeto.querySelector('.btn-dark').dataset.id,
        title: objeto.querySelector('h5').textContent,
        precio: objeto.querySelector('p').textContent,
        cantidad: 1
    }
    if(carrito.hasOwnProperty(producto.id)){
        producto.cantidad = carrito[producto.id].cantidad + 1
    }
    carrito[producto.id] = {...producto}
    generarCarrito()
}

const generarCarrito = () =>{
    items.innerHTML = ""
    Object.values(carrito).forEach(producto => {
        templateCarrito.querySelector('th').textContent = producto.id
        templateCarrito.querySelectorAll('td')[0].textContent = producto.title
        templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad
        templateCarrito.querySelector('.btn-info').dataset.id = producto.id
        templateCarrito.querySelector('.btn-danger').dataset.id = producto.id
        templateCarrito.querySelectorAll('span')[0].textContent = producto.cantidad * producto.precio
        templateCarrito.querySelectorAll('span')[1].textContent = (producto.cantidad * producto.precio * 0.16).toFixed(2)
        templateCarrito.querySelectorAll('span')[2].textContent = (producto.cantidad * producto.precio * 1.16).toFixed(2)
        const clone = templateCarrito.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)
    generarFooter()
    localStorage.setItem('carrito', JSON.stringify(carrito))
}

const generarFooter = () => {
    footer.innerHTML = ""
    if(Object.keys(carrito).length === 0){
        footer.innerHTML = `
        <th scope="row" colspan="5">Carrito vacío</th>
        `
        return
    }
    const nCantidad = Object.values(carrito).reduce((accum, {cantidad}) => accum + cantidad, 0)
    const nPrecio = Object.values(carrito).reduce((accum, {cantidad, precio}) => accum + cantidad * precio, 0)
    const nIVA = Object.values(carrito).reduce((accum, {cantidad, precio}) => accum + cantidad * precio * 0.16, 0)
    const nTotal = Object.values(carrito).reduce((accum, {cantidad, precio}) => accum + cantidad * precio * 1.16, 0)
    
    templateFooter.querySelectorAll('td')[0].textContent = nCantidad
    templateFooter.querySelectorAll('span')[0].textContent = nPrecio
    templateFooter.querySelectorAll('span')[1].textContent = nIVA
    templateFooter.querySelectorAll('span')[2].textContent = nTotal
    
    const clone = templateFooter.cloneNode(true)
    fragment.appendChild(clone)
    footer.appendChild(fragment)

    const btnVaciar = document.getElementById('vaciar-carrito')
    btnVaciar.addEventListener('click', () =>{
        carrito = {}
        generarCarrito()
    })
}

const btnAccion = e => {
    if(e.target.classList.contains('btn-info')){
        const producto = carrito[e.target.dataset.id]
        producto.cantidad++
        carrito[e.target.dataset.id] = {...producto}
        generarCarrito()
    }
    if(e.target.classList.contains('btn-danger')){
        const producto = carrito[e.target.dataset.id]
        producto.cantidad--
        if(producto.cantidad === 0){
            delete carrito[e.target.dataset.id]

        }
        generarCarrito()
    }
    e.stopPropagation()
}