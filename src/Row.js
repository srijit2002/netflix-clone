import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import instance from "./axios";


function Row({ title, url, handleClick}) {
    const baseUrlOfImg = "https://image.tmdb.org/t/p/original";
    const [movies, setMovies] = useState([]);
 

    useEffect(() => {
        const fetchUrl = async () => {
            const fetchData = await instance.get(url);
            setMovies(fetchData.data.results);
        }
        fetchUrl();

    }, [url])

    return (
        <>
            <h2 className="row__heading">{title}</h2>
            <RowWrapper title={title}>
                {
                    movies.map((movie) => {

                        return (
                            <img onClick={() => handleClick(movie)} key={movie.id} className="row__img" src={`${baseUrlOfImg}/${movie.poster_path || movie.backdrop_path}`} alt={movie.title || movie.name} />
                        )
                    })
                }
               
            </RowWrapper>
        </>
    )
}

const RowWrapper = styled.section`
    display:flex;
    overflow-x:scroll;
    overflow-y:hidden;
    padding:0 1em;
    &::-webkit-scrollbar{
        display:none;
    }
    .row__img{
        display:inline-block;
        width:100%;
        max-width:${(movie) => { return (movie.title === "Trending Now") ? "280px" : "180px" }};
        padding:0.6em;
        cursor:pointer;
        will-change:transform;
        transition: transform 300ms ease;
        opacity:0.88;
        @media(max-width:366px){
            max-width:${(movie) => {return (movie.title === "Trending Now") ? "150px" : "100px" }};
        }
        &:hover{
            transform: scale(1.05);
            opacity:0.98;
        }
      
       
    }
 
`;



export default Row
