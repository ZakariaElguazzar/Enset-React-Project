import { useEffect, useState } from "react";
import { useAuth } from "../Services/Auth"; 
import { RegisterUser } from "../Services/RegisterUser";

function RegisterLogin() {
  const { login } = useAuth();
  const [loginData, setLoginData] = useState({ login: "", password: "", name: "" });
  const [action, setAction] = useState("Login");
  const [userRegistered, setUserRegistered] = useState(false); // Track registration status

  useEffect(() => {
    if (userRegistered) {
      setTimeout(() => {
        setAction("Login");  // ✅ Delayed state update
        setUserRegistered(false); // Reset flag
      }, 100);
    }
  }, [userRegistered]);

  // ✅ Ensure toggleAction is defined
  const toggleAction = (e) => {
    if (e) e.preventDefault();
    setAction((prev) => (prev === "Register" ? "Login" : "Register"));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (action === "Register") {
      const { name, login, password } = loginData;

      if (!name || !login || !password) {
        alert("Please fill in all fields");
        return;
      }

      try {
        const newUser = await RegisterUser({ name, login, password });

        if (newUser) {
          alert("User registered successfully!");
          setUserRegistered(true);
          setLoginData({ login: "", password: "", name: "" });
        }
      } catch (error) {
        alert("Registration failed. Try again.");
        console.error(error);
      }
    } else {
      login(loginData);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="flex flex-col items-center justify-center gap-5 bg-[#EBEBEB] p-6 rounded-2xl"
        method="post"
        onSubmit={handleSubmit}
      >
        <img
          src="src/assets/enset-seeklogo.png"
          alt="enset-logo"
          width={"200px"}
          height={"200px"}
        />
        <input
          className="p-3 border-1 border-b-amber-800 rounded-2xl"
          type="text"
          name="login"
          id="login"
          placeholder="Login"
          value={loginData.login}
          onChange={(e) =>
            setLoginData({ ...loginData, login: e.target.value })
          }
        />
        {action === "Register" && (
          <input
            className="p-3 border-1 border-b-amber-800 rounded-2xl"
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={loginData.name}
            onChange={(e) =>
              setLoginData({ ...loginData, name: e.target.value })
            }
          />
        )}
        <input
          className="p-3 border-1 border-b-amber-800 rounded-2xl"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={loginData.password}
          onChange={(e) =>
            setLoginData({ ...loginData, password: e.target.value })
          }
        />
        <button
          type="submit"
          className="bg-[#3f51b5] w-48 h-16 text-white rounded-3xl"
        >
          {action === "Register" ? "Sign Up" : "Sign In"}
        </button>
        <button
          type="button"
          className="relative text-blue-500 after:block after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
          onClick={toggleAction}  // ✅ Make sure it's used correctly here
        >
          {action === "Register"
            ? "Already registered? Click to sign in!"
            : "New user? Click to register!"}
        </button>
      </form>
    </div>
  );
}

export default RegisterLogin;
