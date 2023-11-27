import React, { Fragment, useContext } from "react";
import { SideBarAdmin, NavbarAdmin, } from "../../components/admin/NavbarAdmin";
// import FooterAdmin from "../../components/admin/FooterAdmin";
import { GlobalContext } from "../../context/GlobalContext";
import FooterAdmin from "../../components/admin/FooterAdmin";

const ListJobs = () => {
  const { state, handleState } = useContext(GlobalContext);


  const {
    data,
    loading,
    searchTitle,
    setSearchTitle,
    searchLocation,
    searchType,
  } = state;

  const {
    handleDelete
  } = handleState;

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
        <div className="container mx-auto" >
            <h1 className="text-3xl font-bold p-4 text-black">Welcome to the Admin Dashboard</h1>
            <form className="relative pull-right  md:pr-0 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 my-10 px-4">
              <div className="flex">
                <label
                  htmlFor="search-dropdown"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Your Email
                </label>
                <button
                  id="dropdown-button"
                  data-dropdown-toggle="dropdown"
                  className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                  type="button"
                >
                  All categories{" "}
                  <svg
                    className="w-2.5 h-2.5 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  id="dropdown"
                  className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdown-button"
                  >
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Mockups
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Templates
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Design
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Logos
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="relative w-full">
                  <input
                    onChange={(e) => setSearchTitle(e.target.value)}
                    type="search"
                    id="search-dropdown"
                    className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                    placeholder="Cari Lowongan"
                    required
                  />
                  <div

                    type="submit"
                    className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                    <span className="sr-only">Search</span>
                  </div>
                </div>
              </div>
            </form>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-sm text-white bg-violet-600">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Nama Lowongan
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Perusahaan
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Deskripsi
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Kualifikasi
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Type
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Gaji
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Aksi
                    </th>
                  </tr>
                </thead>
                {loading ? (
                  true
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
                    }).map((response) => {
                      return (
                        <Fragment key={response.id}>
                          <tbody>
                            <tr
                              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                            >
                              <th
                                scope="row"
                                className="px-6 py-4 text-black overflow-hidden whitespace-nowrap "
                              >
                                {response.title}
                              </th>
                              <td className="px-6 py-4">{response.company_name}</td>
                              <td className="px-6 py-4 overflow-hidden whitespace-nowrap max-w-xs">
                                {response.job_description}
                              </td>
                              <td className="px-6 py-4 overflow-hidden whitespace-nowrap max-w-xs">
                                {response.job_qualification}
                              </td>
                              <td className="px-6 py-4">{response.job_tenure}</td>
                              <td className="px-6 py-4">
                                {formatToRupiah(response.salary_min)} -{" "}
                                {formatToRupiah(response.salary_max)}
                              </td>
                              <td className="px-6 py-4 flex">
                                <button
                                  type="button"
                                  to="/dashboard/list-job-vacancy/form"
                                  className="border-solid border-2 rounded-lg border-gray-300 py-1 px-5 me-3 hover:bg-yellow-400 hover:border-yellow-400 hover:text-white"
                                >
                                  Edit
                                </button>
                                <button
                                  value={response.id}
                                  onClick={handleDelete}
                                  type="button"
                                  className="focus:outline-none text-white font-medium rounded-lg px-5 py-1.5 bg-red-600 hover:bg-red-700"
                                >
                                  Hapus
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </Fragment>
                      );
                    })
                )}

              </table>
            </div>
          </div>
        </div>
      
      <FooterAdmin />
    </>
  );
};

export default ListJobs;
