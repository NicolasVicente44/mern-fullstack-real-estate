import React from "react";
import { useParams } from "react-router-dom";
import PageTitle from "../../components/PageTitle";
import axios from "axios";

const Show = () => {
    axios.defaults.withCredentials = true;
    
    const { id } = useParams();
    const [listing, setListing] = React.useState({});

    React.useEffect(() => {
        const fetchData = async () => {
            const listingResp = await axios.get(`/api/listings/${id}`);
            
            setListing(listingResp.data);
        };

        fetchData();
    }, [id]);

    return (
        <div>
            <PageTitle title="Listing" />

            <h1>Listing</h1>

            <hr />

            <div>
                <div>
                    <h5>{listing.content}</h5>
                    <p>{listing.type}</p>
                    <p>{listing.author?.nickname}</p>
                </div>
            </div>
        </div>
    );
};

export default Show;
