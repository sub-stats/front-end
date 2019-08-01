import useLocalStorage from "./useLocalStorage";

export const useDarkMode = () => {
  const [value, setValue] = useLocalStorage('darkMode', false)
  return [value, setValue]
}