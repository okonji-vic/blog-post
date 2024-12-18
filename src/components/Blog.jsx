import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./blog.css";



function Blog() {
    const location = useLocation();
    const item = location.state || {};

    

function formatDateTime(date, time) {
    const dateTime = new Date(`${date}T${time}`); // Combine date and time into a Date object
    return dateTime.toLocaleString("en-US", { hour12: true }); // Format with AM/PM
}


    return (
        <div className="blog-card">
            <img src={item.image} alt="blog" />
            <div className="blog-card-content">
                <h2 className="blog-card-title">{item.title}</h2>
                <p className="blog-card-excerpt">Author:{item.name.toUpperCase()}</p>
                
                <div className="blog-card-date-time">
                    
                <p>{formatDateTime(item.date, item.time).slice(0,10)}</p>
                <p>{formatDateTime(item.date, item.time).slice(12,22)}</p>
                
                </div>
                
                <p className="blog-card-excerpt">{item.content}</p>
                <p className="blog-card-excerpt">{item.conclusion}</p>
        </div>
        <Link to="/"><button>Back</button></Link>
        </div>
    );
}

export default Blog;