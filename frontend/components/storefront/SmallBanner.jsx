import React from 'react';

export default ({smallBanners}) => {
  if (!smallBanners.length) {
    return null;
  }
  const random = Math.floor(Math.random() * smallBanners.length);
  const banner = smallBanners[random];
  return (
    <div className="small-banner">
      <img src={banner.image_url} />
    </div>
  );
}
