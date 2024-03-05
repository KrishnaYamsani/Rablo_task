import React from "react";
import { Link } from "react-router-dom";

function Card({data,onDelete}){

    let styles ={
        "textDecoration":"none",
        "color":"black"
    };

    return (
        <div className="card col-sm-6 col-md-5 col-lg-3 m-2 ">
            <Link style={styles} to={`/employee/${data.id}`} >
            <div className="card-body text-center">
                <h5 className="card-title">{data.id}</h5>
                <h5 className="card-title">{data.name}</h5>
                <h5 className="card-title">{data.username}</h5>
                <h5 className="card-title">{data.email}</h5>
                <h5 className="card-title">{data.phone}</h5>
                <button className="btn btn-primary  mx-auto mt-2 mb-0">Edit</button>
            </div>
            </Link>
            <button className="btn btn-primary   col-md-4 button" onClick={() => {
                
                    onDelete(data.id);
            }}>Delete</button>
        </div>
    )
}

export default Card;