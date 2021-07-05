import React,{useState,useEffect} from 'react'
import styled from "styled-components"
function Navbar() {
    const [backgroundColor,setBackgroundColor]=useState("transparent");

    useEffect(()=>{
        const stickyNav=window.addEventListener("scroll",()=>{
           
          if(window.scrollY>200){
            setBackgroundColor("#000000e3");
          }
          else{
            setBackgroundColor("transparent");
          }
        })
        
        return ()=>{window.removeEventListener("scroll",stickyNav)}
    },[])

    return (
        <NavbarWrapper BackgroundColor={backgroundColor}>
            <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="Netflix" />
        </NavbarWrapper>
    )
}

const NavbarWrapper=styled.nav`
    position:fixed;
    padding:1.1em 1.5em 1.1em 4.5em;
    background-color:${({BackgroundColor})=>BackgroundColor};
    width:100vw;
    min-height:3ch;
    transition: all 700ms ease;
    img{
        max-width:6em;
        @media(max-width:366px){
          max-width:3.5em;
      }
    }
    z-index:5;
    @media(max-width:366px){
      padding:1em;
    }
`;


export default Navbar

