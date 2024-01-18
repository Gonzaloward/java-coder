
let total = 0;

function sumarPrecio(precio) {
    total += precio;
    actualizarTotal();
}

function actualizarTotal() {
    document.getElementById('total').innerText = `Total: $${total}`;
}

document.addEventListener('DOMContentLoaded', function() {
    const botonesHecho = document.querySelectorAll('.btn-primary');
    botonesHecho.forEach(function(boton) {
        boton.addEventListener('click', function() {
            const precioString = this.parentNode.querySelector('.card-text').innerText;
            const precio = parseInt(precioString.split(':')[1].trim().replace('$', '').replace(',', ''));
            sumarPrecio(precio);
        });
    });
});
