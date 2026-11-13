import { useState } from "react"
import Addtodoform from "./Addtodoform"
import Todolist from "./Todolist"
function Todocontainer(){
    const [activity,setactivity]=useState([
        {id:1,
        activity:"Go for a walk"}
         
       

    ])
    return(
         <div className="mt-5 flex gap-5 flex-wrap ">
       <Addtodoform activity={activity} setactivity={setactivity}/>
       <Todolist activity={activity} setactivity={setactivity}/>
      </div>
    )
}
export default Todocontainer