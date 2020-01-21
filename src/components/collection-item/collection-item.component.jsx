import React from "react";

import "./collection-item.styles.scss";

const CollectionItem = ({ name, imageUrl, price }) => (
  <div className="collection-item">
    <img src={imageUrl} alt="" className="images" />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="prices">{price}</span>
    </div>
  </div>
);

export default CollectionItem;
