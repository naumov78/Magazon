import React from 'react';

const BigBanner = (props) => {
  debugger
  if (props.bigBanners.length === 0) {
    return null;
  }
  const bigBanners = props.bigBanners
  const i = bigBanners.length
  const random = Math.floor(Math.random() * i)
  const banner = bigBanners[random]
  debugger
  return (
    <div className="big-banner">
      <img src={banner.image_url} />
    </div>
  )
}

export default BigBanner;
