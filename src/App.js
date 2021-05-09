import React, { useState } from "react";
import Input from "components/Input";
import Button from "components/Button";
import { Card } from "antd";
import "antd/dist/antd.css";
import * as S from "./style";

const App = () => {
    const [form, setForm] = useState({ userName: "", email: "", password: "", firstName: "", lastName: "", city: "" });

    const handleChange = (fieldName, value) => {
        const tmpForm = { ...form };
        tmpForm[fieldName] = value;
        setForm(tmpForm);
    };

    const handleSubmit = () => {
        console.log(form);
    };

    return (
        <S.Content>
            <Card title={"Sign Up"} bordered={false} style={{ width: 500, height: 450 }}>
                <S.Form>
                    <Input value={form.userName} fieldName="userName" onChange={handleChange} placeholder="Username" />
                    <Input value={form.email} fieldName="email" onChange={handleChange} placeholder="Email" />
                    <Input value={form.password} fieldName="password" type="password" onChange={handleChange} placeholder="Password" />
                    <Input value={form.firstName} fieldName="firstName" onChange={handleChange} placeholder="First Name" />
                    <Input value={form.lastName} fieldName="lastName" onChange={handleChange} placeholder="Last Name" />
                    <Input value={form.city} fieldName="city" onChange={handleChange} placeholder="City" />
                    <Button onClick={handleSubmit} label="Submit" />
                </S.Form>
            </Card>
        </S.Content>
    );
};

export default App;
