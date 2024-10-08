document.addEventListener('DOMContentLoaded', () => {
    const secciones = document.querySelectorAll('.seccion');
    const inicioSection = document.getElementById('inicio');
    const nav = document.getElementById('nav');

    // Muestra la sección de inicio por defecto
    secciones.forEach(seccion => seccion.style.display = 'none');
    inicioSection.style.display = 'block';

    // Configura los enlaces para mostrar las secciones adecuadas
    document.querySelectorAll('#nav a').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Previene el desplazamiento automático al ancla
            secciones.forEach(seccion => seccion.style.display = 'none');
            document.getElementById(link.getAttribute('href').substring(1)).style.display = 'block';

            // Mostrar u ocultar la barra de navegación según la sección activa
            nav.style.display = link.getAttribute('href') === '#inicio' ? 'none' : 'flex';
        });
    });

    // Inicializa la vista con la sección de inicio
    showSection('inicio');
});
document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');

    // Asegúrate de que la pantalla de carga se oculta después de que se haya cargado todo
    window.onload = () => {
        loadingScreen.style.display = 'none';
        mainContent.style.display = 'block';
    };
});

function showSection(id) {
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach(seccion => seccion.style.display = 'none');
    document.getElementById(id).style.display = 'block';

    // Actualiza la visibilidad de la barra de navegación
    const nav = document.getElementById('nav');
    nav.style.display = id === 'inicio' ? 'none' : 'flex';
}

function showOverlay(imageUrl, category) {
    const overlay = document.getElementById('overlay');
    const overlayImg = document.createElement('div');
    overlayImg.className = 'overlay-img ' + category + '-overlay';
    overlayImg.style.backgroundImage = `url(${imageUrl})`;
    overlayImg.style.zIndex = 20; // Asegura que la capa esté sobre otras
    overlay.appendChild(overlayImg);
}

// Añade un ítem de ropa a una sección y configura el clic para mostrarlo en el maniquí
function addRopaItem(sectionId, imageUrl, slotId, category) {
    const section = document.getElementById(sectionId);
    const item = document.createElement('div');
    item.className = 'ropa-item';
    item.style.backgroundImage = `url(${imageUrl})`;
    item.dataset.slot = slotId;
    item.dataset.category = category; // Agrega la categoría al dataset
    item.addEventListener('click', () => {
        const slot = document.getElementById(slotId);
        slot.style.backgroundImage = `url(${imageUrl})`;
        showOverlay(imageUrl, category); // Muestra la ropa en el overlay
    });
    section.appendChild(item);
}
// Ejemplo de cómo agregar items a la colección
const ropaItems = [
    { section: 'gorras', imageUrl: 'Coleccion/auriblanco.png', slotId: 'gorras-slot' , category: 'gorras' },
    { section: 'gorras', imageUrl: 'Coleccion/disney.png', slotId: 'gorras-slot' , category: 'gorras' },
    { section: 'gorras', imageUrl: 'Coleccion/moñorojo.png', slotId: 'gorras-slot' , category: 'gorras' },
    { section: 'gorras', imageUrl: 'Coleccion/vincha.png', slotId: 'gorras-slot' , category: 'gorras' },
    { section: 'gorras', imageUrl: 'Coleccion/moñorosa.png', slotId: 'gorras-slot' , category: 'gorras' },
    { section: 'gorras', imageUrl: 'Coleccion/lazorosa.png', slotId: 'gorras-slot' , category: 'gorras' },
    { section: 'gorras', imageUrl: 'Coleccion/moñonegro.png', slotId: 'gorras-slot' , category: 'gorras' },
    { section: 'gorras', imageUrl: 'Coleccion/orejeras.png', slotId: 'gorras-slot' , category: 'gorras' },
    { section: 'gorras', imageUrl: 'Coleccion/aurirosa.png', slotId: 'gorras-slot' , category: 'gorras' },
    { section: 'remeras', imageUrl: 'Coleccion/remeraosito.png', slotId: 'remeras-slot' , category: 'remeras' },
    { section: 'remeras', imageUrl: 'Coleccion/protect.png', slotId: 'remeras-slot' , category: 'remeras' },
    { section: 'remeras', imageUrl: 'Coleccion/conejito.png', slotId: 'remeras-slot' , category: 'remeras' },
    { section: 'remeras', imageUrl: 'Coleccion/inter.png', slotId: 'remeras-slot' , category: 'remeras' },
    { section: 'remeras', imageUrl: 'Coleccion/basica.png', slotId: 'remeras-slot' , category: 'remeras' },
    { section: 'remeras', imageUrl: 'Coleccion/encaje.png', slotId: 'remeras-slot' , category: 'remeras' },
    { section: 'remeras', imageUrl: 'Coleccion/merienda.png', slotId: 'remeras-slot' , category: 'remeras' },
    { section: 'remeras', imageUrl: 'Coleccion/ballet.png', slotId: 'remeras-slot' , category: 'remeras' },
    { section: 'remeras', imageUrl: 'Coleccion/jesus.png', slotId: 'remeras-slot' , category: 'remeras' },
    { section: 'remeras', imageUrl: 'Coleccion/sorteo.png', slotId: 'remeras-slot' , category: 'remeras' },
    { section: 'remeras', imageUrl: 'Coleccion/cerezas.png', slotId: 'remeras-slot' , category: 'remeras' },
    { section: 'remeras', imageUrl: 'Coleccion/corazon.png', slotId: 'remeras-slot' , category: 'remeras' },
    { section: 'remeras', imageUrl: 'Coleccion/gatito.png', slotId: 'remeras-slot' , category: 'remeras' },
    { section: 'remeras', imageUrl: 'Coleccion/lps.png', slotId: 'remeras-slot' , category: 'remeras' },
    { section: 'camperas', imageUrl: 'Coleccion/peluchecam.png', slotId: 'camperas-slot' , category: 'camperas' },
    { section: 'camperas', imageUrl: 'Coleccion/adidas.png', slotId: 'camperas-slot' , category: 'camperas' },
    { section: 'camperas', imageUrl: 'Coleccion/frambuesa.png', slotId: 'camperas-slot' , category: 'camperas' },
    { section: 'camperas', imageUrl: 'Coleccion/camgris.png', slotId: 'camperas-slot' , category: 'camperas' },
    { section: 'camperas', imageUrl: 'Coleccion/parca.png', slotId: 'camperas-slot' , category: 'camperas' },
    { section: 'camperas', imageUrl: 'Coleccion/puffernegra.png', slotId: 'camperas-slot' , category: 'camperas' },
    { section: 'camperas', imageUrl: 'Coleccion/blazerblanco.png', slotId: 'camperas-slot' , category: 'camperas' },
    { section: 'camperas', imageUrl: 'Coleccion/blazernegro.png', slotId: 'camperas-slot' , category: 'camperas' },
    { section: 'camperas', imageUrl: 'Coleccion/blazerrosa.png', slotId: 'camperas-slot' , category: 'camperas' },
    { section: 'pantalones', imageUrl: 'Coleccion/calsa.png', slotId: 'pantalones-slot' , category: 'pantalones' },
    { section: 'pantalones', imageUrl: 'Coleccion/azulvolados.png', slotId: 'pantalones-slot' , category: 'pantalones' },
    { section: 'pantalones', imageUrl: 'Coleccion/miniceleste.png', slotId: 'pantalones-slot' , category: 'pantalones' },
    { section: 'pantalones', imageUrl: 'Coleccion/mininegra.png', slotId: 'pantalones-slot' , category: 'pantalones' },
    { section: 'pantalones', imageUrl: 'Coleccion/minirecta.png', slotId: 'pantalones-slot' , category: 'pantalones' },
    { section: 'pantalones', imageUrl: 'Coleccion/rectanegra.png', slotId: 'pantalones-slot' , category: 'pantalones' },
    { section: 'pantalones', imageUrl: 'Coleccion/polleranegra.png', slotId: 'pantalones-slot' , category: 'pantalones' },
    { section: 'zapatillas', imageUrl: 'Coleccion/botamarron.png', slotId: 'zapatillas-slot' , category: 'zapatillas' },
    { section: 'zapatillas', imageUrl: 'Coleccion/zapacrema.png', slotId: 'zapatillas-slot' , category: 'zapatillas' },
    { section: 'zapatillas', imageUrl: 'Coleccion/bucaneras.png', slotId: 'zapatillas-slot' , category: 'zapatillas' },
    { section: 'zapatillas', imageUrl: 'Coleccion/texanablanca.png', slotId: 'zapatillas-slot' , category: 'zapatillas' },
    { section: 'zapatillas', imageUrl: 'Coleccion/crocs.png', slotId: 'zapatillas-slot' , category: 'zapatillas' },
    { section: 'accesorios', imageUrl: 'Coleccion/bolsopuffer.png', slotId: 'accesorios-slot' , category: 'accesorios' },
    { section: 'accesorios', imageUrl: 'Coleccion/bolsooso.png', slotId: 'accesorios-slot' , category: 'accesorios' },
    { section: 'accesorios', imageUrl: 'Coleccion/bolsonegro.png', slotId: 'accesorios-slot' , category: 'accesorios' },
    { section: 'accesorios', imageUrl: 'Coleccion/bolsofruta.png', slotId: 'accesorios-slot' , category: 'accesorioss' },
    { section: 'accesorios', imageUrl: 'Coleccion/cancan.png', slotId: 'accesorios-slot' , category: 'accesorios' },
    { section: 'accesorios', imageUrl: 'Coleccion/bolsoconejo.png', slotId: 'accesorios-slot' , category: 'accesorios' },
    { section: 'accesorios', imageUrl: 'Coleccion/bolsocorazon.png', slotId: 'accesorios-slot' , category: 'accesorios' },
    { section: 'accesorios', imageUrl: 'Coleccion/bolsojean.png', slotId: 'accesorios-slot' , category: 'accesorios' },
];

ropaItems.forEach(item => addRopaItem(item.section, item.imageUrl, item.slotId, item.category));

// Ejemplo de cómo agregar items a la wishlist
const wishlistItems = [
    { section: 'gorras-wishlist', imageUrl: 'Wishlist/apple.png', slotId: 'gorras-slot' , category: 'gorras' },
    { section: 'gorras-wishlist', imageUrl: 'Wishlist/gorrarosa.png', slotId: 'gorras-slot' , category: 'gorras' },
    { section: 'remeras-wishlist', imageUrl: 'Wishlist/osogym.png', slotId: 'remeras-slot' , category: 'remeras' },
    { section: 'remeras-wishlist', imageUrl: 'Wishlist/topnegro.png', slotId: 'remeras-slot' , category: 'remeras' },
    { section: 'camperas-wishlist', imageUrl: 'Wishlist/camperadeporte.png', slotId: 'camperas-slot' , category: 'camperas' },
    { section: 'camperas-wishlist', imageUrl: 'Wishlist/pufferblanca.png', slotId: 'camperas-slot' , category: 'camperas' },
    { section: 'camperas-wishlist', imageUrl: 'Wishlist/puffer.png', slotId: 'camperas-slot' , category: 'camperas' },
    { section: 'camperas-wishlist', imageUrl: 'Wishlist/ferrari.png', slotId: 'camperas-slot' , category: 'camperas' },
    { section: 'pantalones-wishlist', imageUrl: 'Wishlist/polleragris.png', slotId: 'pantalones-slot' , category: 'pantalones' },
    { section: 'pantalones-wishlist', imageUrl: 'Wishlist/miumiu.png', slotId: 'pantalones-slot' , category: 'pantalones' },
    { section: 'zapatillas-wishlist', imageUrl: 'Wishlist/botas.png', slotId: 'zapatillas-slot' , category: 'zapatillas' },
    { section: 'zapatillas-wishlist', imageUrl: 'Wishlist/mocasines.png', slotId: 'zapatillas-slot' , category: 'zapatillas' },
    { section: 'zapatillas-wishlist', imageUrl: 'Wishlist/pantukitty.png', slotId: 'zapatillas-slot' , category: 'zapatillas' },
    { section: 'zapatillas-wishlist', imageUrl: 'Wishlist/texanamarron.png', slotId: 'zapatillas-slot' , category: 'zapatillas' },
    { section: 'zapatillas-wishlist', imageUrl: 'Wishlist/zapanike.png', slotId: 'zapatillas-slot' , category: 'zapatillas' },
    { section: 'zapatillas-wishlist', imageUrl: 'Wishlist/zapatopper.png', slotId: 'zapatillas-slot' , category: 'zapatillas' },
    { section: 'accesorios-wishlist', imageUrl: 'Wishlist/botella.png', slotId: 'accesorios-slot' , category: 'accesorios' },
    { section: 'accesorios-wishlist', imageUrl: 'Wishlist/bolsodepor.png', slotId: 'accesorios-slot' , category: 'accesorios' },
    { section: 'accesorios-wishlist', imageUrl: 'Wishlist/termo.png', slotId: 'accesorios-slot' , category: 'accesorios' },
    { section: 'accesorios-wishlist', imageUrl: 'Wishlist/bufandarosa.png', slotId: 'accesorios-slot' , category: 'accesorios' },
    { section: 'accesorios-wishlist', imageUrl: 'Wishlist/juicy.png', slotId: 'accesorios-slot' , category: 'accesorios' },
    { section: 'accesorios-wishlist', imageUrl: 'Wishlist/guanterosa.png', slotId: 'accesorios-slot' , category: 'accesorios' },
    { section: 'accesorios-wishlist', imageUrl: 'Wishlist/lv.png', slotId: 'accesorios-slot' , category: 'accesorios' },
    { section: 'accesorios-wishlist', imageUrl: 'Wishlist/mymom.png', slotId: 'accesorios-slot' , category: 'accesorios' },
    { section: 'accesorios-wishlist', imageUrl: 'Wishlist/palo.png', slotId: 'accesorios-slot' , category: 'accesorios' },
    { section: 'accesorios-wishlist', imageUrl: 'Wishlist/bolsoflower.png', slotId: 'accesorios-slot' , category: 'accesorios' },
    { section: 'accesorios-wishlist', imageUrl: 'Wishlist/cepillosecador.png', slotId: 'accesorios-slot' , category: 'accesorios' },
    { section: 'accesorios-wishlist', imageUrl: 'Wishlist/ondasdesaten.png', slotId: 'accesorios-slot' , category: 'accesorios' },
    { section: 'accesorios-wishlist', imageUrl: 'Wishlist/balenciaga.png', slotId: 'accesorios-slot' , category: 'accesorios' },
];

wishlistItems.forEach(item => addRopaItem(item.section, item.imageUrl, item.slotId, item.category));