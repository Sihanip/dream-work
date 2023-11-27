import React, { useContext } from "react";
import NavbarUser from "../components/user/NavbarUser";
import { FooterUser } from "../components/user/FooterUser";
import VectorHuman from "../assets/VectorHuman.svg";
import vector from "../assets/Vector.svg";
import vector5 from "../assets/Vector5.svg";
import vector1 from "../assets/Vector1.svg";
import vector2 from "../assets/Vector2.svg";
import vector4 from "../assets/Vector4.svg";
import vector7 from "../assets/Vector7.svg";
import vector3 from "../assets/Vector3.svg";
import vector6 from "../assets/Vector6.svg";
import iconUp from "../assets/icon-up.svg";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineApartment } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";
import { GlobalContext } from "../context/GlobalContext";
import { Dropdown } from "flowbite-react";

const Home = () => {
  const { state, handleState } = useContext(GlobalContext);

  const {
    data,
    loading,
    searchTitle,
    setSearchTitle,
    searchLocation,
    setSearchLocation,
    searchType,
    
  } = state;

  const { hanldeLoadMoreData, filterSalaries } = handleState

  // const { fetchData } = handleState

  // dummy data
  const cardData = [
    {
      id: 1,
      title: "Marketing & Communication",
      description: "91 Jobs Available.",
      imageUrl: vector, // Replace with actual image URL
    },
    {
      id: 2,
      title: "Design & Development",
      description: "20 Jobs Available.",
      imageUrl: vector5,
    },
    {
      id: 3,
      title: "FrontEnd Development",
      description: "280 Jobs Available.",
      imageUrl: vector6,
    },
    {
      id: 4,
      title: "Finance Management",
      description: "91 Jobs Available.",
      imageUrl: vector2,
    },
    {
      id: 5,
      title: "Government Jobs",
      description: "10 Jobs Available.",
      imageUrl: vector7,
    },
    {
      id: 6,
      title: "Business & Consulting",
      description: "80 Jobs Available.",
      imageUrl: vector4,
    },
    {
      id: 7,
      title: "Customer Support Care",
      description: "54 Jobs Available.",
      imageUrl: vector1,
    },
    {
      id: 8,
      title: "Project Management",
      description: "100 Jobs Available.",
      imageUrl: vector3,
    },
  ];

  // Rupiah
  const formatToRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  return (
    <>
      <NavbarUser />
      <header id="home">
        <div className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
          <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
              Dapatkan <span className="text-primary">Pekerjaan Impian</span>{" "}
              yang Anda Harapkan Sejak Lama</h1>
            <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nemo itaque placeat odio doloribus quas incidunt nisi repellat alias iure..</p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">

              <button disabled className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                Learn more
              </button>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4">
          <div className="text-center flex align-center justify-center">
            <p className="mt-12 sm:w-full sm:text-3xl text-xl font-normal text-black">
              100+ Lowongan & 110+ Orang Telah Terdaftar Di Gawe.Co
            </p>
          </div>
          <form className="mt-20 ">
            <p className="text-center mt-12 sm:w-full text-2xl font-normal text-primary mb-4">
              Telusuri Lowongan
            </p>
            <div className=" flex flex-col sm:justify-center sm:flex-row mx-auto">
              <div className="relative mx-2 sm:w-[20%]">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                    <MdOutlineApartment className="text-gray-700 text-xl" />
                  </div>
                </div>
                <input
                  onChange={(e) => setSearchTitle(e.target.value)}
                  type="text"
                  id="searchCompany"
                  className="bg-gray-50 w-full text-gray-900 text-sm  block pl-10 p-3"
                  placeholder="Semua Posisi"
                />
              </div>

              <div className="relative sm:mt-0 mt-2 mx-2 sm:w-[20%]">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                  <GrMapLocation className="text-gray-100 text-lg" />
                </div>
                <input
                  onChange={(e) => setSearchLocation(e.target.value)}
                  type="text"
                  id="searchLocation"
                  className="bg-gray-50 w-full text-gray-900 text-sm block pl-10 p-3"
                  placeholder="Semua Lokasi"
                />
              </div>

              <div className="relative sm:mt-0 mt-2 mx-2 bg-primary px-10 py-2 text-white">
                <Dropdown inline
                  label="Filter"
                >
                  <Dropdown.Item onClick={filterSalaries}>
                    Min Salary
                  </Dropdown.Item>
                  <Dropdown.Item onClick={filterSalaries}>
                    Max Salary
                  </Dropdown.Item>
                </Dropdown>
              </div>
            </div>
          </form>
        </div>
      </header>

      <main>
        <section className="mt-20 container mx-auto" id="findJobs">
          <h2 className="text-center font-medium text-4xl sm:text-5xl text-black">
            Lowongan kerja Paling Populer
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-20 px-4">
            {loading ? (
              <div className="hidden">Loading</div>
            ) : (
              data
                .filter((response) => {
                  if (searchTitle === "") {
                    return response;
                  } else if (
                    response.title
                      .toLowerCase()
                      .includes(searchTitle.toLowerCase()) 
                  ) {
                    return response;
                  }
                })
                .map((response, index) => {
                  return (
                    <div key={index}>
                      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
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
                            className=" text-lg font-medium tracking-tight text-gray-700 underline"
                          >
                            <span className="hover:text-primary">
                              {response.title} 
                            </span>
                          </Link>
                          <span className="text-lg tracking-tight text-gray-700 opacity-50 ps-2">
                            ({response.job_tenure})
                            </span>
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
                              <Link to={`/job-vacancy/${response.id}`} key={index}>Detail</Link>
                            </button>

                            <Link
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

          <div className="flex justify-center">
            <button
              onClick={hanldeLoadMoreData} disabled={loading}
              color="gray"
              type="submit"
              className="border border-primary rounded-full hover:bg-primary"
            >
              <p className="text-primary hover:text-white px-5 py-3 font-medium">
                {loading ? 'Loading....' : 'Lebih Banyak'}
              </p>
            </button>
          </div>
        </section>

        <section
          id="whatThere"
          className="bg-primary bg-opacity-10 mt-28 mx-auto"
        >
          <div className="flex text-center flex-col">
            <h2 className="pt-16 text-4xl sm:text-5xl font-medium">
              Satu Platfrom Memberikan Banyak
            </h2>
            <span className="text-4xl sm:text-5xl text-primary font-medium">
              Solusi
            </span>
          </div>
          <div className="container mx-auto md:px-5 py-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
            {cardData.map((card) => (
              <div
                key={card.id}
                className="mx-5 sm:mx-0 md:mx-o lg:mx-0 p-6 bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="flex">
                  <img
                    src={card.imageUrl}
                    alt={card.title}
                    className="w-10 mr-3"
                  />
                  <div className="">
                    <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
                    <p className="text-gray-600">{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 sm:bg-primary rounded-2xl container mx-auto">
          <div className="m-5 py-12 bg-primary rounded-2xl sm:bg-none sm:rounded-none">
            <div className="sm:columns-2 px-4 sm:px-0">
              <img src={VectorHuman} alt="vectorHuman" />
              <div className="pt-10 mb-8 md:w-auto lg:w-3/4">
                <h3 className="font-normal text-xl sm:text-3xl text-white">
                  Temukan Pekerjaan Paling Berharga, Cukup Cantumkan CV Anda di
                  Staffing Solutions
                </h3>
                <p className="pt-5 font-medium text-lg text-white text-justify">
                  Di baris subjek email, tulis nama Anda, deskripsi posisi yang
                  ingin Anda lamar
                </p>
              </div>
              <button
                disabled
                type="button"
                className="sm:w-auto w-full text-primary bg-white hover:bg-gray-100 rounded-full px-5 py-2.5 text-center inline-flex items-center "
              >
                <img src={iconUp} alt="icon-up" />
                <p className="ml-5 font-medium text-sm">Upload CV Anda</p>
              </button>
            </div>
          </div>
        </section>

        <section
          className="bg-primary bg-opacity-10 py-4 mt-24 mb-16 px-4 sm:px-0"
          id="contact"
        >
          <div className="shadow-lg rounded-3xl my-8 bg-white container mx-auto">
            <div className="grid grid-rows-1 sm:grid-cols-4 p-6 sm:p-12">
              <div className="sm:col-span-2">
                <span className="font-medium text-2xl sm:text-[50px]">
                  Tidak Ingin Ketinggalan{" "}
                  <span className="text-primary">Lowongan Terbaru</span>
                </span>
              </div>
              <div className="sm:col-span-2">
                <form className="mt-3 w-full">
                  <div className="relative">
                    <input
                      autoComplete="off"
                      type="email"
                      id="email"
                      className="block w-full p-3 sm:p-4 sm:text-lg text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 "
                      placeholder="Masukkan Email"
                    />
                    <button
                      type="button"
                      disabled
                      className="text-white absolute right-2.5 sm:bottom-2.5 bottom-1.5 bg-blue-700 hover:bg-blue-800 font-medium rounded-[20px] text-sm sm:px-8 sm:py-3 px-4 py-2 "
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterUser />
    </>
  );
};

export default Home;
