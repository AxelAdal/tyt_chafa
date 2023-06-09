function primera_parte(){
    let elementos =
    `<div class="forma">
    <img src="https://img.freepik.com/vector-premium/perfil-avatar-hombre-icono-redondo_24640-14044.jpg?w=2000" alt="">
</div>
<div class="forma2">
    <div class="btn"></div>
    <div class="btn2"></div>
    <div class="btn3"> <p>Seguir</p> </div>
</div>
<div class="nombre">
    <h2>Nombre de usuario</h2>
    <p>@UserName</p>
</div>`;

  let inicio_de_tienda = document.querySelector(".caja-pa");

  inicio_de_tienda.innerHTML = elementos;

}

primera_parte();