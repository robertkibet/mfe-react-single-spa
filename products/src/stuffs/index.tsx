// @ts-nocheck
import React from 'react';


const items = [1, 2, 3, 4];
const Products = () => {
  return items.map(item => <p>Item {item}</p>)
}
const Items = () => {
  return <div>
    Items app
    <div>
      <Products />
    </div>
  </div>
}
export default Items;