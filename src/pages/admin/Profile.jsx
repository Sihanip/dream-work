import React, { useState } from 'react'
import { SideBarAdmin, NavbarAdmin } from '../../components/admin/NavbarAdmin'
import FooterAdmin from '../../components/admin/FooterAdmin'

const Profile = () => {

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('John Doe');
  const [role, setRole] = useState('Admin');
  const [bio, setBio] = useState(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, nulla ac vulputate tempus, mi quam elementum nulla, et scelerisque erat libero non nisl. Nulla consectetur bibendum dui.'
  );

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  return (
    <>
      <NavbarAdmin />
      <div className="flex min-h-screen">
        <SideBarAdmin />
        <div className="flex flex-col flex-grow">
          <h1 className="text-3xl font-bold p-4 text-black">Welcome to the Admin Dashboard</h1>
          <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-md p-8 rounded-lg w-96">
              <img
                src="https://placeimg.com/200/200/any"
                alt="Admin Profile"
                className="w-32 h-32 mx-auto rounded-full"
              />
              {isEditing ? (
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full border border-gray-300 rounded-lg mt-4 px-3 py-2"
                />
              ) : (
                <h1 className="text-2xl font-bold text-gray-800 mt-4">{name}</h1>
              )}
              {isEditing ? (
                <input
                  type="text"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="block w-full border border-gray-300 rounded-lg mt-2 px-3 py-2"
                />
              ) : (
                <p className="text-gray-600">{role}</p>
              )}
              {isEditing ? (
                <textarea
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="block w-full border border-gray-300 rounded-lg mt-4 px-3 py-2 resize-none"
                />
              ) : (
                <p className="text-gray-500 mt-4">{bio}</p>
              )}
              {isEditing ? (
                <button
                  onClick={handleSaveClick}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={handleEditClick}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4"
                >
                  Edit Profile
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <FooterAdmin />
    </>
  )
}

export default Profile