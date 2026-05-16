import { Routes, Route } from "react-router-dom";
import Openpage from "./components/Openpage";
import Userlogin from "./components/Userlogin";
import SignUpsuccess from "./components/SignUpsuccess";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Openpage />} />
      <Route path="/user" element={<Userlogin />} />
      <Route path ="/signupsuccess" element={<SignUpsuccess/>} />
    </Routes>
  );
}
export default App;