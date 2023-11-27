import React, { useContext, useState } from "react";
import { TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import Illustration from "./../assets/Illustration.svg";
import { FooterUser2 } from "../components/user/FooterUser";
import { GlobalContext } from "../context/GlobalContext";

    const ChangePassword = () => {
        const [oldPassword, setOldPassword] = useState("");
        const [newPassword, setNewPassword] = useState("");
        const [confirmNewPassword, setConfirmNewPassword] = useState("");

        const {handleState} = useContext(GlobalContext)
        const {getAuthTokenFromCookie} = handleState

        const handleFormSubmit = async (event) => {
            event.preventDefault();

            if (newPassword !== confirmNewPassword) {
                console.error("New passwords do not match.");
                return;
            }

            try {
                const authToken = getAuthTokenFromCookie(); // Implement getAuthTokenFromCookie
                if (!authToken) {
                    console.error("No authentication token found.");
                    return;
                }

                const response = await fetch("your-api-url/change-password", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + authToken,
                    },
                    body: JSON.stringify({
                        oldPassword: oldPassword,
                        newPassword: newPassword,
                    }),
                });

                if (response.ok) {
                    console.log("Password changed successfully!");
                } else {
                    console.error("Password change failed!");
                }
            } catch (error) {
                console.error("Error during password change:", error);
            }
        }

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
                            <form className="flex flex-col gap-4 mt-10" onSubmit={handleFormSubmit}>
                                <span className="sm:text-3xl text-xl text-primary opacity-50 font-medium">
                                    BUAT SANDI BARU
                                </span>

                                <div>
                                    <div className="mb-2 block text-lg font-medium">
                                        <p>Password Lama</p>
                                    </div>
                                    <TextInput
                                        id="password"
                                        name="current_password"
                                        required
                                        type="password"
                                        placeholder="Masukkan Password Lama Anda"
                                        value={oldPassword}
                                        onChange={(e) => setOldPassword(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <div className="mb-2 block text-lg font-medium">
                                        <p>Password Baru</p>
                                    </div>
                                    <TextInput
                                        id="password1"
                                        name="new_password"
                                        required
                                        type="password"
                                        placeholder="Masukkan Password Baru Anda"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <div className="mb-2 block text-lg font-medium">
                                        <p>Konfirmasi Password</p>
                                    </div>
                                    <TextInput
                                        name="new_confirm_password"
                                        id="password2"
                                        required
                                        type="password"
                                        placeholder="Konfirmasi Password"
                                        value={confirmNewPassword}
                                        onChange={(e) => setConfirmNewPassword(e.target.value)}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className='bg-primary py-2 rounded-lg text-white font-medium'
                                >
                                    Submit
                                </button>
                                <div className="flex justify-between">
                                    <p>
                                        Sudah punya akun? Masuk{" "}
                                        <Link to={"/dashboard/login"} className="text-primary font-semibold">
                                            disini
                                        </Link>{" "}
                                    </p>
                                    <Link to={"/dashboard/login"} className="hover:text-primary hover:underline">
                                        Kembali
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 mx-auto "></div>
                <FooterUser2 />
            </>
        );
    };

export default ChangePassword;
