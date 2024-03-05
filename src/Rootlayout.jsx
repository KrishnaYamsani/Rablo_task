import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";



function Rootlayout(){
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default Rootlayout;