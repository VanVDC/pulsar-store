import React, { Component } from "react";

import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

class ShopPage extends Component {
  constructor() {
    super();

    this.state = {
      collections: SHOP_DATA
    };
  }
  render() {
    return (
      <div>
        {this.state.collections.map(({ id, title, items }) => (
          <CollectionPreview key={id} title={title} items={items} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
