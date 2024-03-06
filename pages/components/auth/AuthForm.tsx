import { fetchData } from "@apis/fetchData";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  INVALID_EMAIL,
  INVALID_PASSWORD,
  REQUIRED_EMAIL,
  REQUIRED_PASSWORD,
  USED_EMAIL,
  WRONG_EMAIL,
  WRONG_PASSWORD,
  WRONG_PASSWORD_CHECK,
} from "src/constants/errorMessages";
import styles from "./AuthForm.module.css";
import Input from "./Input";

export default function AuthForm({ isSignUp }: { isSignUp: boolean }) {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordCheck, setShowPasswordCheck] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    watch,
  } = useForm<FormData>({ mode: "onChange" });

  const emailRegex = /\S+@\S+\.\S+/;
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  const onSubmit = async (data: FormData) => {
    const endpoint = isSignUp ? "auth/sign-up" : "auth/sign-in";
    try {
      const response = await fetchData(endpoint, "POST", data);

      if (response.accessToken) {
        localStorage.setItem("accessToken", response.accessToken);
        router.replace("/folder");
        router.refresh();
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 400) {
          setError("email", {
            type: "manual",
            message: isSignUp ? USED_EMAIL : WRONG_EMAIL,
          });
          setError("password", {
            type: "manual",
            message: isSignUp ? "" : WRONG_PASSWORD,
          });
        } else {
          console.error("Unexpected error:", error.message);
        }
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
      <Input
        label="이메일"
        id="email"
        type="text"
        placeholder="email@example.com"
        borderError={!!errors.email}
        register={register("email", {
          required: REQUIRED_EMAIL,
          pattern: {
            value: emailRegex,
            message: INVALID_EMAIL,
          },
        })}
        errors={errors.email}
      />
      <div className={styles.input_container}>
        <Input
          label="비밀번호"
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder={INVALID_PASSWORD}
          borderError={!!errors.password}
          register={register("password", {
            required: REQUIRED_PASSWORD,
            pattern: {
              value: passwordRegex,
              message: INVALID_PASSWORD,
            },
          })}
          errors={errors.password}
          isShow={showPassword}
          handleShowPassword={(isShow) => {
            setShowPassword(isShow);
          }}
        />
      </div>

      {isSignUp && (
        <div className={styles.input_container}>
          <Input
            label="비밀번호 확인"
            id="passwordCheck"
            type={showPasswordCheck ? "text" : "password"}
            placeholder={INVALID_PASSWORD}
            borderError={!!errors.passwordCheck}
            register={register("passwordCheck", {
              required: REQUIRED_PASSWORD,
              pattern: {
                value: passwordRegex,
                message: INVALID_PASSWORD,
              },
              validate: (value) =>
                value === watch("password") || WRONG_PASSWORD_CHECK,
            })}
            errors={errors.passwordCheck}
            isShow={showPasswordCheck}
            handleShowPassword={(isShow) => {
              setShowPasswordCheck(isShow);
            }}
          />
        </div>
      )}
      <button className={styles.submit_button} type="submit">
        {isSignUp ? "회원가입" : "로그인"}
      </button>
    </form>
  );
}
