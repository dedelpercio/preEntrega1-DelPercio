let products = [
  {
    id: '0',
    name: 'Bowl Estambul',
    category: 'arte',
    description: 'Compra todos los artículos que necesitas para tus creaciones de bellas artes.',
    price: 800,
    image: 'https://www.decasorio.com.ar/sites/default/files/styles/muestra2/public/bowl_estambul.jpg',
    stock: 5,
  },
  {
    id: '1',
    name: 'Bowl Estambul',
    category: 'arte',
    description: 'Compra todos los artículos que necesitas para tus creaciones de bellas artes.',
    price: 800,
    image: 'https://www.decasorio.com.ar/sites/default/files/styles/muestra2/public/bowl_estambul.jpg',
    stock: 5,
  },
  {
    id: '2',
    name: 'Bandeja Desayuno',
    category: 'bazar',
    description: 'Utilidades de cocina: elementos de cocina, utensilios, coladores, servilleteros…',
    price: 3199,
    image: 'https://www.decasorio.com.ar/sites/default/files/styles/muestra2/public/bc1cc0e9-50a0-4488-9914-b6c1a31eaaea.jpg',
    stock: 10,
  },
  {
    id: '3',
    name: 'Bandeja Desayuno',
    category: 'bazar',
    description: 'Utilidades de cocina: elementos de cocina, utensilios, coladores, servilleteros…',
    price: 3199,
    image: 'https://www.decasorio.com.ar/sites/default/files/styles/muestra2/public/bc1cc0e9-50a0-4488-9914-b6c1a31eaaea.jpg',
    stock: 10,
  },
  {
    id: '4',
    name: 'Lampara de Mesa',
    category: 'deco',
    description: 'Dale vida a los espacios y crea ambientes utilizando recursos estéticos.',
    price: 2300,
    image: 'https://www.decasorio.com.ar/sites/default/files/styles/muestra2/public/lampara_de_mesa.jpg',
    stock: 2,
  },
  {
    id: '5',
    name: 'Lampara de Mesa',
    category: 'deco',
    description: 'Dale vida a los espacios y crea ambientes utilizando recursos estéticos.',
    price: 2300,
    image: 'https://www.decasorio.com.ar/sites/default/files/styles/muestra2/public/lampara_de_mesa.jpg',
    stock: 2,
  },
  {
    id: '6',
    name: 'Mesa Banco Cosmos',
    category: 'muebles',
    description: 'Variedad de maderas, laminados y otros materiales para equipar tu casa.',
    price: 1900,
    image: 'https://www.decasorio.com.ar/sites/default/files/styles/muestra2/public/mesa_banco_cosmos_1.jpg',
    stock: 1,
  },
  {
    id: '7',
    name: 'Mesa Banco Cosmos',
    category: 'muebles',
    description: 'Variedad de maderas, laminados y otros materiales para equipar tu casa.',
    price: 1900,
    image: 'https://www.decasorio.com.ar/sites/default/files/styles/muestra2/public/mesa_banco_cosmos_1.jpg',
    stock: 1,
  }
];

/**
 * 
 * @param {string} id 
 * @param {string} type 
 * @returns Promise
 */
export const gFetch = (id, type) => new Promise((response, rejected) => {
  if(products) {
    setTimeout(() => {
      if(id && type === 'item') {
        response(products.find((item) => item.id === id))
      } else if(id && type === 'category') {
        response(products.filter((item) => item.category === id))
      } else {
        response(products)
      }
    }, 2000)
  } else {
    rejected('Error');
  }
});
