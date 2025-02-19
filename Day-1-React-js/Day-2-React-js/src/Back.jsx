import React, { useState } from 'react'
import '../css/Back.css'

export const Back = () => {

//  const [Leave,setLeave] = useState(false);


    const [Leave,setLeave] = useState(true);
    const leave = () => {
        Leave?setLeave(false):setLeave(true)
    }


    // const [Leave,setLeave] = useState(false);
    // const leave = () => {
    //     Leave?setLeave(true):setLeave(false)
    // }


  return (
    <div>

        <button onClick={leave}>leave</button>
        {Leave ? <h3>You are Leave</h3> : <h3>your task</h3> }


        {/* {Leave?<h3>You are Leave</h3>:<h3>your task</h3>} */}



        {/* <button onClick={(e) => {setLeave(true)}}>Leave</button>
      {!Leave && <h3>Your are task</h3>} */}
      
    </div>
  )
}

export default Back
