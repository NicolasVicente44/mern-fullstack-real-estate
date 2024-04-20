import React, { useState } from "react";
import PageTitle from "../../components/PageTitle";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Form from "./Form";

const Register = () => {
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    const submitForm = async (event) => {
        event.preventDefault();

        try {
            await axios.post("/api/users", user);
            toast("User registered successfully");
            navigate("/login");
        } catch (error) {
            toast.error(error?.response?.data?.error?.message || "An error occurred");
        }
    };

    return (
        <div>
            <PageTitle title="Register" />
            <div className="text-center">
            <h1>Register With Proper Pulse</h1>

        </div>

            <Form user={user} setUser={setUser} submitForm={submitForm} submitLabel="Register" />
        </div>
    );
};

export default Register;
