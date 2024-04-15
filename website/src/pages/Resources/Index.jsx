import React, { useEffect, useState } from "react";
import PageTitle from "../../components/PageTitle";
import axios from "axios";
import { Link } from "react-router-dom";
import 'tailwindcss/tailwind.css';

const Resources = () => {
    axios.defaults.withCredentials = true;
    
    const [resources, setResources] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const resourceResp = await axios.get("/api/resources");

            setResources(resourceResp.data);
        };

        fetchData();
    }, []);

    return (
        <div>
            <PageTitle title="Resources" />
            <h1>Resources</h1>
            <hr />

            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Content</th>
                            <th>Type</th>
                            <th>Author</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {resources.map((resource, index) => (
                            <tr key={index}>
                                <td>{resource.content}</td>
                                <td>{resource.type}</td>
                                <td>{resource.author?.nickname}</td>
                                <td>
                                    <Link to={`/resources/${resource._id}`}>View</Link>&nbsp;|&nbsp;
                                    <Link to={`/resources/${resource._id}/update`}>Update</Link>&nbsp;|&nbsp;
                                    <Link to={`/resources/${resource._id}/delete`}>Delete</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Resources;
