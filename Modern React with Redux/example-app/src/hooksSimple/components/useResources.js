import { useState, useEffect } from 'react';
import axios from 'axios';

const useResources = (resource) => {

    const [resources, setResources] = useState([])

    // It has to be an external function because ``useEffect`` does not
    // accept async/promise returning functions.
    const fetchResource = async (resource) => {
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/${resource}`
        )

        setResources(response.data)
    }

    // ``resource`` in the last [] will make it re-render (call the function)
    // everytime it gets updated (value change).
    useEffect(() => {
        fetchResource(resource)
    }, [resource])

    return resources;
}

export default useResources;