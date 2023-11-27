import React, { useContext } from "react";
import { Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import Illustration from "./../assets/Illustration.svg";
import { FooterUser2 } from "../components/user/FooterUser";
import { GlobalContext } from "../context/GlobalContext";

const Register = () => {

    const { state, handleState } = useContext(GlobalContext)

    const {
        inputRegister
    } = state

    const {
        handleRegister,
        handleInputRegister,
    } = handleState

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
                        <form className="flex flex-col gap-4 mt-10" onSubmit={handleRegister}>
                            <span className="sm:text-3xl text-xl text-primary opacity-50 font-medium">DAFTAR AKUN</span>
                            <div>
                                <div className="mb-2 block text-lg font-medium">
                                    <p>Nama</p>
                                </div>
                                <TextInput
                                    value={inputRegister.name}
                                    onChange={handleInputRegister}
                                    name="name"
                                    id="name"
                                    placeholder="Masukkan Nama Lengkap"
                                    required
                                    type="text"
                                    autoComplete="off"
                                />
                            </div>
                            <div>
                                <div className="mb-2 block text-lg font-medium">
                                    <p>Image URL</p>
                                </div>
                                <TextInput
                                    value={inputRegister.image_url}
                                    onChange={handleInputRegister} name="image_url"
                                    id="text" required type="text" placeholder="Masukkan Image Url Anda" />
                            </div>
                            <div>
                                <div className="mb-2 block text-lg font-medium">
                                    <p>Email</p>
                                </div>
                                <TextInput
                                    value={inputRegister.email}
                                    onChange={handleInputRegister} autoComplete="off"
                                    name="email" id="email" required type="email" placeholder="Masukkan Email Anda" />
                            </div>
                            <div>
                                <div className="mb-2 block text-lg font-medium">
                                    <p>Password</p>
                                </div>
                                <TextInput value={inputRegister.password} onChange={handleInputRegister} id="password" required type="password" name="password" placeholder="Masukkan Password Anda" />
                            </div>
                            <div className="flex items-center gap-2">
                                <Checkbox id="remember" />
                                <Label htmlFor="remember">I accept the <span className="text-primary">Terms and Conditions</span></Label>
                            </div>
                            <button type="submit" className='bg-primary py-2 rounded-lg text-white font-medium'>Submit</button>
                            <div className="flex justify-between">
                                <p className="w-1/2 sm:w-auto">
                                    Sudah punya akun? Masuk{" "}
                                    <Link to={"/dashboard/login"} className="text-primary font-semibold">
                                        disini
                                    </Link>{" "}
                                </p>
                                <Link to={"/"} className="hover:text-primary hover:underline">
                                    Kembali
                                </Link>
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

export default Register;
