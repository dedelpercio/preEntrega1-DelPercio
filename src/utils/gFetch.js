let products = [
  {
    id: 0,
    name: 'Bowl Estambul',
    category: 'Arte',
    description: 'Compra todos los artículos que necesitas para tus creaciones de bellas artes.',
    link: '#',
    image: 'https://www.decasorio.com.ar/sites/default/files/styles/muestra2/public/bowl_estambul.jpg',
  },
  {
    id: 1,
    name: 'Bandeja Desayuno',
    category: 'Bazar',
    description: 'Utilidades de cocina: elementos de cocina, utensilios, coladores, servilleteros…',
    link: '#',
    image: 'https://www.decasorio.com.ar/sites/default/files/styles/muestra2/public/bc1cc0e9-50a0-4488-9914-b6c1a31eaaea.jpg',
  },
  {
    id: 2,
    name: 'Lampara de Mesa',
    category: 'Deco',
    description: 'Dale vida a los espacios y crea ambientes utilizando recursos estéticos.',
    link: '#',
    image: 'https://www.decasorio.com.ar/sites/default/files/styles/muestra2/public/lampara_de_mesa.jpg',
  },
  {
    id: 3,
    name: 'Mesa Banco Cosmos',
    category: 'Muebles',
    description: 'Variedad de maderas, laminados y otros materiales para equipar tu casa.',
    link: '#',
    image: 'https://www.decasorio.com.ar/sites/default/files/styles/muestra2/public/mesa_banco_cosmos_1.jpg',
  }
];

export const gFetch = (id) => new Promise((response, rejected) => {
  let condition = true;
  if(condition) {
    setTimeout(() => {
      if(id) {
        response(products.find((item) => item.id === id))
      } else {
        response(products)
      }
    }, 3000)
  } else {
    rejected('Error');
  }
});
