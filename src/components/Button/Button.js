import React from "react";
import { heavyCalculation } from "global";
import * as Antd from "antd";

const Button = ({ label, onClick }) => {
    heavyCalculation();

    return (
        <Antd.Button size="large" type="primary" onClick={onClick}>
            {label}
        </Antd.Button>
    );
};

export default Button;
