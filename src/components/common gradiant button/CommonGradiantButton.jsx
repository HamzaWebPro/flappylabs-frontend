import React from 'react'
import { Link } from 'react-router-dom'

const CommonGradiantButton = ({title,onClick,href,icon}) => {
  return (
    <>
    <Link to={href} className='py-[8px] md:py-[8px]  px-[20px] md:px-[20px] bg-gradiant hover:bg-gradiantReverse text-[16px] md:text-[20px] text-white capitalize font-raleway flex items-center gap-x-[5px] shadow-sm shadow-white'>{icon}{title}</Link>
    </>
  )
}

export default CommonGradiantButton