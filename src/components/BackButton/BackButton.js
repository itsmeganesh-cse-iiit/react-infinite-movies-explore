
import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import './BackButton.css'
const BackButton = (props) => {
    return (<div className="back-button" onClick={() => props.history.push("/")}>
        <FaArrowLeft color="#fff" /> <label className="back-button"></label>
    </div>)
}

export default BackButton