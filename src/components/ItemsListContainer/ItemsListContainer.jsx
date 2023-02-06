import './ItemsListContainer.css';
import ItemListMap from '../ItemsListMap/ItemsListMap.jsx';

function ItemsListContainer({greeting}) {

  // Items list
  const itemsList = [
    {
      name: 'Arte',
      description: 'Compra todos los artículos que necesitas para tus creaciones de bellas artes.',
      link: '#',
      image: 'https://www.decasorio.com.ar/sites/default/files/styles/muestra2/public/bowl_estambul.jpg',
    },
    {
      name: 'Bazar',
      description: 'Utilidades de cocina: elementos de cocina, utensilios, coladores, servilleteros…',
      link: '#',
      image: 'https://www.decasorio.com.ar/sites/default/files/styles/muestra2/public/bc1cc0e9-50a0-4488-9914-b6c1a31eaaea.jpg',
    },
    {
      name: 'Deco',
      description: 'Dale vida a los espacios y crea ambientes utilizando recursos estéticos.',
      link: '#',
      image: 'https://www.decasorio.com.ar/sites/default/files/styles/muestra2/public/lampara_de_mesa.jpg',
    },
    {
      name: 'Muebles',
      description: 'Variedad de maderas, laminados y otros materiales para equipar tu casa.',
      link: '#',
      image: 'https://www.decasorio.com.ar/sites/default/files/styles/muestra2/public/mesa_banco_cosmos_1.jpg',
    }
  ];

  return (
    <div>
      <h2>{greeting}</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        <ItemListMap items={ itemsList }/>
      </div>
    </div>
  )
}

export default ItemsListContainer;