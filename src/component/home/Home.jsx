import React, { useEffect, useState } from 'react'
import './Home.scss'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {BiPlay} from "react-icons/bi"
import {AiOutlinePlus} from "react-icons/ai"

const apikey="1a5dba391475bcf0719846738778dbcb"
const url="https://api.themoviedb.org/3"
const imgUrl="https://image.tmdb.org/t/p/original"
const upcoming="upcoming"
const popular="popular"
const top_rated="top_rated"
const now_playing="now_playing"

const Card=({img})=>(
  <img className='card' src={img} alt="cover"></img>
)
const Row=({
  title,
  arr=[
  ]})=>(
  <div className='row'>
    <h2>{title}</h2>
    <div>
      {
        arr.map((item,index)=>(
          <Card key={index} img={`${imgUrl}/${item.poster_path}`} />
        ))
      }
    </div>
  </div>
)
function Home() {
  const [upcomingMovies,setUpcomingMovies]=useState([])
  const [popularMovies,setPopularMovies]=useState([])
  const [topRatedMovies,setTopRatedMovies]=useState([])
  const [nowPlayingMovies,setNowPlayingMovies]=useState([])
  const [genre,setGenre]=useState([])
  useEffect(()=>{
      const fetchUpcoming=async()=>{
        const {data:{results}} = await axios.get(`${url}/movie/${upcoming}?api_key=${apikey}`)
        setUpcomingMovies(results)
      };
      const fetchPopular=async()=>{
        const {data:{results}} = await axios.get(`${url}/movie/${popular}?api_key=${apikey}`)
        setPopularMovies(results)
      };
      const fetchTopRated=async()=>{
        const {data:{results}} = await axios.get(`${url}/movie/${top_rated}?api_key=${apikey}`)
        setTopRatedMovies(results)
      };
      const fetchNowPlaying=async()=>{
        const {data:{results}} = await axios.get(`${url}/movie/${now_playing}?api_key=${apikey}`)
        setNowPlayingMovies(results)
      };
      const getAllGenre=async ()=>{
        // https://api.themoviedb.org/3/genre/movie/list?api_key=1a5dba391475bcf0719846738778dbcb&language=en-US&page=1
        const {data:{genres}} = await axios.get(`${url}/genre/movie/list?api_key=${apikey}`)
        setGenre(genres)
      }
      fetchUpcoming()
      fetchPopular()
      fetchTopRated()
      fetchNowPlaying()
      getAllGenre()
  },[])
  return (
    <section className="home">
      <div className='banner' style={{
        backgroundImage:popularMovies[0] ? `url(${`${imgUrl}/${popularMovies[0].poster_path}`})` : "rgb(16,16,16)"
      }}>
        {popularMovies[0] && <h1>{popularMovies[0].original_title}</h1>}
        {popularMovies[0] && <p>{popularMovies[0].overview}</p>}
        <div>
          <button><BiPlay/> Play</button>
          <button>My List <AiOutlinePlus/></button>
        </div>
      </div>
        <Row title={"Upcoming Movies"} arr={upcomingMovies}/>
        <Row title={"Popular on Netflix"} arr={popularMovies}/>
        <Row title={"Top Rated"} arr={topRatedMovies}/>
        <Row title={"Now Playing"} arr={nowPlayingMovies}/>
        <div className="genreBox">
          {
            genre.map((item) => (
              <Link key={item.id} to={`/genre/${item.id}`}>{item.name}</Link>
            ))
          }
        </div>
    </section>
  )
}

export default Home
