import React, { useState } from 'react'

export const Task = () => {
    const [Wether,Result] = useState(true);
    const outer = () => {
        Wether?Result(true):Result(false)
    }
  return (
    <div>
            <button onClick={outer}>Rain</button>
            {Wether?<h3>Rani Is Falling</h3>:<h3>Rian is Not Falling</h3>}
    </div>
  )
}

export default Task
