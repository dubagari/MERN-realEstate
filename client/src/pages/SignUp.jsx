import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  // const [formData, setFormData] = useState({});
  // const handleOnchange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.id]: e.target.value,
  //   });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const res = await fetch("/api/auth/signup", {
  //     method: "post",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(formData),
  //   });
  //   const data = await res.json();
  //   console.log(data);
  // };

  // console.log(formData);

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7 uppercase">
        sign up
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
        <input
          type="text"
          placeholder="username"
          id="userName"
          className="border p-3 rounded-lg"
          onChange={handleOnchange}
          required
        />

        <input
          type="email"
          placeholder="email"
          id="email"
          className="border p-3 rounded-lg"
          onChange={handleOnchange}
        />

        <input
          type="password"
          placeholder="password"
          id="password"
          className="border p-3 rounded-lg"
          onChange={handleOnchange}
        />

        <button className="bg-blue-950 text-white p-3 hover:opacity-95 rounded-lg disabled:opacity-60">
          sign up
        </button>
      </form>
      <div className="flex gap-2 px-4">
        <p>Have an account</p>
        <Link to={"/sign-in"}>
          <span className="text-blue-600">sign in</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
