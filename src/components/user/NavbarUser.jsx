import { Avatar, Navbar } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const NavbarUser = () => {

    const [show, setShow] = useState(false);
    const toggleShow = () => {
        setShow(!show);
    };

    const navigate = useNavigate()

// const user = JSON.parse(Cookies.get('user'));
//     console.log(user);  
    
    return (
        <Navbar rounded className="sticky top-0 z-10 ">
            <Navbar.Brand href="/">
                <img
                    alt=" Logo"
                    className="mr-3 w-9 h-10 sm:h-10 sm:w-9"
                    src="https://img.freepik.com/free-vector/logo-design-with-repairman-tools_1308-11671.jpg?w=740&t=st=1690248029~exp=1690248629~hmac=ffe0280be1c010cfd3833d2a7a099ebbccdd41025cad55de46384cda3681f289"
                    />
                <span className="hidden sm:block self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Gawe.Co
                </span>
            </Navbar.Brand>

            <div className="flex sm:order-2"> 
                {Cookies.get('token') ? (
                    <div>
                        <Avatar onClick={toggleShow}
                            img="/images/people/profile-picture-5.jpg"
                            rounded
                        >
                            <div className="hidden md:block space-y-1 font-medium dark:text-white">
                                <div>
                                Hi, ....
                                </div>
                                <div>
                                user@gmail.com
                                </div>
                            </div>
                        </Avatar>
                        {show && (
                            <>
                            <div className="absolute right-0 sm:w-auto sm:pl-24 sm:right-24 md:right-4 xl:right-44 top-14  font-medium text-right bg-white rounded-md">
                                
                                <div className="text-sm py-3 text-black hover:bg-gray-100 mt-3">
                                    <p className="mr-4"><Link to={'/dashboard'}>Dashboard</Link></p>
                                </div>
                                <div className="text-sm py-3 text-black hover:bg-gray-100 ">
                                    <p className="mr-4"><Link to={'/dashboard/profile'}>Profile</Link></p>
                                </div>
                                <div className="text-sm py-3 text-black hover:bg-gray-100 "
                                    onClick={() => {
                                        Cookies.remove('token')
                                        navigate('/dashboard/login')
                                    }}
                                    >
                                    <p className="mr-4">LogOut</p>
                                </div>
                            </div>
                            </>
                        )}
                    </div>
                ) : (
                    <button className="border border-primary px-7 py-1.5 rounded-3xl text-white bg-primary mr-4">
                        <Link to={'/dashboard/login'}>Login</Link>
                    </button>
                )}
                
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Link to="/" className="text-lg hover:text-primary hover:underline my-2">
                    <span className="hover:text-primary">Beranda</span>
                </Link>
                <a href="#findJobs" className=" hover:text-primary hover:underline my-2">
                    <span className="text-lg hover:text-primary">Cari Lowongan</span>
                </a>
                <a href="#whatThere" className=" hover:text-primary hover:underline my-2">
                    <span className="text-lg hover:text-primary">Lebih Banyak</span>
                </a>
                <a href="#contact" className=" hover:text-primary hover:underline my-2">
                    <span className="text-lg hover:text-primary">Ikuti Kami</span>
                </a>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavbarUser;
