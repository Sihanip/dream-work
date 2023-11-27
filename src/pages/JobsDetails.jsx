import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavbarUser from "../components/user/NavbarUser";
import { CiLocationOn } from "react-icons/ci";

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";

import { FooterUser } from "../components/user/FooterUser";
import axios from "axios";
import { GlobalContext } from "../context/GlobalContext";

const JobsDetails = () => {
  const { state } = useContext(GlobalContext);
  const { data } = state;

  let { idData } = useParams();
  const [dataDetail, setDataDetail] = useState({
    title: "",
    job_description: "",
    job_qualification: "",
    job_type: "",
    job_tenure: "",
    job_status: "",
    company_name: "",
    company_image_url: "",
    company_city: "",
    salary_min: "",
    salary_max: "",
  });

  useEffect(() => {
    if (idData !== undefined) {
      axios
        .get(`https://dev-example.sanbercloud.com/api/job-vacancy/${idData}`)
        .then((response) => {
          // console.log(response.data);

          let data = response.data;

          setDataDetail({
            title: data.title,
            job_description: data.job_description,
            job_qualification: data.job_qualification,
            job_type: data.job_type,
            job_tenure: data.job_tenure,
            job_status: data.job_status,
            company_name: data.company_name,
            company_image_url: data.company_image_url,
            company_city: data.company_city,
            salary_min: data.salary_min,
            salary_max: data.salary_max,
          });
        })
        .catch((error) => {});
    }
  }, [idData]);

  const formatToRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  return (
    <>
      <NavbarUser />
      <main>
        <section className="bg-white">
          <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <img
              src={dataDetail.company_image_url}
              alt="dashboardImage"
              className="w-full"
            />
            <div className="mt-4 md:mt-0">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
                {dataDetail.title} ({dataDetail.job_type})
              </h2>
              <p className="mb-4 text-black opacity-50 text-lg font-semibold">
                {dataDetail.company_name}
              </p>
              <p className="mb-4 font-light text-black md:text-lg">
                <span className="font-medium">Status :</span>
                <span className="ps-2 justify-between">
                  {dataDetail.job_status === 1 ? (
                    <span style={{ color: "green", fontWeight: "700" }}>
                      Open Hiring
                    </span>
                  ) : (
                    <span style={{ color: "red", fontWeight: "700" }}>
                      Closed Hiring
                    </span>
                  )}{" "}
                  ({dataDetail.job_tenure})
                </span>
              </p>
              <p className="mb-4 font-light text-black md:text-lg">
                <span className="font-medium">City :</span>{" "}
                {dataDetail.company_city}
              </p>
              <p className="mb-4 font-light text-black md:text-lg text-justify">
                <span className="font-medium">Description :</span>{" "}
                {dataDetail.job_description}
              </p>
              <p className="mb-4 font-light text-black md:text-lg text-justify">
                <span className="font-medium">Qualification :</span>{" "}
                {dataDetail.job_qualification}
              </p>
              <p className="mb-4 font-light text-black md:text-lg">
                <span className="font-medium">Salary :</span>{" "}
                {formatToRupiah(dataDetail.salary_min)} -{" "}
                {formatToRupiah(dataDetail.salary_max)}
              </p>
              <Link
                to="/job-vacancy"
                className="inline-flex items-center text-white bg-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Apply Now
                <svg
                  className="ml-2 -mr-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        <section className="container mx-auto">
          <div className="flex justify-between items-center my-10 mx-4">
            <h1 className="text-2xl text-black font-semibold">
              Mungkin Anda Cari
            </h1>
            <Link to={'/'} className="text-red-700 underline">Kembali</Link>
          </div>
          {data.length > 0 ? (
            <Swiper
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              slidesPerView={3.5}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                400:{
                  slidesPerView:2,
                },
                639: {
                  slidesPerView: 3,
                },
                865:{
                  slidesPerView:4
                },
                1000:{
                  slidesPerView:5
                },
                1500:{
                  slidesPerView:6
                },
                1700:{
                  slidesPerView:7
                }
              }}
              navigation={true}
              modules={[Autoplay, Navigation]}
              className="mySwiper"
            >
              {data.map((response, index) => (
                <SwiperSlide key={response.id} className="mx-2">
                  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow mb-14">
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
                        <p className="hover:text-primary">{response.title}</p>
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
                              <Link to={`/job-vacancy/${response.id}`} key={index}>Detail</Link>
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
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <p>Loading...</p>
          )}
        </section>
      </main>
      <FooterUser />
    </>
  );
};

export default JobsDetails;
