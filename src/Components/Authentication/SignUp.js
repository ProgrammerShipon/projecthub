"use client";

import React, { useState } from "react";
import img from "@/Assets/background/authentication-bg.jpg";
import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from "antd";
import { useZustandStore } from "@/Store/Store";
import { redirect } from "next/navigation";
const { Option } = Select;

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const SignUp = () => {
  const { authentication, getSignUp } = useZustandStore();
  const [error, setError] = useState(null);
  const [form] = Form.useForm();

  // Desc: if user is already logged in, redirect to dashboard
  if (authentication?.isLogin) {
    redirect("/");
  }

  // Desc: onFinish function for the form
  const onFinish = (values) => {
    const {
      agreement,
      confirm,
      email,
      gender,
      intro,
      name,
      password,
      phone,
      prefix,
    } = values;

    // empty and null check
    if (
      !agreement ||
      !confirm ||
      !email ||
      !gender ||
      !intro ||
      !name ||
      !password ||
      !phone ||
      !prefix
    )
      return;

    // password check
    if (password !== confirm) {
      setError("Password do not match");
      return;
    }

    // now data structure is ready to send to the server
    const data = {
      name,
      email,
      password,
      phone: `${prefix}${phone}`,
      gender,
      intro,
    };

    if (data) {
      console.log("Login successful");
      getSignUp(true, data);
      redirect("/", { replace: true });
    } else {
      console.log("Login failed");
    }
    console.log("Received values of form: ", values);
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="+88">+88</Option>
        <Option value="+86">+86</Option>
        <Option value="+87">+87</Option>
      </Select>
    </Form.Item>
  );

  return (
    <section
      className=""
      style={{
        backgroundImage: `url("${img?.src}")`,
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="min-h-screen min-w-full flex items-center justify-center overflow-y-scroll max-h-[550px]">
        <Form
          form={form}
          name="register"
          className="min-w-96 bg-white p-7 rounded-md shadow-md"
          onFinish={onFinish}
          style={{
            maxWidth: 600,
          }}
          scrollToFirstError
        >
          {/* Name */}
          <Form.Item
            name="name"
            label="Name"
            tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: "Please input your name!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          {/* email */}
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The new password that you entered do not match!")
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[
              {
                required: true,
                message: "Please input your phone number!",
              },
            ]}
          >
            <Input
              addonBefore={prefixSelector}
              style={{
                width: "100%",
              }}
            />
          </Form.Item>

          <Form.Item
            name="gender"
            label="Gender"
            rules={[
              {
                required: true,
                message: "Please select gender!",
              },
            ]}
          >
            <Select placeholder="select your gender">
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="intro"
            label="Intro"
            rules={[
              {
                required: true,
                message: "Please input Intro",
              },
            ]}
          >
            <Input.TextArea showCount maxLength={100} />
          </Form.Item>

          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error("Should accept agreement")),
              },
            ]}
            {...tailFormItemLayout}
          >
            <Checkbox>
              I have read the <a href="">agreement</a>
            </Checkbox>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};

export default SignUp;
