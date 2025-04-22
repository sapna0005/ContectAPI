
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



// import AuthApp from "./pages/AuthApp";
// import UnauthApp from "./pages/UnauthApp";
// import { useContext } from "react";
// import { myContext } from "./pages/UserContext";

// const App=()=>{
//   const{user}=useContext(myContext);
//   return(
//     <>
//      <h1>Login System</h1>
//      {user.auth? <AuthApp/>:<UnauthApp/>}
     

//     </>
//   )
// }
// export default App;







//................useRef.................................//

// import { useRef } from "react";

// const App=()=>{
//   const myRef=useRef();

//   const myDisplay=()=>{
//     myRef.current.style.border="3px solid red";
//     myRef.current.style.width="200px";
//     myRef.current.style.padding="30px";
//     myRef.current.style.borderRadius="30px"
//     myRef.current.style.backgroundColor="yellow"
//   }

//   return(
//     <>
//     <h1>Welcome</h1>
//     <button onClick={myDisplay}>Click here</button>
//     <div ref={myRef}>We are Cybrom Students</div>
//     </>
//   )
// }
// export default App;

// import { useRef } from "react";


// const App=()=>{
//   const myRef=useRef("");

//   const display=()=>{
//     myRef.current.innerHTML="Welcome to react";
//   }
//   return(
//     <>
//      <h1 ref={myRef}>Welcome to Cybrom</h1>
//      <button onClick={display}>Click Here</button>
//     </>
//   )
// }
// export default App;


// import { useRef,useState } from "react";
// import { useEffect } from "react";

// const App=()=>{
//   cont[data,setData]=useState("");
//   const myRef=useRef(0);

//   useEffect(()=>{
//     myRef.current+=1;
//   })
  
//   return(
//     <>
//      Enter Name: <input type="text" value={data} onChange={(e)=>{setData(e.target.value)}}/>
//      <h1>Render Count:{myRef.current}</h1>
//     </>
//   )
// }
// export default App;



// import { useRef } from "react";

// const App=()=>{
//   const myRef=useRef(null);

//   const display=()=>{
//     myRef.current.style.border="3px";
//     myRef.current.style.width="200px";
//     myRef.current.style.padding="30px";
//     myRef.current.style.borderRadius="10px"
//     myRef.current.style.backgroundColor="yellow"
//   }

//   const mydisplay=()=>{
//     myRef.current.style.border="3px";
//     myRef.current.style.width="200px";
//     myRef.current.style.padding="30px";
//     myRef.current.style.borderRadius="10px"
//     myRef.current.innerHTML="Welcome to Cybrom";
//     myRef.current.innerHTML.style.fontSize="12px"
//   }

//   const myydisplay=()=>{
//     myRef.current.style.border="2px solid red";
    
//   }
//   return(
//     <>
//     <h1 ref={myRef}></h1>
//      <button onClick={display}>First</button>
//      <button onClick={mydisplay}>Second</button>
//      <button onClick={myydisplay}>Third</button>
//     </>
//   )
// }
// export default App;

import { useRef } from "react";

const App=()=>{
  const data=useRef();

  const btn1=()=>{
    data.current.style.backgroundColor="#7AE2CF";
    data.current.style.borderRadius="10px"

  }
  const btn2=()=>{
    data.current.innerHTML="We learn React";
    data.current.style.color="#4F1C51"
    data.current.style.fontSize="25px"
    data.current.style.borderRadius="10px"
  }
  const btn3=()=>{
    data.current.style.backgroundColor="#CB9DF0";
    data.current.style.borderRadius="50%";
    data.current.style.border="5px solid #F0C1E1";
    data.current.innerHTML="";
  }
  
  return(
    <>
     <div ref={data} style={{height:"200px", width:"200px", border:"2px solid black", margin:"20px",display:"flex", justifyContent:"center", alignItems:"center"}}></div>
     <br /><br />
     
     <button onClick={btn1}>Button1</button>
     <button onClick={btn2}>Button2</button>
     <button onClick={btn3}>Button3</button>
     
    </>
  )
}
export default App;




