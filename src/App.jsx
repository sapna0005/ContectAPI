
// import Comp5 from "./pages/Comp5";
// import { useState,createContext } from "react";

// const myContext=createContext();
// const App=()=>{
//   const[user,setUser]=useState("Sapna");
//   return(
//     <>
//       <h1>Welcome!! {user}</h1>
      
//       <myContext.Provider value={{user}}>
//       <Comp5 >
//         we learn MERN stack
//       </Comp5>
//       </myContext.Provider>
//    </>
//   )
// }
// export default App;
// export {myContext};




// import Comp5 from "./pages/Comp5";

// const App=()=>{
//   return(
//     <>
//      <h1>welcome</h1>
//      <Comp5/>
//     </>
//   )
// }
// export default App;

import AuthApp from "./pages/AuthApp";
import UnauthApp from "./pages/UnauthApp";
import { useContext } from "react";
import { myContext } from "./pages/UserContext";

const App=()=>{
  const{user}=useContext(myContext);
  return(
    <>
     <h1>Login System</h1>
     {user.auth? <AuthApp/>:<UnauthApp/>}
     

    </>
  )
}
export default App;

