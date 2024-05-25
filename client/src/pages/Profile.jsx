import { useSelector } from "react-redux";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="max-w-lg m-auto ">
      <h1 className="font-semibold text-3xl text-center mt-10 uppercase">
        profile
      </h1>

      <form className="flex flex-col gap-4 p-4 ">
        <img
          className="self-center rounded-full mt-3 outline-none cursor-pointer my-3"
          src={currentUser.avatar}
          alt=""
        />
        <input
          type="text"
          placeholder="username"
          id="userName"
          className="p-3 rounded-lg outline-none"
        />
        <input
          type="email"
          placeholder="email"
          id="email"
          className="p-3 rounded-lg outline-none"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className="p-3 rounded-lg"
        />
        <button className="bg-blue-950 uppercase p-3 rounded-lg text-white ">
          update
        </button>
      </form>
      <div className="flex justify-between px-5">
        <span className="text-red-700 cursor-pointer capitalize font-semibold text-1xl">
          delete accoutn
        </span>
        <span className="text-red-700 cursor-pointer capitalize font-semibold text-1xl">
          logout
        </span>
      </div>
    </div>
  );
};

export default Profile;
