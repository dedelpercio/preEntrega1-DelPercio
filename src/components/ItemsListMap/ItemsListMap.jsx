import './ItemsListMap.css';
import ItemsListCard from '../ItemsListCard/ItemsListCard.jsx';
import { memo } from 'react';

const ItemsListMap = memo(({items}) => {
    // Categories element
    const itemsList = []
  
    /* Mapping through the items array and pushing each item into the itemsList array. */
    items.map((item) => {
      itemsList.push(
        <ItemsListCard item={item} key={item.id}/>
      );
    })
  
    return (itemsList)
  }
)

export default ItemsListMap;