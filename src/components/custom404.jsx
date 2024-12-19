import React from "react";
import { Link } from "react-router-dom";
import "./custom404.css";

function Custom404() {
    return (
        <div className="custom-404">
        <h1>404: Page Not Found</h1>
        <Link className="div-link" to="/"><button>Go Home</button></Link>
        </div>
    );
    }

export default Custom404;