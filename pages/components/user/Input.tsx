import styles from "./Input.module.css";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import {
  FieldError,
  RegisterOptions,
  UseFormRegisterReturn,
} from "react-hook-form";

type Props = {
  id: string;
  type: string;
  placeholder: string;
  className?: string;
  register: UseFormRegisterReturn;
  errors?: FieldError | undefined;
};

export default function Input({
  id,
  type,
  placeholder,
  className,
  register,
  errors,
  ...rest
}: Props) {
  return (
    <>
      <input
        className={`${className} ${styles.input_form}`}
        id={id}
        type={type}
        placeholder={placeholder}
        {...register}
        {...rest}
      />
      {errors && <span className={styles.error_message}>{errors.message}</span>}
    </>
  );
}
