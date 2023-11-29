"use client"
import React, { useEffect, useState } from 'react'
import { AiFillApple } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { BiSearch } from 'react-icons/bi'
import { BsBag } from "react-icons/bs"
import Nav1 from './Components/Home/Nav1/Nav1'
import Nav2 from './Components/Home/Nav2/Nav2'
import Firstsection1 from './Components/Home/Sections/Firstsection1'
import Category1 from "./Components/Home/Category1/Category1"
import Showcase from './Components/Home/Showcase1,2/Showcase'
import Title from './Apicall'
import axios from 'axios'
import ShowcaseMini from './Components/Home/Showcase Mini/ShowcaseMini'
import Footer from './Components/Home/Footer/Footer'


const page = () => {

  const [cat1, setCat1] =useState([]);
  const [imgArray, setImgArray] = useState([])
  const [apple2, setApple2] = useState([]);
  const [speakers, setSpeakers] = useState([]);
  const [jbl, setJbl] = useState([]);
  const [vr, setVr] = useState([]);
  const [videocamera, setVideocamera] = useState([]);

  useEffect(() => {
    
    let func1 = async () => {
      let newarr = [];
      let { data: { results } } = await axios.get("https://api.unsplash.com/search/photos?client_id=b5fHYW_TO2u4-BUYzrOumJds1zy8TOnqyQ42kKPcAzw&page=1&query=batman")
      results.forEach((val) => {
        newarr.push(val.urls.full);
      })
      setImgArray(newarr);
    }
    let func2= async()=>{
      let newarr = [];
      let { data: { results } } = await axios.get("https://api.unsplash.com/search/photos?client_id=b5fHYW_TO2u4-BUYzrOumJds1zy8TOnqyQ42kKPcAzw&page=1&query=smart-watches")

      // newarr.splice(0, newarr.length);
      results.forEach((val) => {
        newarr.push(val.urls.full);
      })
      setApple2(newarr);
      
    }
    let func3= async()=>{
      let newarr = [];
      let {data:{results}}= await axios.get("https://api.unsplash.com/search/photos?client_id=b5fHYW_TO2u4-BUYzrOumJds1zy8TOnqyQ42kKPcAzw&page=1&query=speaker-products")

      // newarr.splice(0,newarr.length);
      results.forEach((val) => {
        newarr.push(val.urls.full);
      })
      setSpeakers(newarr);

    }
    let func4= async()=>{
      let newarr = [];
      let {data:{results}}= await axios.get("https://api.unsplash.com/search/photos?client_id=b5fHYW_TO2u4-BUYzrOumJds1zy8TOnqyQ42kKPcAzw&page=1&query=JBL-products")
      // newarr.splice(0,newarr.length);
      results.forEach((val) => {
        newarr.push(val.urls.full);
      })
      setJbl(newarr);

    }

    let func5= async()=>{
      let newarr = [];
      let {data:{results}}= await axios.get("https://api.unsplash.com/search/photos?client_id=b5fHYW_TO2u4-BUYzrOumJds1zy8TOnqyQ42kKPcAzw&page=1&query=vr-glasses")
      // newarr.splice(0,newarr.length);
      results.forEach((val) => {
        newarr.push(val.urls.full);
      })
      setVr(newarr);

    }

    let func6= async()=>{
      let newarr = [];
      let {data:{results}}= await axios.get("https://api.unsplash.com/search/photos?client_id=b5fHYW_TO2u4-BUYzrOumJds1zy8TOnqyQ42kKPcAzw&page=1&query=video-camera")
      // newarr.splice(0,newarr.length);
      results.forEach((val) => {
        newarr.push(val.urls.full);
      })
      setVideocamera(newarr);

    }

    let func7= async()=>{
      let newarr = [];
      let {data:{results}}= await axios.get("https://api.unsplash.com/search/photos?client_id=b5fHYW_TO2u4-BUYzrOumJds1zy8TOnqyQ42kKPcAzw&page=1&query=all-tech-products")
      // newarr.splice(0,newarr.length);
      results.forEach((val) => {
        newarr.push(val.urls.full);
      })
      setCat1(newarr);

    }
   

    func1();
    func2();
    func3();
    func4();
    func5();
    func6();
    func7();


  }, [])



  return (


    <>
      <nav>

        <Nav1 />

        <Nav2 />

      </nav>

      <Firstsection1 />
      {/* Category 1 Scrolling Effect is Required */}
      <Category1 keys="zero" call_arr={cat1}/>

      {/* Showcase 1 & 2 Are Same Dimensions, Use APi */}
      
        <Showcase heading={Title[0].heading} span={Title[0].span} call_arr={imgArray} keys="one"/>

        <Showcase heading={Title[1].heading} span={Title[1].span} call_arr={apple2} keys="two"/>



      {/* <Showcase/> */}



      {/* Showcase Mini */}

      <ShowcaseMini heading={Title[2].heading} span={Title[2].span} call_arr={speakers} keys="three"/>

      {/* Showcase Mini */}


      {/* Showcase 3 & 4 Are Same Dimensions, Use APi */}
      <Showcase heading={Title[3].heading} span={Title[3].span} call_arr={jbl} keys="four"/>
      <Showcase heading={Title[4].heading} span={Title[4].span} call_arr={vr} keys="five"/>

      {/* Showcase 5 is single Image */}
      <Showcase heading={Title[5].heading} span={Title[5].span} call_arr={videocamera} keys="six"/>


      {/* Footer Section */}

      <Footer/>




    </>
  )
}

export default page