// export const getToken = () => {
//   const tokenCookie = document.cookie
//     .split("; ")
//     .find((row) => row.startsWith("jwt="))
//     ?.split("=")[1];
//   return tokenCookie || null;
// };

export const getToken = () => {
  const token = localStorage.getItem("jwt");
  return token;
};
