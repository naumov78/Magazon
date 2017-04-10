import React from 'react';

const BigBanner = (props) => {
  if (props.bigBanners.length === 0) {
    return (
      <div className="loading-page">
        <div>
          <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
        </div>
      </div>
    );
  }
  const bigBanners = props.bigBanners
  const i = bigBanners.length
  const random = Math.floor(Math.random() * i)
  const banner = bigBanners[random]
  return (
    <div className="big-banner">
      <img src={banner.image_url} />
    </div>
  )
}

export default BigBanner;
