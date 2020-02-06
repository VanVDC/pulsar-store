import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectShopCollections } from "../../redux/shop/shop.selector";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

const ShopPage = ({ collections }) => (
  <div className="shop-page">
    {collections.map(({ id, title, items }) => (
      <CollectionPreview key={id} title={title} items={items} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections
});

export default connect(mapStateToProps)(ShopPage);
