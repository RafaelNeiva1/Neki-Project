// import { createContext, useEffect, useState } from "react";

// export const AuthContext = createContext({});

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState();

//   useEffect(() => {
//     const userToken = localStorage.getItem("user_token");
//     const usersStorage = localStorage.getItem("users_bd");

//     if (userToken && usersStorage) {
//       const hasUser = JSON.parse(usersStorage)?.filter(
//         (user) => user.login === JSON.parse(userToken).login
//       );

//       if (hasUser) setUser(hasUser[0]);
//     }
//   }, []);

//   const signin = (login, password) => {
//     const usersStorage = JSON.parse(localStorage.getItem("users_bd"));

//     const hasUser = usersStorage?.filter((user) => user.login === login);

//     if (hasUser?.length) {
//       if (hasUser[0].login=== login && hasUser[0].password === password) {
//         const token = Math.random().toString(36).substring(2);
//         localStorage.setItem("user_token", JSON.stringify({ login, token }));
//         setUser({ login, password });
//         return;
//       } else {
//         return "E-mail ou senha incorretos";
//       }
//     } else {
//       return "Usuário não cadastrado";
//     }
//   };


//   return (
//     <AuthContext.Provider
//       value={{ user, signed: !!user, signin }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };