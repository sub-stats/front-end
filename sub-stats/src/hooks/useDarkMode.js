import useLocalStorage from "./useLocalStorage";

export const useDarkMode = () => {
  const [value, setValue] = useLocalStorage('darkMode', false)

//   const body = document.querySelector('body');

//   if (body) {
//       value ? body.classList.add('dark') : body.classList.remove('dark');
//   }

  return [value, setValue]
}