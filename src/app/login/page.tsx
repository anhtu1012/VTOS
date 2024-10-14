"use client";
import { useState } from "react";
import "./index.scss";
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
import { Button, Form, Input } from "antd";
// import { toast } from "react-toastify";
import { useForm } from "antd/es/form/Form";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import { useDispatch } from "react-redux";
// import { login } from "../../redux/features/userSlice";
// import { LoginFormValues, RegisterFormValues } from "../../model/login";
// import { loginUser, register } from "../../services/api";

const Login = () => {
  const [rightPanelActive, setRightPanelActive] = useState(false);
  const [signInForm] = useForm();
  const [signUpForm] = useForm();

  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  const [loginError, setLoginError] = useState("");
  const handleSignUpClick = () => {
    signInForm.resetFields();
    setLoginError("");
    setRightPanelActive(true);
  };

  const handleSignInClick = () => {
    signUpForm.resetFields();
    setRightPanelActive(false);
  };

  const router = useRouter();
  const handleLogin = () => {
    router.push("/chon_phan_he", { scroll: false });
  };
  // const handleLogin = async (values: LoginFormValues) => {
  //   try {
  //     const response = await loginUser(values);
  //     const user = response.data.user;
  //     console.log(response.data);
  //     localStorage.setItem("token", response.data.token);
  //     dispatch(login(response.data.user));

  //     setLoginError("");
  //     if (user.roleId === "R1") {
  //       navigate("/dashboard/manage-user");
  //       toast.success("Successfully Admin");
  //     } else if (user.roleId === "R2") {
  //       navigate("/dashboard/manage-time");
  //       toast.success("Successfully Doctor");
  //     } else {
  //       toast.success("Successfully Patient");
  //     }
  //   } catch (error: any) {
  //     setLoginError(error.response?.data?.message);
  //     toast.error(error.response?.data?.message || "Error occurred");
  //   }
  // };

  // const handleRegister = async (values: RegisterFormValues) => {
  //   try {
  //     const data = {
  //       email: values.email,
  //       password: values.password,
  //       firstName: values.firstName,
  //       lastName: values.lastName,
  //     };
  //     const res = await register(data);
  //     toast.success(res.data.message);
  //     signUpForm.resetFields();
  //     setRightPanelActive(false);
  //   } catch (error: any) {
  //     toast.error(error.response.data.message);
  //   }
  // };
  return (
    <div className="body">
      <div
        className={`container ${rightPanelActive ? "right-panel-active" : ""}`}
        id="container"
      >
        <div className="form-container sign-up-container">
          <Form form={signUpForm} className="login_form">
            <h1>Create Account</h1>
            <div className="social-container">
              <Link href="#" className="social">
                <FaFacebookF />
              </Link>
              <Link href="#" className="social">
                <FaGooglePlusG />
              </Link>
              <Link href="#" className="social">
                <FaLinkedinIn />
              </Link>
            </div>
            <span style={{ paddingBottom: "5px" }}>
              or use your email for registration
            </span>
            <div className="inputName">
              <Form.Item
                name="firstName"
                rules={[{ required: true, message: "Vui lòng nhập Tên!" }]}
                validateStatus={loginError ? "error" : ""}
                normalize={(value) => value.trim()}
              >
                <Input
                  className="input"
                  style={{ width: "140px" }}
                  placeholder="First Name"
                />
              </Form.Item>
              <Form.Item
                name="lastName"
                rules={[{ required: true, message: "Vui lòng nhập Tên!" }]}
                validateStatus={loginError ? "error" : ""}
                normalize={(value) => value.trim()}
              >
                <Input
                  className="input"
                  style={{ width: "140px" }}
                  placeholder="Last Name"
                />
              </Form.Item>
            </div>
            <Form.Item
              name="email"
              rules={[
                { type: "email", message: "E-mail không hợp lệ" },
                { required: true, message: "Vui lòng nhập E-mail!" },
              ]}
              validateStatus={loginError ? "error" : ""}
              normalize={(value) => value.trim()}
            >
              <Input className="input" placeholder="Email" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Vui lòng nhập mật khẩu!" },
                {
                  pattern: new RegExp("^(?=.*[A-Za-z])(?=.*\\d).{8,}$"),
                  message:
                    "Mật khẩu phải dài ít nhất 8 ký tự, một chữ số và một chữ cái.",
                },
              ]}
              hasFeedback
            >
              <Input.Password className="inputpass" placeholder="Password" />
            </Form.Item>
            <Form.Item
              name="confirmPassword"
              dependencies={["password"]}
              rules={[
                { required: true, message: "Nhập lại mật khẩu!!!" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Mật khẩu không hợp lệ!"));
                  },
                }),
              ]}
            >
              <Input.Password
                className="inputpass"
                placeholder="Confirm Password"
              />
            </Form.Item>
            <Button
              type="primary"
              className="button"
              onClick={() => signUpForm.submit()}
            >
              Sign Up
            </Button>
          </Form>
        </div>
        <div className="form-container sign-in-container">
          <Form form={signInForm} className="login_form" onFinish={handleLogin}>
            <h1>Login Account</h1>
            <div className="social-container">
              <Link href="#" className="social">
                <FaFacebookF />
              </Link>
              <Link href="#" className="social">
                <FaGooglePlusG />
              </Link>
              <Link href="#" className="social">
                <FaLinkedinIn />
              </Link>
            </div>
            <span>or use your account</span>
            <Form.Item
              name="email"
              rules={[
                { type: "email", message: "E-mail không hợp lệ" },
                { required: true, message: "Vui lòng nhập E-mail!" },
              ]}
              validateStatus={loginError ? "error" : ""}
              normalize={(value) => value.trim()} // Trim spaces from email input
            >
              <Input className="input" placeholder="Email" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
              validateStatus={loginError ? "error" : ""}
              help={loginError}
            >
              <Input.Password className="inputpass" placeholder="Password" />
            </Form.Item>
            <Link style={{ margin: "0 0 8px 0" }} href="#">
              Forgot your password?
            </Link>
            <Button
              type="primary"
              className="button"
              onClick={() => {
                signInForm.submit();
              }}
            >
              Sign In
            </Button>
          </Form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost" id="signIn" onClick={handleSignInClick}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start your journey with us</p>
              <button className="ghost" id="signUp" onClick={handleSignUpClick}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
