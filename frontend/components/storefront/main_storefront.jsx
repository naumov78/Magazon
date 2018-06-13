import React from 'react';
import { withRouter } from 'react-router';
import StorefrontContainer from './storefront/storefront_container';
import WatchedProductsContainer from './watched_products/watched_products_container';
import SmallBanner from './small_banner';
import BigBanner from './big_banner';

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
      )
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
