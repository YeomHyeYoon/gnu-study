import './App.css';
import Axios from "axios";
import React,{useState , useEffect} from "react";

function App() {
 const [user,setUser] = useState("");

 useEffect(()=>{
  Axios.get("/api/users")
  .then(function(response){
    if(response.data){
      setUser(response.data);
    }else{
      alert("failed to");
    }
  }); 
 },[]);

 return(
   <div className="App">
     <header className="App-header">
      <h1>{user.id}</h1>
      <h1>{user.username}</h1>
      <h1>{user.password}</h1>
      <h1>{user.email}</h1>
     </header>
   </div>
 );
}

export default App;
