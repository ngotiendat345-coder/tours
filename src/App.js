import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import Tour from './Tour';

const url = 'https://course-api.com/react-tours-project';

function App(){
    const [tours,setTours]= useState([]);
    const [loading,setLoading] = useState(true);
    async function fetchData(){

        const response = await fetch(url);
        const data = await response.json();
        setTours(data);
        console.log(data);
        setLoading(false);
    }
    function ClearTour(id){
        const newTour = tours.filter((tour)=>tour.id!==id);
        setTours(newTour);
    }
    useEffect(()=>{
        fetchData();
    },[])
    if(loading){
        return <Loading />
    }
    return (
        <main>
            <section>
                <div className="title"><h2>our tours</h2><div className="underline"></div></div>
                <div>
                {tours.map((tour)=>{
                    return <Tour {...tour} ClearTour={ClearTour} key={tour.id}/>
                })}
                </div>
            </section>
        </main>
    )
}

export default App;