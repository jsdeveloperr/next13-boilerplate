import { parse } from 'next-useragent';

const userAgent = (uaString?: string) => {
  if (uaString) {
    const ua = parse(uaString);
    return ua;
  }
  const ua = parse(window?.navigator.userAgent);
  return ua;
};

export default userAgent;
