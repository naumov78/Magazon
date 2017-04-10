import React from 'react';

const SmallBanner = (props) => {
  debugger
  if (props.smallBanners.length === 0) {
    return null;
  }
  const smallBanners = props.smallBanners
  const i = smallBanners.length
  const random = Math.floor(Math.random() * i)
  const banner = smallBanners[random]
  debugger
  return (
    <div>
      <img src={banner.image_url} />
    </div>
  )
}

export default SmallBanner;
