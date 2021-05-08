import {Link} from "react-router-dom";
import React from "react";

export const Lander = () => (
    <div className="lander">
        <h1>Scratch</h1>
        <p className="text-muted">A simple note taking app</p>
        <div className="pt-3">
            <Link to="/sign-in" className="btn btn-success btn-lg">
                Sign in
            </Link>
        </div>
    </div>
);