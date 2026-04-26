import { useState } from "react";
import axios from "axios";
import Header from "./Header";
import StyleLogin from "./Stylelogin";
import { useNavigate } from "react-router-dom"
import Detail from "./Detail";
function Login() {
    const [email, setemail] = useState("")
    const [pass, setpass] = useState("")
    const navigate = useNavigate()

    const handleemail = (evt) => {
        setemail(evt.target.value)
    }

    const handlepass = (evt) => {
        setpass(evt.target.value)
    }

    const check = async () => {

        if (!email || !pass) {
            alert("Please fill all fields");
            return;
        }
        try {
            const res = await axios.post(
                "http://localhost:5000/login",
                { email, password: pass }
            );
            if (res.data) {
                navigate("/success");
            } 
            else {
                navigate("/fail");
            }

        } catch (err) {
            console.log(err);
        }

    }


    return (<div className="min-h-screen bg-black 
    bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/9d6d/netflix-bg.jpg')] bg-cover bg-center bg-no-repeat">
        <Header />
        <StyleLogin />
        <div className="flex flex-col items-center gap-4 m-10">

            <input onChange={handleemail} type="email" placeholder="Email Address" className="bg-black/70 border border-gray-500 text-white px-5 py-4 w-80 rounded-md"
            />

            <input onChange={handlepass} type="password" placeholder="Password" className="bg-black/70 border border-gray-500 text-white px-5 py-4 w-80 rounded-md"
            />

            <button onClick={check}
                className="bg-red-600 text-white px-6 py-4 w-80 rounded-md font-bold"
            >Get Started</button>

        </div>
        <Detail />
    </div>)
}
export default Login;