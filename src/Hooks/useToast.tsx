import { toast } from "react-toastify";

const defaultOptions = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};
export const showToast = (
  message: string,
  type: "success" | "error" | "warning" | "info",
  options: any
) => {
  const mergedOptions = { ...defaultOptions, ...options };
  toast[type](message, mergedOptions);
};
