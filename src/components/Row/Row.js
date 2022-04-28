import axios from '../../axios';
import React, {useState, useEffect} from 'react'
import "./Row.scss"

const Row = ({title, fetchUrl, isLargeRow = false}) => {

    const baseUrl = "https://image.tmdb.org/t/p/original"
    const [movies, setMovies] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData()
    }, [fetchUrl])

    console.log(movies)
  return (
    <div className='row container'>
        <h2>{title}</h2>
        <div
         className="row__posters"  >
        {movies.map(movie => ( 
            <img 
            onMouseEnter={(e) => setShow(true)}
            onMouseLeave={(e) => setShow(false)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`} 
            src={`${baseUrl}${ isLargeRow ? movie.poster_path : movie.backdrop_path}`}
             alt={movie.name}/>
        ))}
        </div>
    
    </div>
  )
}

export default Row