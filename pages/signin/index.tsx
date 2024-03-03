import AuthForm from "@components/user/AuthForm";
import google from "@public/images/google.svg";
import kakao from "@public/images/kakao.svg";
import logo from "@public/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import styles from "./Signin.module.css";

export default function SignIn() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Link href="/">
          <Image src={logo} alt="logo" width={212} height={38} />
        </Link>
        <div className={styles.link_container}>
          <p>회원이 아니신가요?</p>
          <Link href="/signup" legacyBehavior>
            <a className={styles.signup_link}>회원가입하기</a>
          </Link>
        </div>
        <AuthForm isSignUp={false} />
        <div className={styles.social_login}>
          <span>소셜 로그인</span>
          <div className={styles.icon_box}>
            <Link href="https://www.google.com/" title="Google로 로그인">
              <Image
                src={google}
                alt="Google 로고"
                width={42}
                height={42}
                priority
              />
            </Link>
            <Link href="https://www.kakaocorp.com/page/" title="Kakao로 로그인">
              <Image
                src={kakao}
                alt="Kakao 로고"
                width={42}
                height={42}
                priority
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
