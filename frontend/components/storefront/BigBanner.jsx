import React from 'react';

export default ({bigBanners}) => {
  if (!bigBanners.length) {
    return (
      <div className="loading-page">
        <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
      </div>
    );
  }
  const random = Math.floor(Math.random() * bigBanners.length);
  const banner = bigBanners[random];
  return (
    <div className="big-banner">
      <img src={banner.image_url} />
    </div>
  );
}
