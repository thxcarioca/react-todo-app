import React from 'react';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom';

import Button from "./Button";
import "./TaskDetails.css"

const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();

    const handleBackButtonClick = () => {
        history.push("/");
    }
    return (
        <>
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <p></p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sint nemo nihil, odit quod sunt.
                </p>
            </div>
        </>
);};

export default TaskDetails;