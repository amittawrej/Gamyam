import React from 'react'
import { MdVerified } from "react-icons/md";

const Description = ({title,
    mandal_name,
    district_name,
    area,
    price,
    }) => {
  return (
    <div><h4>
    {title},<span>{mandal_name}</span>
    <MdVerified />
  </h4>
  <h4>{district_name} </h4>
  <p>
    {area.acres + " acres "},{area.guntas + " guntas, "}
    <span>
      {price.crore + ","} {price.lakh + " acres per crores"}
    </span>
  </p></div>
  )
}

export default Description