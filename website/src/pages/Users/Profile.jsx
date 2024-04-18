import React from "react";
import PageTitle from "../../components/PageTitle";
import { useAuth } from "../../App";
import { useNavigate } from "react-router-dom";
import Form from "./Form";
import { toast } from "react-toastify";
import axios from "axios";

const Profile = () => {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();

  if (!user) {
    return navigate("/login");
  }

  const submitForm = async (event) => {
    event.preventDefault();

    try {
      await axios.put(`/api/users/${user._id || user.id}`, user);
      toast("User updated successfully");
    } catch (error) {
      toast.error(error?.response?.data?.error?.message || "An error occurred");
    }
  };
  console.log(user);

  return (
    <div>
      <PageTitle title="Profile" />
      <div className="text-center">
        <h1>Profile</h1>
        {user.firstName ? (
          <h2>{`Welcome, ${user.firstName} ${user.lastName}!`}</h2>
        ) : null}
      </div>

      <Form
      
        user={user}
        setUser={setUser}
        submitForm={submitForm}
        submitLabel="Update"
      />
    </div>
  );
};

export default Profile;
