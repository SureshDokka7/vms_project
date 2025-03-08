import { useMutation } from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";
import { axiosInstance } from "../axiosInstance";

interface useVMSMutationProps {
  endPointUrl: string;
  onSuccess: (data: any) => void;
  key: string;
}

const useVMSMutation = ({
  endPointUrl,
  onSuccess,
  key,
}: useVMSMutationProps) => {
  const postDetails = async ({
    postParams,
    additionalParams,
    config,
  }: {
    postParams: any;
    additionalParams?: string;
    config?: AxiosRequestConfig<any>;
  }) => {
    const url = additionalParams
      ? `${endPointUrl}${additionalParams}`
      : endPointUrl;
    const { data } = await axiosInstance.post(url, postParams, config);
    return data;
  };

  return useMutation({
    mutationFn: (params: {
      postParams: any;
      additionalParams?: string;
      config?: AxiosRequestConfig<any>;
    }) => postDetails(params),
    onSuccess: onSuccess,
    mutationKey: [key],
    onError: (error) => console.log(error),
  });
};
export default useVMSMutation;
