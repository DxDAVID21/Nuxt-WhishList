export const useGlobalLoading = () => {
  return useState("globalLoading", () => false);
};