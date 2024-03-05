import React,{useContext, useEffect, useState} from "react";
import Card from "./Card";
import Searchbar from "./Searchbar";
import { DataContext } from "./DataContext";



function Dashboard({children}){

    const [details,setDetails] = useContext(DataContext);
    //const [data,setData] = useState([]);
    const [filteredData , setFilteredData] = useState(details);

    function deleteCard(id){
        
     setDetails((prev) => {
      return prev.filter((item) => {
          return item.id !== id;
      })
     })
     setFilteredData((prev) => {
        return prev.filter((item) => {
            return item.id !== id;
        })
       })

}
   
    function filter(id){
        
        setFilteredData(details);
        setFilteredData((prev) => {
            return prev.filter((item) => {
                return item.id === +id;
            })
        })
    }

    return (
        <div>
            <Searchbar filter={filter} />
            <div className="row justify-content-evenly">
                {
                     (filteredData.length > 0) ? 
                    filteredData.map((item,index) => {
                        return <Card key={item.id} data={item} onDelete={deleteCard}/>
                    })
                    : details.map((item,index) => {
                        return <Card key={item.id} data={item} onDelete={deleteCard}/>
                    })

                }
            </div>
        </div>
    )
}

export default Dashboard;