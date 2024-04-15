import React from "react";
import { useParams } from "react-router-dom";
import PageTitle from "../../components/PageTitle";
import axios from "axios";

const Show = () => {
    axios.defaults.withCredentials = true;
    
    const { id } = useParams();
    const [resource, setResource] = React.useState({});

    React.useEffect(() => {
        const fetchData = async () => {
            const resourceResp = await axios.get(`/api/resources/${id}`);
            
            setResource(resourceResp.data);
        };

        fetchData();
    }, [id]);

    return (
        <div>
            <PageTitle title="Resource" />

            <h1>Resource</h1>

            <hr />

            <div>
                <div>
                    <h5>{resource.content}</h5>
                    <p>{resource.type}</p>
                    <p>{resource.author?.nickname}</p>
                </div>
            </div>
        </div>
    );
};

export default Show;
