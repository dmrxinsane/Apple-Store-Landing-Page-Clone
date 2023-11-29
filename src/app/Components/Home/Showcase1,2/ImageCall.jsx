import React, { useEffect, useState } from 'react'
import Showcase from './Showcase'


const ImageCall = (img_link) => {
    // console.log(img_link.img_link)
  return (
    <img src={img_link.img_link} alt="" />
  )
}

export default ImageCall