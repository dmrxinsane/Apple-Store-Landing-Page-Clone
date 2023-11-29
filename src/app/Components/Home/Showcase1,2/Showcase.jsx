import React, { useEffect, useState } from 'react'
import "./Showcase.scss"
import ImageCall from './ImageCall'
import axios from 'axios'


const Showcase = ({heading , span, call_arr, keys}) => {

  // REACT HOOOKS REACT HOOOKS REACT HOOOKS REACT HOOOKS REACT HOOOKS

  // let count=0;

  // REACT HOOOKS REACT HOOOKS REACT HOOOKS REACT HOOOKS REACT HOOOKS

  // console.log("Call_arr: ",call_arr[2])
  // call_arr.splice(1,5);
  // console.log(call_arr.length)
  // console.log(keys)

  return (

    <div id='showcase' className={keys}>

      <h2>{heading}<span>{span}</span></h2>

      <div id="leftBtn"

      /*JAVASCRIPT SECTION HERE */

      onMouseEnter={() => {
        let leftBtn = document.querySelector(`.${keys} >div:nth-child(2)`)
        let rightBtn = document.querySelector(`.${keys} >div:nth-child(4)`)
      
        console.log(leftBtn,rightBtn);
        leftBtn.style.opacity = 0.9;
        rightBtn.style.opacity = 0.9;

    }}


      onClick={()=>{
        let client_width=(document.querySelector(`.${keys} >div:nth-child(3)`).clientWidth)/3;
        // console.log(client_width);
        let innerCard=document.querySelector(`.${keys} >div:nth-child(3)`)
        console.log("Up Innerleft",innerCard)
        innerCard.scrollLeft-=client_width;
      }}
      
      /*JAVASCRIPT SECTION HERE */

      ><img src="https://www.svgrepo.com/show/7574/round-left-button.svg" alt="" /></div>

      <div id='inner-card'

      /*JAVASCRIPT SECTION HERE */
      
      onMouseEnter={() => {
        let leftBtn = document.querySelector(`.${keys} >div:nth-child(2)`)
        let rightBtn = document.querySelector(`.${keys} >div:nth-child(4)`)
        // let main=document.querySelector(`.${keys} >div:nth-child(2)`);
        // console.log("mid only",main)
        // console.log("Left & Right",leftBtn,rightBtn);
        leftBtn.style.opacity = 0.9;
        rightBtn.style.opacity = 0.9;

      }}


      onMouseLeave={()=>{
        let leftBtn = document.querySelector(`.${keys} >div:nth-child(2)`)
        let rightBtn = document.querySelector(`.${keys} >div:nth-child(4)`)
        leftBtn.style.opacity = 0;
        rightBtn.style.opacity = 0;
        leftBtn.style.transition=`all ease-in 0.4s`;
        rightBtn.style.transition=`all ease-in 0.4s`;
        // leftBtn.toggleAttribute("id","#leftBtn");
        // rightBtn.toggleAttribute("id","#rightBtn");
        
      }}

        /*JAVASCRIPT SECTION HERE */

      >
        {call_arr.map((val,i)=>{
          return <ImageCall key={i} img_link={val}/>
        })}

      </div>

      <div id="rightBtn"
      
        /*JAVASCRIPT SECTION HERE */
      
        onMouseEnter={() => {
          let leftBtn = document.querySelector(`.${keys} >div:nth-child(2)`)
          let rightBtn = document.querySelector(`.${keys} >div:nth-child(4)`)
          // console.log(leftBtn,rightBtn);
          leftBtn.style.opacity = 0.9;
          rightBtn.style.opacity = 0.9;

      }}

      onClick={()=>{
        let client_width=(document.querySelector(`.${keys} >div:nth-child(3)`).clientWidth)/3;
        // console.log("Client Width",client_width);
        let innerCard=document.querySelector(`.${keys} >div:nth-child(3)`)
        // console.log("InnerCard",innerCard);
        innerCard.scrollLeft+=client_width;
      }}
      
        /*JAVASCRIPT SECTION HERE */
      
      ><img src="https://www.svgrepo.com/download/55298/right-arrow-in-circular-button-outline.svg" alt="" /></div>

    </div>
  )
}

export default Showcase