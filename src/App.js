import React from "react";
import Dashboard from "./Dashboard";
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import Rootlayout from "./Rootlayout";
import Home from "./Home";
import { DataContext } from "./DataContext";
import { useState,useEffect } from "react";
import EmployeeDetails from "./EmployeeDetails";

let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout />}>
      <Route index element={<Home />} />
      <Route path="/employees" element={<Dashboard />} />
      <Route path="/employee/:id" element={<EmployeeDetails />} />
    </Route>
  )
)


function App() {

  const [details ,setDetails] = useState([]);
  
  useEffect(() => {
        
    fetch("https://jsonplaceholder.typicode.com/users")
                         .then(res => res.json())
                         .then(data => {
                            setDetails(data);
                           // setData(data);
                           // setFilteredData(data);
                         })
                        .catch (err => console.log(err));
         
},[]);

  

  return (
    <DataContext.Provider value={[details,setDetails]}>
      <RouterProvider router={router}/>
    </DataContext.Provider>
  );
}

export default App;
