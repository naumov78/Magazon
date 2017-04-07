import React from 'react';
import { withRouter } from 'react-router';
import StorefrontContainer from './storefront/storefront_container';
import WatchedProductsContainer from './watched_products/watched_products_container';

const MainStorefront = (props) => {
  function getContent() {
    if (props.indexPage) {
      return (
        <div>
          <div>
            <StorefrontContainer />
          </div>
          <div>
            <WatchedProductsContainer />
          </div>
        </div>
      )
    } else {
      return null;
    }
  }

return getContent();

}

export default MainStorefront;
