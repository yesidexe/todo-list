import React from "react";
import ToDoTasks from "../ToDoTasks";
import ToDoHeader from "../ToDoHeader/Index";
import { styled } from "styled-components";

const ToDoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    gap:30px;

    @media (max-width: 640px) {
        width: 300px;
        gap: 20px;
    }
`
const ToDo = function () {

    return ( 
        <ToDoWrapper>
            <ToDoHeader />            
            <ToDoTasks />
        </ToDoWrapper>
    );
}

export default ToDo;