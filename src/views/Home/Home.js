import React from 'react'
import Banner from '../../components/Banner/Banner'
import Navigation from '../../components/Navigation/Navigation'
import "../Home/Home.css"
import requests from '../../Request'
import Row from './../../components/Row/Row';


const Home = () => {
  return (
    <div className='home'>
      <div className='home-content'>
        <Banner />
        <Row title="NETFLIX ORIGINALS"fetchUrl={requests.fetchNetflixOriginal} isLargeRow />
        <Row title="Les mieux notés"fetchUrl={requests.fetchTopRated}/>
        <Row title="Films d'actions"fetchUrl={requests.fetchActionMovies} />
        <Row title="Comédies"fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horreur"fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance"fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaire"fetchUrl={requests.fetchDocumentarues} />

      </div>

    </div>
  )
}

export default Home