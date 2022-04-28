
import React, { useEffect, useState } from 'react'
import "./Banner.scss"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';
import axios from '../../axios';
import requests from '../../Request';
import CircularProgress from '@mui/material/CircularProgress';


const Banner = () => {

    const[movie, setMovie] = useState([]);
    const[progress, setProgress] = useState(false)

    useEffect(() => {
       async function fetchData() {
           setProgress(true)
           const request = await axios.get(requests.fetchNetflixOriginal);
           setMovie(request.data.results[
               Math.floor(Math.random() * request.data.results.length - 1)
           ]);
           setProgress(false)
           return request;
       }
       fetchData()
    }, [])

    console.log(movie)

    const truncate = (string , n) => {
        return string?.length > n ? string.substr(0, n-1) + "..." : string
    }
  return (
    <div>
       { progress ? <CircularProgress /> :  <header
     className='banner'
     style={{
         backgroundSize: "cover",
         backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
         backgroundPosition: "center center"
     }}>
        <div className="banner_content container">
            <h1 className='banner_title'>{movie.name || movie.title || movie.original_name}</h1>
            <p className="banner_description">
                { movie.overview ? truncate(movie.overview, 150) : "Pas de description disponible"}
            </p>

         <div className="banner_buttons">
             <button className='banner_button'> <PlayArrowIcon /> Lecture</button>
             <button className='banner_button'> <InfoIcon /> Plus d'infos</button>
             </div>   
    
        </div>

    </header> } 
    </div>
    

  )
}

export default Banner