function changeFavorito() {
    var new_a = '<a id="icon-favorito" href="" data-bs-toggle="modal" data-bs-target="#produtoFavoritoModal"><i class="bi bi-heart-fill"></i></a>';
    document.getElementById("icon-favorito").innerHTML = new_a;
}

function changeCarrinhoCompras() {
    var new_a = '<a id="icon-carrinho" href="" data-bs-toggle="modal" data-bs-target="#produtoCarrinhoDeComprasModal"><i class="bi bi-cart-fill" onclick="changeCarrinhoCompras()"></i></a>';
    document.getElementById("icon-carrinho").innerHTML = new_a;
}