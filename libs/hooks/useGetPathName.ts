export const useGetPathName = (path: string): any => {
  const { pathname } = new URL(path);

  return { pathname };
};

export default useGetPathName;
