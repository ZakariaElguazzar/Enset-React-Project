import { useState } from "react"

function RegisterLogin(){
        const [action,setAction]=useState("Register")
        const toggleAction = (e) => {
            e.preventDefault();
            setAction((prev) => (prev === "Register" ? "Login" : "Register"));
          };
    return(
    <>
        <div className="flex justify-center items-center h-screen ">
            <form className="flex flex-col items-center justify-center gap-5 bg-[#EBEBEB] p-6 rounded-2xl" action="">
                <img src="src/assets/enset-seeklogo.png" alt="enset-logo" width={"200px"} height={"200px"} />
                <input className="p-3 border-1 border-b-amber-800 rounded-2xl" type="text" name="login" id="login" placeholder="Login" />
                <input className={`p-3 border-1 border-b-amber-800 rounded-2xl ${action==="Register" ? "":"hidden"}`} type="text" name="name" id="name" placeholder="Name" />
                <input className="p-3 border-1 border-b-amber-800 rounded-2xl" type="text" name="password" id="password" placeholder="Password" />
                <button type="submit" className="bg-[#3f51b5] w-48 h-16 text-white rounded-3xl">{action === "Register" ? "Sign Up" : "Sign in"}</button>
                <button className="relative text-blue-500 after:block after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full" onClick={toggleAction}>Already registered ? Click to sign in !!</button>
            </form>
        </div>
    </>
    )
}

export default RegisterLogin