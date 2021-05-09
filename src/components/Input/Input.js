import React from "react";
import { heavyCalculation } from "global";
import * as Antd from "antd";

const Input = ({ fieldName, value, onChange, placeholder }) => {
    heavyCalculation();

    const handleChange = (e) => {
        onChange(fieldName, e.target.value);
    };

    return <Antd.Input value={value} onChange={handleChange} placeholder={placeholder} />;
};

export default Input;
