const main = document.querySelector('#main');
const publicacion = {
    'data': [{
        'usuario': 'Docsito',
        'foto_usuario': 'assets/perfil.jpg',
        'foto_publicacion': 'assets/publi.jpg',
        'descripcion': 'lorem ipsum lalala',
        'likes': "0",
        'comentarios': [{
            'usuario': 'Feinman',
            'comentario': 'maquinaaaaaa'
        }],
        'guardar': 'false',
    }]
}


// nueva_publicacion();

const tema = (publi) => {
    return `
    <section class="publicacion" id='publicacion'>
    <div >
        <div class="headerPublicacion">
        <div class="infoPerfil">
            <img src="${publi.foto_usuario}" alt="" class="fotoPerfil">
            <a class="nombrePerfil" href="">
                <h2 class="nombrePerfilPubli">${publi.usuario}</h2>
            </a>
        </div>
        <div class="opcionesPublicacion">
            <img class="imgOpciones" src="assets/iconos/options.png" alt="">
        </div>
    </div>
    <img src="${publi.foto_publicacion}" alt="" class="fotoPublicacion">
    <div class="iconosPublicacion">
        <div class="sociales">
            <img src="assets/iconos/meGusta.png" alt="" class="meGusta">
            <img src="assets/iconos/comentario.png" alt="" class="comentarios">
            <img src="assets/iconos/compartir.png" alt="" class="compartir">
        </div>
        <img src="assets/iconos/guardar.png" alt="" class="guardar">
    </div>
    <div class="cantMG">
        999 Me Gusta
    </div>
    <div class="descripcion">
            <p class="contenido_descripcion">
                <a class="perfilComentario" href="">${publi.usuario}</a> ${publi.descripcion}
            </p>
        </div>
        // ----------------------------------------------------
    <div class="cajaComentarios">
        <div class="comentario">
            <p class="contenidoComentario">
                <a class="perfilComentario" href="">${publi.comentarios[0].usuario}</a> ${publi.comentarios[0].comentario}
            </p>
        </div>
        <div class="comentario">
            <p class="contenidoComentario">
                <a class="perfilComentario" href="">pepito</a> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, aliquam!
            </p>
        </div>
        <div class="comentario">
    
            <p class="contenidoComentario">
                <a class="perfilComentario" href="">pepito</a> hola
            </p>
        </div>
    </div>
    // -------------------------------------------
    </div>
    
    </section>
    `
}



const map_function = (publi) => {
    const elemento = document.createElement("article")
    elemento.innerHTML = tema(publi)

    return elemento

}

const crear_publicacion = () => {

    const ajax = new XMLHttpRequest();

    ajax.open('GET', 'publicacion.json');

    ajax.addEventListener('load', ajaxCallback);

    ajax.send();

    function ajaxCallback() {
        if (ajax.status === 200) {
            const respuesta = ajax.response;

            const respuestaParseada = JSON.parse(respuesta);
            console.log(respuestaParseada)
            const publicaciones = respuestaParseada.data;
            console.log(publicaciones)
                // intento de agregado de comentarios
            const map_comentarios = publicaciones.comentarios
            console.log(map_comentarios);
            const map_c = map_comentarios.map(map_function);
            map_c.forEach(element => {
                    main.appendChild(element)
                })
                // const map_com = map_comentarios.map(map_function);
                // map_com.forEach(element => {
                //         main.appendChild(element)
                //     })
                //     // 
            const map_publicaciones = publicaciones.map(map_function);
            map_publicaciones.forEach(element => {
                main.appendChild(element)
            })
        }

    }

}



crear_publicacion()
    // function nueva_publicacion(){
    //     const element = document.querySelector('#publicacion');
    //         const fragment = document.createDocumentFragment();
    //         const publicacion = document.createElement('div');
    //         publicacion.textContent = "lalalalala";
    //         const info_perfil = document.createElement('div');
    //         info_perfil.classList.add('infoPerfil');
    //         publicacion.appendChild(info_perfil);
    //         fragment.appendChild(publicacion);
    //         element.appendChild(fragment);

//     }

// const publi = `
// <section class="publicacion" id='publicacion'>
// <div >
//     <div class="headerPublicacion">
//     <div class="infoPerfil">
//         <img src="assets/perfil.jpg" alt="" class="fotoPerfil">
//         <a class="nombrePerfil" href="">
//             <h2 class="nombrePerfilPubli">${user}</h2>
//         </a>
//     </div>
//     <div class="opcionesPublicacion">
//         <img class="imgOpciones" src="assets/iconos/options.png" alt="">
//     </div>
// </div>
// <img src="assets/publi.jpg" alt="" class="fotoPublicacion">
// <div class="iconosPublicacion">
//     <div class="sociales">
//         <img src="assets/iconos/meGusta.png" alt="" class="meGusta">
//         <img src="assets/iconos/comentario.png" alt="" class="comentarios">
//         <img src="assets/iconos/compartir.png" alt="" class="compartir">
//     </div>
//     <img src="assets/iconos/guardar.png" alt="" class="guardar">
// </div>
// <div class="cantMG">
//     999 Me Gusta
// </div>
// <div class="cajaComentarios">
//     <div class="comentario">
//         <p class="contenidoComentario">
//             <a class="perfilComentario" href="">pepito</a> hola
//         </p>
//     </div>
//     <div class="comentario">
//         <p class="contenidoComentario">
//             <a class="perfilComentario" href="">pepito</a> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, aliquam!
//         </p>
//     </div>
//     <div class="comentario">

//         <p class="contenidoComentario">
//             <a class="perfilComentario" href="">pepito</a> hola
//         </p>
//     </div>
// </div>
// </div>

// </section>
// `