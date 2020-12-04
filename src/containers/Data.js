import React, { useEffect, useState } from 'react';

const Data = () => {

    const [appState, setAppState] = useState({
        data: null,
    });

    useEffect(() => {
        const apiUrl = `https://data.cityofnewyork.us/resource/dx8z-6nev.json`;

        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) =>  console.log(data))
    },[])

        return(
            <div>
                <h1>Data</h1>
            </div>
        )
  
}

export default Data;