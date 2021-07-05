import React,{useState,useEffect} from 'react'
import styled from "styled-components"
import instance from "./axios";
import {FaPlay} from "react-icons/fa";
import {FaPlus} from "react-icons/fa";


function Header() {
    const API_KEY="6fb159717141801ece965bbb7ad85d38";
    const url=`/discover/tv?api_key=${API_KEY}&with_networks=213`;
    const baseURL="https://image.tmdb.org/t/p/original";
    const [heroBanner,setHeroBanner]=useState([]);
    useEffect(()=>{
        const fetchHeroBanner=async()=>{
            const fetchData=await instance.get(url);
            const randomIndex=Math.floor(15*Math.random());
            setHeroBanner(fetchData.data.results[randomIndex]);
        }
        fetchHeroBanner();
    },[url])
    
    return (
        <HeaderWrapper>
              <div className="banner__details">
                  <h1 className="movie__name">{heroBanner.title||heroBanner.name}</h1>
                  <p className="movie__details">{heroBanner.overview}</p>
                  <div className="button__wrapper">
                      <button className="button"><FaPlay className="icon"/>Play</button>
                      <button className="button"><FaPlus className="icon icon--plus"/>My List</button>
                  </div>
              </div>
              <img className="banner__img" key={heroBanner.id} src={`${baseURL}/${heroBanner.backdrop_path}`} alt={heroBanner.title||heroBanner.name} />
        </HeaderWrapper>
    )
}

const HeaderWrapper=styled.header`
position: relative;
margin-bottom:2em;
&::before{
    content:"";
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-image: linear-gradient(to right, #000 20%, transparent);
}
    .banner__img{
        width:100%;
        object-fit:contain;
        display:inline-block;
    }
    .banner__details{
        position: absolute;
        top:25%;
        left:10%;
        display:flex;
        flex-direction:column;
        text-overflow:hidden;
        text-overflow:ellipsis;
    }
    .button{
        cursor:pointer;
        background-color:#2a2a2a;
        min-width:8ch;
        font-size:1.2rem;
        outline:1px solid transparent;
        border:1px solid transparent;
        color:var(--secondary-clr);
        margin:1em 0.5em 0 0;
        padding:0.2em 0.8em;
        border-radius: 0.1em;
        transition:all 100ms ease;
        @media(max-width:366px){
            font-size:1rem;
        }
        @media(max-width:366px){
            margin:0.5em 0.5em 0.2em 0;
        }
        &:hover{
           filter:brightness(70%);
        }
        &__wrapper{
            margin-top: 2em;
            @media(max-width:530px){
                margin-top:0.5em;
            }
            @media(max-width:366px){
               margin:0;
               display:flex;
               justify-content:flex-start;
               align-items: center;
           }
        }
    }
    .movie__name{
        font-size:clamp(2rem,7vw,13rem);
        font-family: 'Roboto', sans-serif;
        font-weight:900;
        margin-bottom:0.22em;
    }
    .movie__details{
        max-width:40vw;
        min-width:400px;
        display: -webkit-box;
        overflow: hidden;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        @media(max-width:530px){
            font-size:0.8rem;
             min-width:0;
             max-width:80vw;
             -webkit-line-clamp:2;
        }
    }
    .icon{
        margin-right:0.5em;
        font-size: 0.8rem;
        &--plus{
            font-size:0.9rem;
        }
    }
`;




export default Header
