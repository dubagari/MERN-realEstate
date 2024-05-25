import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { OAuth } from "../Component/OAuth";
import {
  signInStart,
  signinFailure,
  signinSuccess,
} from "../redux/user/userSlice";

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const { error, loading } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleOnchange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signinFailure(data.message));
        return;
      }
      dispatch(signinSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signinFailure(error.message));
    }
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7 uppercase">
        sign in
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
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

        <button
          disabled={loading}
          className="bg-blue-950 text-white uppercase p-3 hover:opacity-95 rounded-lg disabled:opacity-60"
        >
          {loading ? "Loading..." : "sign in"}
        </button>
        <OAuth />
      </form>
      <div className="flex gap-2 px-4">
        <p>Have an account</p>
        <Link to={"/sign-up"}>
          <span className="text-blue-600">sign up</span>
        </Link>
      </div>
      {error && <p className="text-red-600 m-4">{error}</p>}
    </div>
  );
};

export default SignIn;
