import React, { useEffect, useState } from 'react';
import CardList from '../components/CardList';

const Data = () => {

    const [appState, setAppState] = useState({
        data: [],
    });

    useEffect(() => {
        const apiUrl = `https://data.cityofnewyork.us/resource/dx8z-6nev.json`;

        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) =>  {
                setAppState({data: data})
            })
    },[setAppState])

        return(
            <div>
                <h1>Data</h1>
                <CardList data={appState.data}/>
            </div>
        )
  
}

export default Data;