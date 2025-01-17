import axios from 'axios';

export const baseQldAnimalApiUrl = process.env.REACT_APP_API_ROOT;

export const api = async (
  url: string,
  config?: any,
  preCallRequest?: any,
  onRequestSuccess?: any,
  onRequestFailure?: any,
) => {
  try {
    if (preCallRequest) {
      preCallRequest();
    }

    const res = await axios({
      url,
      ...config,
    });

    const { data } = res;

    const result = {
      isSuccess: true,
      data,
    };

    if (onRequestSuccess) {
      return onRequestSuccess(result);
    }

    return result;
  } catch (error) {
    const { message } = error;
    const result = {
      isSuccess: false,
      message,
    };

    if (onRequestFailure) {
      return onRequestFailure(result);
    }
    return result;
  }
};
