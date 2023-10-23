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

function QuantityControl({ quantity, onDecrease, onIncrease }) {

    const decreaseQuantity = () => {
        onDecrease();
    }

    const increaseQuantity = () => {
        onIncrease();
    }

    return (
        <StyleQBox className="qBox d-flex">
            <button onClick={decreaseQuantity}>-</button>
            <h3>{quantity}</h3>
            <button onClick={increaseQuantity}>+</button>
        </StyleQBox>
    );
}

export default QuantityControl;