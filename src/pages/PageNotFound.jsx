import React from 'react'
import NavbarUser from '../components/user/NavbarUser'
import image1 from '../assets/image1.svg'
import { Link } from 'react-router-dom'
import { FooterUser } from '../components/user/FooterUser'

const PageNotFound = () => {
  return (
    <>
        <NavbarUser/>
        <div className="container mx-auto">
            <div className='flex flex-col justify-center items-center'>
                <img src={image1} alt="imgError" className='sm:w-1/2 w-3/4 mt-8 mb-4'/>
                <p className='text-green-400 sm:text-[50px] text-xl font-bold'>Oops... Page Not Found</p>
                <button className='mb-24 mt-10 bg-green-400 px-10 py-4 rounded-2xl text-white font-bold'>
                    <Link to={'/'}>Back To Home</Link>
                </button>
            </div>
        </div>
        <FooterUser/>
    </>
  )
}

export default PageNotFound