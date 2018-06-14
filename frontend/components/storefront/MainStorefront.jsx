import React from 'react';
import { withRouter } from 'react-router';
import StorefrontContainer from './storefront/Storefront.container';
import WatchedProductsContainer from './watched_products/WatchedProducts.container';
import SmallBanner from './SmallBanner';
import BigBanner from './BigBanner';

class MainStorefront extends React.Component {


  getComponent() {
    if (this.props.currentUser) {
      return <WatchedProductsContainer indexPage={ this.props.indexPage } />
    } else {
      return <StorefrontContainer indexPage={ this.props.indexPage } />
    }
  }

  getContent() {
    if (this.props.indexPage) {
      return (
        <div>
          <BigBanner bigBanners={ this.props.bigBanners } />
          <div className="upper-row">
            <StorefrontContainer indexPage={ this.props.indexPage } />
            <SmallBanner smallBanners={ this.props.smallBanners } />
          </div>

          <div className="lower-row">
            <SmallBanner smallBanners={ this.props.smallBanners } />
            {this.getComponent()}
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <div>
        {this.getContent()}
      </div>
    );
  }

}

export default MainStorefront;
