import React from 'react'
import { AiFillApple } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { BiSearch } from 'react-icons/bi'
import { BsBag } from "react-icons/bs"
import "./nav1.scss"
import Nav1Hover from './Nav1Hover'

const Nav1 = () => {
  return (

    <>
      <div id="nav-1"
      // JAVASCRIPT STARTS HERE

      onMouseEnter={()=>{
        let list_Btn=document.querySelectorAll("#nav-1 >li")
        // let hover_nav=document.querySelector("#nav-hover")
        list_Btn.forEach((val,i)=>{
          val.addEventListener("mouseenter",()=>{
            val.style.cursor="pointer";
            val.style.scale=1.2;
            // hover_nav.style.display="block"
            // hover_nav.style.animation="movedown 0.4s linear"
          })

          val.addEventListener("mouseleave",()=>{
            val.style.scale=1;
            // console.log("LEft")
            // hover_nav.style.animation="moveup 3s linear";
            // hover_nav.style.display="none"
          })
        })

      }}

      onMouseLeave={()=>{
        // let hover_nav=document.querySelector("#nav-hover")
        // hover_nav.style.animation="moveup 1s linear"
        // hover_nav.style.display="none";
        // setTimeout(()=>{
        //   // hover_nav.style.display="none";
        // },1000)
      }}



      // JAVASCRIPT ENDS HERE
      >

        <AiFillApple id='apple' />
        <li><a href="#">Store</a></li>
        <li><a href="#">Mac</a></li>
        <li><a href="#">iPad</a></li>
        <li><a href="#">iPhone</a></li>
        <li><a href="#">Watch</a></li>
        <li><a href="#">Airpods</a></li>
        <li><a href="#">Tv & Home</a></li>
        <li><a href="#">Entertainment</a></li>
        <li><a href="#">Accessories</a></li>
        <li><a href="#">Support</a></li>
        <BiSearch id='search' />
        <BsBag id='bag' />

      </div>
      <Nav1Hover />




    </>


  )
}

export default Nav1