import React from 'react';

const SmallBanner = (props) => {
  if (props.smallBanners.length === 0) {
    return null;
  }
  const smallBanners = props.smallBanners
  const i = smallBanners.length
  const random = Math.floor(Math.random() * i)
  const banner = smallBanners[random]
  return (
    <div className="small-banner">
      <img src={banner.image_url} />
    </div>
  )
}

export default SmallBanner;
