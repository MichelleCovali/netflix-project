import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {

    const navigate = useNavigate()
    useEffect(() => {
        navigate("/profile")
    }, []);

    return null;
}

export default Homepage;