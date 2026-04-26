import Header from "./Header";
import { useNavigate } from "react-router-dom"
function  Fail(){

    const navigate = useNavigate()

    const tryagain=()=>{
        navigate("/")
    }
    return(
    <div className="min-h-screen bg-black 
    bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/9d6d/netflix-bg.jpg')] bg-cover bg-center bg-no-repeat">

        <Header/>
        <div className="min-h-screen bg-black flex justify-center items-center">

<div className="bg-zinc-900 p-10 rounded-2xl text-center shadow-2xl border border-red-500">

<h1 className="text-5xl font-black text-red-500 mb-4">
Login Failed
</h1>

<p className="text-white text-lg mb-6">
Invalid email or password
</p>

<button onClick={tryagain} className="bg-red-600 px-6 py-3 rounded-md text-white font-bold">
Try Again
</button>

</div>

</div>
        </div>
      )
}

export default Fail;