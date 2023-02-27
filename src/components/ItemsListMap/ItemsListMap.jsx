import './ItemsListMap.css';
import ItemsListCard from '../ItemsListCard/ItemsListCard.jsx';
import { memo } from 'react';

const ItemsListMap = memo(({items}) => {
    // Categories element
    const itemsList = []
  
    // Add UI for category items into categories element
    items.map((item) => {
      itemsList.push(
        <ItemsListCard item={item} key={item.id}/>
      );
    })
  
    return (itemsList)
  }
)

export default ItemsListMap;