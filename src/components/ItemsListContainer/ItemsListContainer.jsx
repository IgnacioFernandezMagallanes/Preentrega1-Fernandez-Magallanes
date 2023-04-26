import React from 'react';

const ItemListContainer = ({greeting}) => {
  return (
    <div>
      <h2 className="bg-info">{greeting}</h2>
    </div>
  );
};

export default ItemListContainer;