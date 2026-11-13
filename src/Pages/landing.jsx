import Header from "../components/Header";
import Card from "../components/Card";
import { Data } from "../components/Carddata"
import Todocontainer from "../components/Todocontainer";
import { useLocation } from "react-router-dom"

function Landing(){
    const location=useLocation()
    return(
        <div className="bg-black p-16 ">
    <div className="bg-[#EFEFEF] p-10 border rounded-md">
      <Header name={location.state.name}/>
      <div className="flex mt-3 gap-5 flex-wrap">
      {
        Data.map((item)=>(
          <Card clr={item.bgclr} title={item.title} subtitle={item.subtitle}/>
        ))
      }
      
      
      </div>
     <Todocontainer/>
    </div>
   </div>
    )
}
export default Landing