import postData from "@apis/postData";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  INVALID_EMAIL,
  INVALID_PASSWORD,
  REQUIRED_EMAIL,
  REQUIRED_PASSWORD,
  WRONG_EMAIL,
  WRONG_PASSWORD,
  WRONG_PASSWORD_CHECK,
  emailRegex,
  passwordRegex,
} from "src/constants/errorMessages";
import styles from "./AuthForm.module.css";
import Input from "./Input";
import {
  AuthResponseType,
  EmailCheckResponseType,
  EmailCheckType,
  FormDataType,
} from "./types/authTypes";

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
    AuthResponseType,
    AxiosError,
    FormDataType
  >({
    mutationFn: (requestData) =>
      postData<AuthResponseType>({
        endpoint,
        requestData,
      }),
    onSuccess: (data) => {
      const { accessToken } = data;
      if (accessToken) {
        localStorage.setItem("accessToken", accessToken);
        router.push("/folder");
      }
    },
    onError: () => {
      setError("email", {
        type: "manual",
        message: WRONG_EMAIL,
      });
      setError("password", {
        type: "manual",
        message: WRONG_PASSWORD,
      });
    },
  });

  const checkEmailMutation = useMutation<
    EmailCheckResponseType,
    AxiosError,
    EmailCheckType
  >({
    mutationFn: (requestData) => {
      return postData({
        endpoint: "/users/check-email",
        requestData: requestData,
      });
    },
  });

  const handleFormSubmit = handleSubmit((data) => {
    const requestData = { email: data.email, password: data.password };
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
                required: REQUIRED_EMAIL,
                pattern: {
                  value: emailRegex,
                  message: INVALID_EMAIL,
                },
                onBlur: checkValidEmail,
              })
            : register("email", { required: REQUIRED_EMAIL })
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
      {isSignUp && (
        <Input
          label="비밀번호 확인"
          id="passwordCheck"
          type={showPasswordCheck ? "text" : "password"}
          placeholder="비밀번호 재입력"
          borderError={!!errors.passwordCheck}
          register={register("passwordCheck", {
            required: REQUIRED_PASSWORD,
            pattern: {
              value: passwordRegex,
              message: INVALID_PASSWORD,
            },
            onChange: (value) =>
              value === watch("password") || WRONG_PASSWORD_CHECK,
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
