import { useCallback } from "react";

export const useLogout = () => {
  return useCallback(() => {
    localStorage.removeItem("token");
  }, []);
};
