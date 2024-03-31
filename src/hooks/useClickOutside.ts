import { useEffect } from "react";

export default function useClickOutside(
  reference: React.RefObject<HTMLDivElement>,
  handleState: (status: boolean) => void
) {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (reference) {
        if (
          reference.current &&
          !reference.current.contains(e.target as Node)
        ) {
          handleState(false);
        }
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });
}
