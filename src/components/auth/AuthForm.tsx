import postData from "@apis/postData";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as errorMessage from "src/constants/errorMessages";
import styles from "./AuthForm.module.css";
import Input from "./Input";
import * as AuthTypes from "./types/authTypes";
import { COOKIE_MAX_AGE } from "src/constants/cookie";

interface AuthFormProps {
  isSignUp: boolean;
}

export default function AuthForm({ isSignUp }: AuthFormProps) {
  const router = useRouter();
  const endpoint = isSignUp ? `/auth/sign-up` : `/auth/sign-in`;
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordCheck, setShowPasswordCheck] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    getValues,
    watch,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
      passwordCheck: "",
    },
  });

  const formDataMutation = useMutation<
    AuthTypes.AuthResponseType,
    AxiosError,
    AuthTypes.FormDataType
  >({
    mutationFn: (requestData) =>
      postData<AuthTypes.AuthResponseType>({
        endpoint,
        requestData,
      }),
    onSuccess: (data) => {
      const { accessToken } = data;
      if (accessToken) {
        setCookie("accessToken", accessToken, {
          maxAge: COOKIE_MAX_AGE,
          path: "/",
        });
        router.push("/folder");
      }
    },
    onError: () => {
      setError("email", {
        type: "manual",
        message: errorMessage.WRONG_EMAIL,
      });
      setError("password", {
        type: "manual",
        message: errorMessage.WRONG_PASSWORD,
      });
    },
  });

  const checkEmailMutation = useMutation<
    AuthTypes.EmailCheckResponseType,
    AxiosError,
    AuthTypes.EmailCheckType
  >({
    mutationFn: (requestData) =>
      postData({ endpoint: "/users/check-email", requestData }),
  });

  const handleFormSubmit = handleSubmit(({ email, password }) => {
    const requestData = { email, password };
    formDataMutation.mutate(requestData);
  });

  const checkValidEmail = async () => {
    const email = getValues("email");
    if (email) {
      try {
        await checkEmailMutation.mutateAsync({ email });
      } catch (error: any) {
        setError("email", {
          type: "manual",
          message: error?.response?.data.message,
        });
      }
    }
  };

  return (
    <form className={styles.auth_form} onSubmit={handleFormSubmit}>
      <Input
        label="이메일"
        id="email"
        type="text"
        placeholder="email@example.com"
        borderError={!!errors.email}
        register={
          isSignUp
            ? register("email", {
                required: errorMessage.REQUIRED_EMAIL,
                pattern: {
                  value: errorMessage.emailRegex,
                  message: errorMessage.INVALID_EMAIL,
                },
                onBlur: checkValidEmail,
              })
            : register("email", { required: errorMessage.REQUIRED_EMAIL })
        }
        errors={errors.email}
      />
      <Input
        label="비밀번호"
        id="password"
        type={showPassword ? "text" : "password"}
        placeholder="비밀번호 입력"
        borderError={!!errors.password}
        register={register("password", {
          required: errorMessage.REQUIRED_PASSWORD,
          pattern: {
            value: errorMessage.passwordRegex,
            message: errorMessage.INVALID_PASSWORD,
          },
        })}
        errors={errors.password}
        isShow={showPassword}
        handleShowPassword={(isShow) => {
          setShowPassword(isShow);
        }}
      />
      {isSignUp && (
        <Input
          label="비밀번호 확인"
          id="passwordCheck"
          type={showPasswordCheck ? "text" : "password"}
          placeholder="비밀번호 재입력"
          borderError={!!errors.passwordCheck}
          register={register("passwordCheck", {
            required: errorMessage.REQUIRED_PASSWORD,
            pattern: {
              value: errorMessage.passwordRegex,
              message: errorMessage.INVALID_PASSWORD,
            },
            onChange: (value) =>
              value === watch("password") || errorMessage.WRONG_PASSWORD_CHECK,
          })}
          errors={errors.passwordCheck}
          isShow={showPasswordCheck}
          handleShowPassword={(isShow) => {
            setShowPasswordCheck(isShow);
          }}
        />
      )}
      <button className={styles.submit_button} type="submit">
        {isSignUp ? "회원가입" : "로그인"}
      </button>
    </form>
  );
}
