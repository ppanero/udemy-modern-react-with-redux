import { useState, useEffect } from 'react';

export default () => {
    const [lat, setLat] = useState(null)
    const [errorMessage, setErrorMessage] = useState('')

    // Empty array as the second argument works as ``componentDidMount``
    useEffect( () => {
        window.navigator.geolocation.getCurrentPosition(
            position => setLat(position.coords.latitude), // Success callback
            err =>  setErrorMessage(err.message) // Failure callback
        );
    }, [])

    // Community convention: To allow the use of array destructuring
    // Might be problematic if changing the signature
    return [lat, errorMessage]
}