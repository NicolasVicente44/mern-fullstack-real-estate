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

        <div className="flex flex-col mb-6">
          <label htmlFor="avatar" className="text-[#5a7184]">
            Avatar
          </label>
          <input
            type="file"
            id="avatar"
            name="avatar"
            onChange={(e) => setUser({ ...user, avatar: e.target.files[0] })}
            className="mt-3"
          />
          <div className="text-center  pt-14">
            {user.avatar && (
              <img
                src={URL.createObjectURL(user.avatar)}
                alt="avatar"
                className=" pb-14 w-36 h-36 p-1 rounded-full ring-8 ring-gray-300 dark:ring-gray-500"
              />
            )}
          </div>
        </div>

        <button
          type="submit"
          className="bg-black text-white font-bold py-4 px-8 mb-6 w-full rounded-lg"
        >
          {" "}
          {submitLabel}{" "}
        </button>
      </form>
    </div>
  );
};

export default Form;
