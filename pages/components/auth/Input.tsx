import eyeOffIcon from "@public/images/eye-off.svg";
import eyeOnIcon from "@public/images/eye-on.svg";
import Image from "next/image";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import styles from "./Input.module.css";

type Props = {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  borderError?: boolean;
  register: UseFormRegisterReturn;
  errors?: FieldError | undefined;
  isShow?: boolean;
  handleShowPassword?: (isShow: boolean) => void;
};

export default function Input({
  label,
  id,
  type,
  placeholder,
  borderError,
  register,
  errors,
  isShow,
  handleShowPassword,
}: Props) {
  return (
    <div className={styles.input_container}>
      <label>{label}</label>
      <div className={styles.input_form_container}>
        <input
          className={`${styles.input_form} ${
            borderError ? styles.invalid_border : ""
          }`}
          id={id}
          type={type}
          placeholder={placeholder}
          {...register}
        />
        {errors && (
          <span className={styles.error_message}>{errors.message}</span>
        )}
        {handleShowPassword && (
          <Image
            className={styles.eye_icon}
            src={isShow ? eyeOffIcon : eyeOnIcon}
            alt="eye-icon"
            width={16}
            height={16}
            onClick={() => handleShowPassword(!isShow)}
          />
        )}
      </div>
    </div>
  );
}
