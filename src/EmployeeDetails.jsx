import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "./DataContext";


function EmployeeDetails(){
    let { id }= useParams();
    let [details] = useContext(DataContext);
  
    let x ;
    for(let i=0;i<details.length ; i++){
        if(details[i].id === +id){
            x=i;
        }
    }

    return (
        <div className="text-center">
            <h1>Employee Details</h1>
            <p>Id : {details[x].id}</p>
            <p>Name : {details[x].name}</p>
            <p>User Name : {details[x].username}</p>
            <p>Email : {details[x].email}</p>
            <p>Address : {details[x].address.street + "," +details[x].address.suite +"," + details[x].address.city + "," +
             details[x].address.zipcode + "," + "Geo(" + details[x].address.geo.lat + details[x].address.geo.lng +")"}</p>
            <p>Phone : {details[x].phone}</p>
            <p>Website : {details[x].website}</p>
            <ul style={{"listStyleType":"none"}}>Company Details : 
            <li>Name : {details[x].company.name}</li>
            <li>Catchphrase : {details[x].company.catchphrase}</li>
            <li>bs : {details[x].company.bs}</li>
            </ul>
        </div>
    )
}

export default EmployeeDetails;