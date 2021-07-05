import React, { useState} from 'react'
import requests from "./requests";
import Row from "./Row";
import Header from "./Header";
import Navbar from "./Navbar";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

function App() {
  const [trailerURL, setTrailerURL] = useState("");
  const [trailerDisplay, setTrailerDisplay] = useState("none");
  const style={position:"fixed",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:"50%",aspectRatio:"16/9",display:trailerDisplay};
  const handleClick = (movie) => {
     
      if (trailerURL) {
           setTrailerURL("");
           setTrailerDisplay("none");
      }
      else {
         const fetchTrailer=async()=>{
           try{
            const trailerURL=await movieTrailer(movie.name||movie.title||"");
            const URLParams = new URLSearchParams(new URL(trailerURL||"https://www.youtube.com/watch?v=L3pk_TBkihU").search);
            setTrailerDisplay("block");
            setTrailerURL(URLParams.get("v")||"no");
           }
           catch(e){
             console.log(e)
           }
        }
        fetchTrailer();
      }
  }
  const opts={
    width:"100%",
    height:390,
    playerVars:{
      autoplay:1
    }
  }
  return (
    <div className="App">
        <Navbar/>
        <Header/>
       {
        requests.map(({title,url})=>{
           return <Row key={title} title={title} url={url} handleClick={handleClick}/>
        })
      }
      <div className="player" style={style}>
       <YouTube videoId={trailerURL} opts={opts}/>
      </div>

    </div>
  );
}

export default App;
