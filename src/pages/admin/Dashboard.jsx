import React, { useContext } from "react";
import FooterAdmin from "../../components/admin/FooterAdmin";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { GlobalContext } from "../../context/GlobalContext";
import SideBarAdmin, { NavbarAdmin } from "../../components/admin/NavbarAdmin";

const Dashboard = () => {
    const { state } = useContext(GlobalContext);

    const {
        data,
        loading,
        searchTitle,
        searchLocation,
        setSearchTitle,
        searchType,
    } = state;

    const formatToRupiah = (number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
        }).format(number);
    };

    return (
        <>
            <NavbarAdmin />
            <div className="flex min-h-screen bg-gray-100">
                <SideBarAdmin />
                <div className="flex flex-col flex-grow container mx-auto">
                    <h1 className="text-3xl font-bold p-4 text-black">Welcome to the Admin Dashboard</h1>

                    <div className="relative pull-right pl-4 pr-4 md:pr-0 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 my-10">
                            <input
                            id="searchInput"
                            name="searchInputt"
                                type="search"
                                onChange={(e) => setSearchTitle(e.target.value)}
                                placeholder="Cari Pekerjaan"
                                className="border border-gray-300 rounded-lg py-3 px-2 pl-10 focus:outline-none focus:border-blue-500"
                            />
                            <div
                                className="absolute search-icon"
                                style={{ top: "0.85rem", left: "1.75rem" }}
                            >
                                <svg
                                    className="fill-current pointer-events-none text-gray-400 w-5 h-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                                </svg>
                            </div>
                        </div>

                    <div className="grid grid-cols-1 gap-4 sm:gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 rounded px-4">
                        {loading ? (
                            <div className="hidden">Loading</div>
                        ) : (
                            data
                                .filter((response) => {
                                    if (searchTitle && searchLocation && searchType === "") {
                                        return response;
                                    } else if (
                                        response.title
                                            .toLowerCase()
                                            .includes(searchTitle.toLowerCase()) &&
                                        response.company_city
                                            .toLowerCase()
                                            .includes(searchLocation.toLowerCase()) &&
                                        response.job_type
                                            .toLowerCase()
                                            .includes(searchType.toLowerCase())
                                    ) {
                                        return response;
                                    }
                                })
                                .map((response) => {
                                    return (
                                        <div key={response.id}>
                                            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg ">
                                                <div className="p-5 flex items-center justify-between">
                                                    <img
                                                        className="rounded-full w-16 "
                                                        src={response.company_image_url}
                                                        alt="ImgJobs"
                                                    />
                                                    <p className="bg-green-200 py-1 px-3 rounded-full text-gray-500 text-xs">
                                                        {response.job_type}
                                                    </p>
                                                </div>
                                                <div className="px-5 pb-4">
                                                    <Link
                                                        href="#"
                                                        className=" text-lg font-medium tracking-tight text-gray-700 underline"
                                                    >
                                                        <p className="hover:text-primary">
                                                            {response.title}
                                                        </p>
                                                    </Link>
                                                    <p className="py-1 text-gray-400">
                                                        {" "}
                                                        {response.company_name}{" "}
                                                    </p>
                                                    <p className="font-normal text-gray-700 flex items-center">
                                                        <CiLocationOn className="mr-1 text-black text-lg" />{" "}
                                                        {response.company_city}
                                                    </p>
                                                    <p className="py-1 font-medium text-red-400 text-sm">
                                                        {formatToRupiah(response.salary_min)} -{" "}
                                                        {formatToRupiah(response.salary_max)}
                                                    </p>

                                                    <div className="flex justify-between mt-2">
                                                        <button className="inline-flex items-center text-blue-600 border border-primary px-4 py-1 text-sm rounded-2xl">
                                                            Detail
                                                        </button>

                                                        <Link
                                                            href="#"
                                                            className="inline-flex items-center text-blue-600 hover:underline"
                                                        >
                                                            Apply
                                                            <svg
                                                                className="w-3 h-3 ml-2.5"
                                                                aria-hidden="true"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 18 18"
                                                            >
                                                                <path
                                                                    stroke="currentColor"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth={2}
                                                                    d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                                                                />
                                                            </svg>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                        )}
                    </div>
                </div>
            </div>

            {/* <div className="p-4 sm:ml-64">
                <div className="p-4 rounded-lg ">
                    <div className="grid gap-4 mb-4">
                        <section className="relative pull-right pl-4 pr-4 md:pr-0 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 my-10 px-4">
                            <input
                                type="search"
                                onChange={(e) => setSearchTitle(e.target.value)}
                                placeholder="Cari Pekerjaan"
                                className="w-full bg-gray-100 text-sm text-gray-800 transition border focus:outline-none focus:border-gray-700 rounded py-1 px-2 pl-10 appearance-none leading-normal"
                            />
                            <div
                                className="absolute search-icon"
                                style={{ top: "0.375rem", left: "1.75rem" }}
                            >
                                <svg
                                    className="fill-current pointer-events-none text-gray-800 w-4 h-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                                </svg>
                            </div>
                        </section>
                        <div className="grid grid-cols-1 gap-4 sm:gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 h-24 rounded">
                            {loading ? (
                                <div className="hidden">Loading</div>
                            ) : (
                                data
                                    .filter((response) => {
                                        if (searchTitle && searchLocation && searchType === "") {
                                            return response;
                                        } else if (
                                            response.title
                                                .toLowerCase()
                                                .includes(searchTitle.toLowerCase()) &&
                                            response.company_city
                                                .toLowerCase()
                                                .includes(searchLocation.toLowerCase()) &&
                                            response.job_type
                                                .toLowerCase()
                                                .includes(searchType.toLowerCase())
                                        ) {
                                            return response;
                                        }
                                    })
                                    .map((response) => {
                                        return (
                                            <div key={response.id}>
                                                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg ">
                                                    <div className="p-5 flex items-center justify-between">
                                                        <img
                                                            className="rounded-full w-16 "
                                                            src={response.company_image_url}
                                                            alt="ImgJobs"
                                                        />
                                                        <p className="bg-green-200 py-1 px-3 rounded-full text-gray-500 text-xs">
                                                            {response.job_type}
                                                        </p>
                                                    </div>
                                                    <div className="px-5 pb-4">
                                                        <Link
                                                            href="#"
                                                            className=" text-lg font-medium tracking-tight text-gray-700 underline"
                                                        >
                                                            <p className="hover:text-primary">
                                                                {response.title}
                                                            </p>
                                                        </Link>
                                                        <p className="py-1 text-gray-400">
                                                            {" "}
                                                            {response.company_name}{" "}
                                                        </p>
                                                        <p className="font-normal text-gray-700 flex items-center">
                                                            <CiLocationOn className="mr-1 text-black text-lg" />{" "}
                                                            {response.company_city}
                                                        </p>
                                                        <p className="py-1 font-medium text-red-400 text-sm">
                                                            {formatToRupiah(response.salary_min)} -{" "}
                                                            {formatToRupiah(response.salary_max)}
                                                        </p>

                                                        <div className="flex justify-between mt-2">
                                                            <button className="inline-flex items-center text-blue-600 border border-primary px-4 py-1 text-sm rounded-2xl">
                                                                Detail
                                                            </button>

                                                            <Link
                                                                href="#"
                                                                className="inline-flex items-center text-blue-600 hover:underline"
                                                            >
                                                                Apply
                                                                <svg
                                                                    className="w-3 h-3 ml-2.5"
                                                                    aria-hidden="true"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="none"
                                                                    viewBox="0 0 18 18"
                                                                >
                                                                    <path
                                                                        stroke="currentColor"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={2}
                                                                        d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                                                                    />
                                                                </svg>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })
                            )}
                        </div>
                    </div>
                </div>
            </div> */}

            <FooterAdmin />
        </>
    );
};

export default Dashboard;
