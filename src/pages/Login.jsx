import React, { useContext } from "react";
import { Checkbox, Label, TextInput } from "flowbite-react";
import Illustration from "./../assets/Illustration.svg";
import { Link } from "react-router-dom";
import { FooterUser2 } from "../components/user/FooterUser";
import { GlobalContext } from "../context/GlobalContext";

const Login = () => {

    // IMPORT STATE FROM GLOBALCONTEXT
    const { handleState, state } = useContext(GlobalContext)

    // DESPEKTURING FROM GLOBALCONTEXT
    const { handleLogin, handleInputLogin } = handleState
    const { inputLogin } = state

    return (
        <>
            <div className="container mx-auto px-4 sm:px-6 mb-28">
                <div className="mt-10 sm:mt-28 grid grid-cols-1 sm:grid-cols-12">
                    <div className="sm:col-span-6 lg:col-span-5 sm:mr-6 justify-center flex">
                        <img src={Illustration} alt="imgLogin" className="w-3/4 sm:min-w-full md:max-w-full" />
                    </div>
                    <div className="sm:col-span-6 lg:col-span-7">
                        <div className="text-[28px] sm:text-4xl font-normal text-center mt-6 sm:mt-0">
                            <h1>Selamat Datang Di</h1>
                            <div className="text-primary font-bold sm:text-[50px] text-[28px]sm:py-4">
                                Gawe.Co
                            </div>
                        </div>
                        <form className="flex flex-col gap-4 mt-10" onSubmit={handleLogin}>
                            <span className="sm:text-3xl text-xl text-primary opacity-50 font-medium">MASUK AKUN</span>

                            <div >
                                <div className="mb-2 block text-lg font-medium">
                                    <p>Email</p>
                                </div>
                                <TextInput
                                    autoComplete="off"
                                    onChange={handleInputLogin}
                                    name="email"
                                    id="email"
                                    placeholder="Masukkan Email Anda"
                                    required
                                    type="email"
                                    value={inputLogin.email}
                                />
                            </div>
                            <div>
                                <div className="mb-2 block text-lg font-medium">
                                    <p>Password</p>
                                </div>
                                <TextInput
                                    name="password"
                                    onChange={handleInputLogin}
                                    value={inputLogin.password}
                                    id="password1" required type="password" placeholder="Masukkan Password Anda" />
                            </div>
                            <div className="flex justify-between">
                                <div className="flex items-center gap-2">
                                    <Checkbox id="remember" />
                                    <Label htmlFor="remember">Remember me</Label>
                                </div>
                                <Link to='/dashboard/change-password' className="text-primary font-medium text-sm">Lupa Password</Link>
                            </div>
                            <button type="submit" className='bg-primary py-2 rounded-lg text-white font-medium'>Masuk</button>
                            <div className="flex justify-between">
                                <p className="w-1/2 sm:w-auto">Belum punya akun? Daftar 
                                <Link to={"/dashboard/register"} className="text-primary font-semibold"> disini</Link> </p>
                                <Link to={'/'} className="hover:text-primary hover:underline">Kembali</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="w-1/2 mx-auto ">
            </div>
            <FooterUser2 />
        </>
    );
};

export default Login;
