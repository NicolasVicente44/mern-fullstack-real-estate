import React, { useEffect, useState } from "react";
import PageTitle from "../../components/PageTitle";
import axios from "axios";
import { Link } from "react-router-dom";
import 'tailwindcss/tailwind.css';

const Listings = () => {
    axios.defaults.withCredentials = true;
    
    const [listings, setListings] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const listingResp = await axios.get("/api/listings");

            setListings(listingResp.data);
        };

        fetchData();
    }, []);

    return (
        <div>
            <PageTitle title="Listings" />
            <h1>Listings</h1>
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
                        {listings.map((listing, index) => (
                            <tr key={index}>
                                <td>{listing.content}</td>
                                <td>{listing.type}</td>
                                <td>{listing.author?.nickname}</td>
                                <td>
                                    <Link to={`/listings/${listing._id}`}>View</Link>&nbsp;|&nbsp;
                                    <Link to={`/listings/${listing._id}/update`}>Update</Link>&nbsp;|&nbsp;
                                    <Link to={`/listings/${listing._id}/delete`}>Delete</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Listings;
