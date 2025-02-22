const RAFFLE_PATH = '/raffle';
document.addEventListener("DOMContentLoaded", () => {
    // add delay 1000ms 
    setTimeout(() => {
        document.body.classList.remove('loading');
    }, 1000);

    const pathname = window.location.pathname;
    if (pathname !== RAFFLE_PATH) {
        buildHeader();
        buildMenu();
    }
    buildFooter();
});

const buildHeader = () => {
    // header not id="raffle"
    const header = document.querySelector('header:not(#raffle)');
    header.innerHTML = `
        <div class="container">
            <img src="images/Logos/Isologo Crecer blanco.png" alt="logo-header" width="32" />
        </div>
    `
}

const buildMenu = () => {
    const pathname = window.location.pathname;

    const menuItems = [
        { href: '/', text: 'Subir archivo', icon: 'M4 3.99999C4 3.26457 4.59792 2.66666 5.33333 2.66666H8.66667V5.33332C8.66667 5.70207 8.96458 5.99999 9.33333 5.99999H12V12C12 12.7354 11.4021 13.3333 10.6667 13.3333H5.33333C4.59792 13.3333 4 12.7354 4 12V3.99999Z' },
        { href: 'prizes.html', text: 'Editar Sorteo', icon: 'M12.5714 6.85713H9.14286V3.42856C9.14286 3.00785 8.80167 2.66666 8.38095 2.66666H7.61905C7.19833 2.66666 6.85714 3.00785 6.85714 3.42856V6.85713H3.42857C3.00786 6.85713 2.66667 7.19832 2.66667 7.61904V8.38094C2.66667 8.80166 3.00786 9.14285 3.42857 9.14285H6.85714V12.5714C6.85714 12.9921 7.19833 13.3333 7.61905 13.3333H8.38095C8.80167 13.3333 9.14286 12.9921 9.14286 12.5714V9.14285H12.5714C12.9921 9.14285 13.3333 8.80166 13.3333 8.38094V7.61904C13.3333 7.19832 12.9921 6.85713 12.5714 6.85713Z' },
        { href: 'participants.html', text: 'Ver participantes', icon: 'M8 8.66666C9.65625 8.66666 11 7.32291 11 5.66666C11 4.01041 9.65625 2.66666 8 2.66666C6.34375 2.66666 5.00001 4.01041 5.00001 5.66666C5.00001 7.32291 6.34375 8.66666 8 8.66666ZM10.6667 9.33332H9.51875C9.05625 9.54582 8.54167 9.66666 8 9.66666C7.45834 9.66666 6.94584 9.54582 6.48126 9.33332H5.33334C3.86042 9.33332 2.66667 10.5271 2.66667 12V12.3333C2.66667 12.8854 3.11459 13.3333 3.66667 13.3333H12.3333C12.8854 13.3333 13.3333 12.8854 13.3333 12.3333V12C13.3333 10.5271 12.1396 9.33332 10.6667 9.33332Z' },
        { href: 'winners.htlm', text: 'Exportar ganadores', icon: 'M8 8.66666C9.65625 8.66666 11 7.32291 11 5.66666C11 4.01041 9.65625 2.66666 8 2.66666C6.34375 2.66666 5.00001 4.01041 5.00001 5.66666C5.00001 7.32291 6.34375 8.66666 8 8.66666ZM10.6667 9.33332H9.51875C9.05625 9.54582 8.54167 9.66666 8 9.66666C7.45834 9.66666 6.94584 9.54582 6.48126 9.33332H5.33334C3.86042 9.33332 2.66667 10.5271 2.66667 12V12.3333C2.66667 12.8854 3.11459 13.3333 3.66667 13.3333H12.3333C12.8854 13.3333 13.3333 12.8854 13.3333 12.3333V12C13.3333 10.5271 12.1396 9.33332 10.6667 9.33332Z' },
    
    ];

    // Obtener el elemento de la lista del menú
    const menuList = document.getElementById('menu-list');
    const ul = document.createElement('ul');

    // Iterar sobre la matriz de elementos del menú y crear elementos HTML
    menuItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

        // Configurar atributos del enlace
        a.href = item.href;
        a.textContent = item.text;

        // Configurar atributos del SVG
        svg.setAttribute('width', '16');
        svg.setAttribute('height', '16');
        svg.setAttribute('viewBox', '0 0 16 16');
        svg.innerHTML = `<path d="${item.icon}" />`;

        // Agregar elementos al DOM
        a.insertBefore(svg, a.firstChild);
        li.appendChild(a);
        ul.appendChild(li);
        menuList.appendChild(ul);
    });
    menuList.querySelector(`a[href="${pathname}"]`).classList.add('active');
}

const buildFooter = () => {
    const isRaffle = window.location.pathname;
    const footer = document.querySelector('footer');
    const images = isRaffle === RAFFLE_PATH ? 'Logos Crecer - blancos-01.png' : 'Logos Crecer 2 - Gris-01.png';
    console.log('footer')
    footer.innerHTML = `
        <div class="container">
            <div class="divider"></div>
            <div class="content">
                <span class="right-reserved">
                    ©2023. Todos los derechos reservados.
                </span>
                <img src="images/Logos/${images}" alt="logo" />
            </div>
        </div>
   
    `
}


const capitalize = (string) => {
    return string.toLowerCase().split(' ').map(name => {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }).join(' ');
}

const currencyFormat = (value) => {
    if (value === '') {
        value = '0';
    }
    const options = {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
        useGrouping: true,
    };
    return new Intl.NumberFormat('es-DO', { style: 'currency', currency: 'DOP', ...options }).format(
        parseInt(value)
    );
}