const context = {
    camisetas: [
        {
            link: 'producto1.html',
            title: 'On Fire',
            image: 'Producto 1 Percha.jpg',
            description: 'Camiseta blanca fuego',
            price: '39.99 €'
        },
        {
            link: 'producto2.html',
            title: 'Black Hole',
            image: 'Producto 2 Percha.jpg',
            description: 'Camiseta negra agujero negro',
            price: '45 €'
        },
        {
            link: '#linkAcamiseta',
            title: 'Glitch',
            image: 'Producto 3  Percha.jpg',
            description: 'Camiseta blanca. Desfase',
            price: '39.99 €'
        },
        {
            link: '#linkAcamiseta',
            title: 'Crazy Head',
            image: 'Producto 4 Percha.jpg',
            description: 'Camiseta blanca. Locura',
            price: '39.99 €'
        },
        {
            link: '#linkAcamiset',
            title: 'Unstructured',
            image: 'pRODUCTO 5 PERCHA.jpg',
            description: 'Camiseta blanca. Desestructurado',
            price: '39.99 €'
        },
        {
            link: '#linkAcamiseta',
            title: 'Encaged',
            image: 'Pércha Rejilla.jpg',
            description: 'Camiseta azul. Balla de alambre.',
            price: '45 €',
            sale: '22.50 €',
            moreInfo: 'Más información en nuestras ', 
            promoLink: 'promos.html'
        },
        {
            link: '#linkAcamiseta',
            title: 'Riddle',
            image: 'Pércha Zapatos.jpg',
            description: 'Camiseta granate. Truco en skate.',
            price: '45 €',
            sale: '22.50 €',
            moreInfo: 'Más información en nuestras ', 
            promoLink: 'promos.html'
        },
        {
            link: '#linkAcamiseta',
            title: 'Ghost City',
            image: 'Pércha CALLE.jpg',
            description: 'Camiseta negra. Escaleras para grindar.',
            price: '45 €',
            sale: '22.50 €',
            moreInfo: 'Más información en nuestras ', 
            promoLink: 'promos.html'
        },
        
    ]
};

const templateElement = document.getElementById('templateHB');

const templateSource = templateElement.innerHTML;

const template = Handlebars.compile(templateSource);

const compiledHtml = template(context);

document.getElementById('information').innerHTML = compiledHtml;