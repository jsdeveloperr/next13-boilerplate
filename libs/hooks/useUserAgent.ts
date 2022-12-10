import { useAppSelector } from '@/store/hooks';

import { selectUserAgent } from '../store/userAgent/userAgent.slice';

export const useUserAgent = () => {
  return {
    userAgent: useAppSelector(selectUserAgent),
  };
};
