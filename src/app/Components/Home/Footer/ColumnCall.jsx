import React from 'react'
import "./ColumnCall.scss"

const ColumnCall = ({call_arr}) => {

  // console.log(call_arr)
  return (
    <>
      <div id="column-call">
        {
          call_arr.map((val,i)=>{
            if(val.header) return <CreateHeader header={val.header}/>
          })
        }

        {
          call_arr.map((val,i)=>{
            if(!val.header) return <Content description={val}/>
          })
        }
      </div>


    </>
  )
}

const Content=({description})=>{
  return(
    <>
      <span id='column-desc' onMouseEnter={()=>{
        let column_element=document.querySelectorAll("#column-desc");
        column_element.forEach((val,i)=>{
          val.addEventListener("mouseenter",(value,id)=>{
              val.style.color="blue";
              val.style.textDecoration="underline";
          })

          val.addEventListener("mouseleave",()=>{
            val.style.color="gray";
            val.style.textDecoration="none";
          })
        })
      }}
      
      onMouseLeave={()=>{
        let column_element=document.querySelector("#column-desc");
        column_element.style.color="gray";
        column_element.style.textDecoration="none";
      }}
      
      >{description}</span>

    </>
  )
}

const CreateHeader=({header})=>{
  return(
    <span id='footer-header'>{header}</span>
  ) 
}

export default ColumnCall;