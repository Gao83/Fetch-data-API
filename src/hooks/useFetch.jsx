import React, { useState, useEffect } from 'react'
import axios from 'axios'

function useFetch(url) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null);

    useEffect(() => {
        (
            async function () {
                try {
                    setLoading(true)
                    const response = await axios.get(url)
                    setData(response.data)
                } catch (err) {
                    setError(err)
                } finally {
                    setLoading(false)
                }
            }
            
        )()
    }, [url])

    return { data, loading, error };
}

export default useFetch;