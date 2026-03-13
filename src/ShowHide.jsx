import { useState } from "react"

export default function ShowHide(){

     const [showHide , setShowHide] = useState('')
      const showText = ()=>{
        setShowHide("Hello React Leaner")
      }
      const hideText = ()=>{
        setShowHide('')
      }


    return(
        <div className="card">
            <h1>
                {showHide}
            </h1>
            <div >
                <button className="btn" onClick={showText}>Show</button>
                <button className="btn"  onClick={hideText}>Hide</button>
            </div>
        </div>
    )
}