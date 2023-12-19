import './App.css';
import elephant from "./images/elephant.jpeg";
import React from "react"
const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}


function App() {
  const img_Arr = imageData()
  return (
    <>
      <h1>Kalvium Gallery</h1>
      <div className='grid'>
        {/* <img src={img_Arr[0].img} alt="" className='photo'/>    
        <img src={img_Arr[1].img} alt="" className='photo'/>    
        <img src={img_Arr[2].img} alt="" className='photo'/>    
        <img src={img_Arr[3].img} alt="" className='photo'/>     */}
        {
          img_Arr.map(elem => {
            return(
              <img src={elem.img} alt="elephant" className='photo'/>
            )
          })
        }
      </div>
      {
        
      }
    </>
  )
}

export default App;
