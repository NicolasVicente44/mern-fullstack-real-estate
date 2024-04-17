import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Delete = () => {
    axios.defaults.withCredentials = true;

    const { id } = useParams();
    const navigate = useNavigate();

    const handleDelete = async () => {
        await axios.delete(`/api/listings/${id}`);

        navigate("/listings");
    };

    return (
        <div>
            <h1>Delete Listing</h1>

            <hr />

            <div>
                <button onClick={handleDelete}>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default Delete;
