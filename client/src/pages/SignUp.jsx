import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { OAuth } from "../Component/OAuth";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const handleOnchange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);

      setError(null);
      navigate("/sign-in");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

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

        <button
          disabled={loading}
          className="bg-blue-950 uppercase text-white p-3 hover:opacity-95 rounded-lg disabled:opacity-60"
        >
          {loading ? "Loading..." : "sign up"}
        </button>
        <OAuth />
      </form>
      <div className="flex gap-2 px-4">
        <p>Have an account</p>
        <Link to={"/sign-in"}>
          <span className="text-blue-600">sign in</span>
        </Link>
      </div>
      {error && <p className="text-red-600 m-4">{error}</p>}
    </div>
  );
};

export default SignUp;
