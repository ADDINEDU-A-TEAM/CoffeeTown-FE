import React, { useState } from 'react';
import styled from "styled-components";

const StyleQBox = styled.div`
    width: 74px;
    height: 30px;
    margin-top: 8px;
    border: 1px solid #dadada;

    button {
        width: 50px;
        border: none;
        font-size: 22px;
        background-color: #fff;
    }

    h3 {
        margin-top: 8px;
        font-size: 14px;
    }
`;

function QuantityControl({ d }) {
    const [number, setNumber] = useState(0);

    const incre = (index) => {
        setNumber(number + index);
    }

    const decre = (index) => {
        setNumber(number - index);
    }

    return (
        <StyleQBox className="qBox d-flex">
            <button onClick={() => decre(1)}>-</button>
            <h3>0</h3>
            <button onClick={() => incre(1)}>+</button>
        </StyleQBox>
    );
}

export default QuantityControl;