import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import PageTitle from "../../components/PageTitle";
import axios from "axios";

const Update = () => {
    axios.defaults.withCredentials = true;

    const { id } = useParams();
    const navigate = useNavigate();
    const [content, setContent] = React.useState("");
    const [type, setType] = React.useState("QUESTION");

    React.useEffect(() => {
        const fetchData = async () => {
            const listingResp = await axios.get(`/api/listings/${id}`);

            setContent(listingResp.data.content);
            setType(listingResp.data.type);
        };

        fetchData();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const listing = {
            content,
            type,
        };

        await axios.put(`/api/listings/${id}`, listing);
        navigate("/listings");
    };

    return (
        <div>
            <PageTitle title="Update Listing" />

            <h1>Update Listing</h1>

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
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Update;
