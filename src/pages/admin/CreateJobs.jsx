import React, { useState } from "react";
import { SideBarAdmin, NavbarAdmin } from "../../components/admin/NavbarAdmin";
import FooterAdmin from "../../components/admin/FooterAdmin";

const CreateJobs = () => {

  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission or API call to add the job listing
    console.log('Job Title:', jobTitle);
    console.log('Company:', company);
    console.log('Location:', location);
    console.log('Description:', description);
    // Reset form fields
    setJobTitle('');
    setCompany('');
    setLocation('');
    setDescription('');
  };

  return (
    <>

      <NavbarAdmin />
      <div className="flex min-h-screen bg-gray-100">
        <SideBarAdmin />
        <div className="container mx-auto ">
          <h1 className="text-3xl font-bold p-4 text-black">Welcome to the Admin Dashboard</h1>
          <div className="p-8 rounded-lg ">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Add Job Listing</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="jobTitle" className="block text-gray-700 font-bold mb-2">
                  Job Title
                </label>
                <input
                  type="text"
                  id="jobTitle"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  className="block w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="company" className="block text-gray-700 font-bold mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="block w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="location" className="block text-gray-700 font-bold mb-2">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="block w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
                  Description
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="block w-full border border-gray-300 rounded-lg px-3 py-2 resize-none focus:outline-none focus:border-blue-500"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                Add Job Listing
              </button>
            </form>
          </div>
        </div>
      </div>

      <FooterAdmin />
    </>
  )
}

export default CreateJobs