import axios, { AxiosError } from "axios"; // Import AxiosError
import { fetchData } from "@apis/fetchData";
import eyeOffIcon from "@public/images/eye-off.svg";
import eyeOnIcon from "@public/images/eye-on.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./AuthForm.module.css";
import Input from "./Input";

export default function AuthForm({ isSignUp }: { isSignUp: boolean }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordCheck, setShowPasswordCheck] = useState(false);
  const {
    register,
    handleSubmit,
    setError, // Add setError function
    formState: { errors },
    watch,
  } = useForm<FormData>({ mode: "onChange" });
  const router = useRouter();

  const emailRegex = /\S+@\S+\.\S+/;
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  const onSubmit = async (data: FormData) => {
    const endpoint = isSignUp ? "auth/sign-up" : "auth/sign-in";
    try {
      const response = await fetchData(endpoint, "POST", data);

      // Check if response has accessToken
      if (response.accessToken) {
        localStorage.setItem("accessToken", response.accessToken);
        router.push("/folder");
      }
    } catch (error: any) {
      // Handle error
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.response?.status === 400) {
          setError("email", {
            type: "manual",
            message: isSignUp
              ? "이미 사용중인 아이디 입니다"
              : "아이디를 확인해주세요",
          });
          setError("password", {
            type: "manual",
            message: isSignUp ? "" : "비밀번호를 확인해주세요",
          });
        } else {
          console.error("Unexpected error:", axiosError.message);
        }
      } else {
        console.error("Unexpected error:", error.message);
      }
    }
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      router.push("/folder");
    }
  }, [router]);

  return (
    <form className={styles.auth_form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.input_container}>
        <label>이메일</label>
        <Input
          id="email"
          type="text"
          placeholder="email@example.com"
          borderError={!!errors.email}
          register={register("email", {
            required: "이메일을 입력해 주세요.",
            pattern: {
              value: emailRegex,
              message: "올바른 이메일 주소가 아닙니다.",
            },
          })}
          errors={errors.email}
        />
      </div>
      <div className={styles.input_container}>
        <label>비밀번호</label>
        <div className={styles.input_form_container}>
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="영문, 숫자를 조합해 8자 이상으로 입력해 주세요."
            borderError={!!errors.password}
            register={register("password", {
              required: "비밀번호를 입력해 주세요.",
              pattern: {
                value: passwordRegex,
                message: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
              },
            })}
            errors={errors.password}
          />
          <Image
            className={styles.eye_icon}
            src={showPassword ? eyeOffIcon : eyeOnIcon}
            alt="eye-icon"
            width={16}
            height={16}
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          />
        </div>
      </div>

      {isSignUp && (
        <div className={styles.input_container}>
          <label>비밀번호 확인</label>
          <div className={styles.input_form_container}>
            <Input
              id="passwordCheck"
              type={showPasswordCheck ? "text" : "password"}
              placeholder="영문, 숫자를 조합해 8자 이상으로 입력해 주세요."
              borderError={!!errors.passwordCheck}
              register={register("passwordCheck", {
                required: "비밀번호를 입력해 주세요.",
                pattern: {
                  value: passwordRegex,
                  message: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
                },
                validate: (value) =>
                  value === watch("password") ||
                  "비밀번호가 일치하지 않습니다.",
              })}
              errors={errors.passwordCheck}
            />
            <Image
              className={styles.eye_icon}
              src={showPasswordCheck ? eyeOffIcon : eyeOnIcon}
              alt="eye-icon"
              width={16}
              height={16}
              onClick={() => {
                setShowPasswordCheck(!showPasswordCheck);
              }}
            />
          </div>
        </div>
      )}
      <button className={styles.submit_button} type="submit">
        {isSignUp ? "회원가입" : "로그인"}
      </button>
    </form>
  );
}
