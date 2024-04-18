import React from "react";

const Form = ({ user, setUser, submitForm, submitLabel }) => {
  // Ensure user object has default properties to avoid inputs being uncontrolled initially
  const getUserProp = (prop) => (user && user[prop] ? user[prop] : "");

  return (
    <div className="container mx-auto px-5 py-10">
      <form onSubmit={submitForm} className="max-w-md mx-auto">
        <div className="flex flex-col mb-6">
          <label htmlFor="firstName" className="text-[#5a7184]">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            value={getUserProp("firstName")}
            placeholder="Enter First Name"
            className="placeholder-text-[#959ead] text-black mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#c3cad9]"
          />
        </div>

        <div className="flex flex-col mb-6">
          <label htmlFor="lastName" className="text-[#5a7184]">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
            value={getUserProp("lastName")}
            placeholder="Enter Last Name"
            className="placeholder-text-[#959ead] text-black mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#c3cad9]"
          />
        </div>

        <div className="flex flex-col mb-6">
          <label htmlFor="email" className="text-[#5a7184]">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            value={getUserProp("email")}
            placeholder="Enter Email"
            className="placeholder-text-[#959ead] text-black mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#c3cad9]"
          />
        </div>

        <div className="flex flex-col mb-6">
          <label htmlFor="nickname" className="text-[#5a7184]">
            Nickname
          </label>
          <input
            type="text"
            id="nickname"
            name="nickname"
            onChange={(e) => setUser({ ...user, nickname: e.target.value })}
            value={getUserProp("nickname")}
            placeholder="Enter Nickname"
            className="placeholder-text-[#959ead] text-black mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#c3cad9]"
          />
        </div>

        <div className="flex flex-col mb-6">
          <label htmlFor="password" className="text-[#5a7184]">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            value={getUserProp("password") || ""}
            placeholder="Enter Password"
            className="placeholder-text-[#959ead] text-black mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#c3cad9]"
          />
        </div>

        <div class="flex items-center justify-center w-full">
          <label
            for="dropzone-file"
            class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800  hover:bg-gray-100 dark:border-gray-400 dark:hover:border-gray-500 dark:hover:bg-gray-400"
          >
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
              {user.avatar ? (
                <img
                  src={`http://localhost:1111/${user.avatar}`}
                  alt="avatar"
                  className="w-20 h-20 mb-4 rounded-full"
                />
              ) : (
                <svg
                  class="w-8 h-8 mb-4 text-black dark:text-black"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
              )}
              <p class="mb-2 text-sm text-black dark:text-black">
                {user.avatar ? (
                  "Change your avatar"
                ) : (
                  <span class="font-semibold">Click to upload </span>
                )}
                or drag and drop
              </p>
              <p class="text-xs text-black dark:text-black">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              onChange={(e) => setUser({ ...user, avatar: e.target.files[0] })}
              class="hidden"
            />
          </label>
        </div>

        <button
          type="submit"
          className="bg-black mt-8 text-white font-bold py-4 px-8 mb-6 w-full rounded-lg"
        >
            
          {submitLabel}
        </button>
      </form>
    </div>
  );
};

export default Form;
