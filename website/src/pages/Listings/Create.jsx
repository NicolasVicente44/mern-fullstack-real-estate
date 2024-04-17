import React from "react";
import PageTitle from "../../components/PageTitle";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
    axios.defaults.withCredentials = true;

    const navigate = useNavigate();
    const [content, setContent] = React.useState("");
    const [type, setType] = React.useState("QUESTION");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const listing = {
            content,
            type,
        };

        await axios.post("/api/listings", listing);
        navigate("/listings");

        setContent("");
        setType("QUESTION");
    };

    return (
        <div>
            <PageTitle title="Create Listing" />

            <h1>Create Listing</h1>

            <hr />

            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="content">Content</label>
                        <textarea
                            id="content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        ></textarea>
                    </div>

                    <div>
                        <label htmlFor="type">Type</label>
                        <select
                            id="type"
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                        >
                            <option value="QUESTION">Question</option>
                            <option value="ANSWER">Answer</option>
                        </select>
                    </div>

                    <button type="submit">
                        Create
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Create;
