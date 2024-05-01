"use client";

import { useZustandStore } from "@/Store/Store";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import Link from "next/link";
import img from "../../Assets/background/authentication-bg.jpg";
import { redirect } from "next/navigation";

const Login = () => {
  const { authentication, getSignUp } = useZustandStore();

  // Desc: if user is already logged in, redirect to dashboard
  if (authentication?.isLogin) {
    redirect("/");
  }

  console.log("authentication ", authentication);
  // Desc: login form component for the website
  const onFinish = (values) => {
    const { username, password, remember } = values;

    console.log("Received values of form: ", values);
    if (!username && !password && !remember) return;

    const demoUser = "admin";
    const demoPassword = "123456";

    if (username === demoUser && password === demoPassword) {
      console.log("Login successful");
      getSignUp(true, { username, password });
      redirect("/", { replace: true });
    } else {
      console.log("Login failed");
    }
  };

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
      <div className="min-h-screen min-w-full flex items-center justify-center">
        <Form
          name="normal_login"
          className="login-form min-w-96 bg-white p-7 rounded-md shadow-md"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          {/* email */}
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>

          {/* password */}
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <div className="flex items-center justify-between mb-4">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Link className="login-form-forgot" href="#">
              Forgot password
            </Link>
          </div>

          <div className="flex items-center justify-between gap-3">
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            <span>Or</span> <Link href="signup">Register now!</Link>
          </div>
        </Form>
      </div>
    </section>
  );
};
export default Login;
