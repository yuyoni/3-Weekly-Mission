import { useEffect } from "react";

export default function useModalScrollLock(isModalShow: boolean) {
  useEffect(() => {
    if (isModalShow) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalShow]);
}
