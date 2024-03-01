import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import fetchData from "../../_apis/api";
import eyeOffIcon from "../../../public/assets/eye-off.svg";
import eyeOnIcon from "../../../public/assets/eye-on.svg";
import Input from "./Input";

export default function AuthForm({ isSignUp }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordCheck, setShowPasswordCheck] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ mode: "onChange" });

  const router = useRouter();

  // 유효성 검사
  const emailRegex = /\S+@\S+\.\S+/;
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  const onSubmit = async (data) => {
    const endpoint = isSignUp ? "sign-up" : "sign-in";

    try {
      const response = await fetchData(endpoint, "POST", data);
      const accessToken = response.data?.accessToken;

      if (accessToken) {
        localStorage.setItem("accessToken", accessToken);
        router.push("/folder");
      }
    } catch (error) {
      console.error(`Error ${isSignUp ? "signup" : "signin"}:`, error);
    }
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      router.push("/folder");
    }
  }, [router]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <InputContainer>
          <InputLabel>이메일</InputLabel>
          <Input
            id="email"
            type="text"
            placeholder="email@example.com"
            className={errors.email ? "invalid-border" : ""}
            register={register("email", {
              required: "이메일을 입력해 주세요.",
              pattern: {
                value: emailRegex,
                message: "올바른 이메일 주소가 아닙니다.",
              },
            })}
            errors={errors.email}
          />
        </InputContainer>
        <InputContainer>
          <InputLabel>비밀번호</InputLabel>
          <InputFormContainer>
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="영문, 숫자를 조합해 8자 이상으로 입력해 주세요."
              className={errors.password ? "invalid-border" : ""}
              register={register("password", {
                required: "비밀번호를 입력해 주세요.",
                pattern: {
                  value: passwordRegex,
                  message: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
                },
              })}
              errors={errors.password}
            />
            <EyeIcon
              src={showPassword ? eyeOffIcon : eyeOnIcon}
              alt="eye-icon"
              width={16}
              height={16}
              style={{ cursor: "pointer" }}
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            />
          </InputFormContainer>
        </InputContainer>

        {isSignUp && (
          <InputContainer>
            <InputLabel>비밀번호 확인</InputLabel>
            <InputFormContainer>
              <Input
                id="passwordCheck"
                type={showPasswordCheck ? "text" : "password"}
                placeholder="영문, 숫자를 조합해 8자 이상으로 입력해 주세요."
                className={errors.passwordCheck ? "invalid-border" : ""}
                register={register("passwordCheck", {
                  required: "비밀번호를 입력해 주세요.",
                  pattern: {
                    value: passwordRegex,
                    message:
                      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
                  },
                  validate: (value) =>
                    value === watch("password") ||
                    "비밀번호가 일치하지 않습니다.",
                })}
                errors={errors.passwordCheck}
              />
              <EyeIcon
                src={showPasswordCheck ? eyeOffIcon : eyeOnIcon}
                alt="eye-icon"
                width={16}
                height={16}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setShowPasswordCheck(!showPasswordCheck);
                }}
              />
            </InputFormContainer>
          </InputContainer>
        )}

        <Button type="submit">{isSignUp ? "회원가입" : "로그인"}</Button>
      </Container>
    </form>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const InputFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 12px;
`;

const InputLabel = styled.label``;

const Button = styled.button`
  display: flex;
  width: 400px;
  padding: 16px 20px;
  margin-top: 6px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: white;
  border-radius: 8px;
  background: var(
    --gra-purpleblue-to-skyblue,
    linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)
  );
`;

const EyeIcon = styled(Image)`
  position: absolute;
  right: 15px;
  top: 18px;
`;
