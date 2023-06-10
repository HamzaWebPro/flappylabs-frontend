import React from 'react'
import { Link } from 'react-router-dom'
import CommonGradiantButton from '../common gradiant button/CommonGradiantButton'
import {CiWallet} from "react-icons/ci"

const Navbar = () => {
  return (
    <>
    <div className='bg-transparentBlack fixed w-full z-[9999999999]'>

     <div className="max-w-container px-[10px] mx-auto py-5 flex justify-between items-center ">
         <img src="https://testing.thernloven.com/examples/wp-content/uploads/2023/04/Captura-de-pantalla-2023-03-03-a-las-18.53.19-1024x214.png" className='w-[45%] md:w-[25%] h-aut
         ' alt="" />
         <CommonGradiantButton title="Select Wallet" icon={<CiWallet className='!text-[25px]'/>}/>
     </div>
    </div>
    </>
  )
}

export default Navbar