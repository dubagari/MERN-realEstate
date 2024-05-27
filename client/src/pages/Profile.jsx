import { useSelector } from "react-redux";
import { useRef, useState, useEffect } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";

const Profile = () => {
  const fileRef = useRef();
  const { currentUser } = useSelector((state) => state.user);
  const [file, setFile] = useState(undefined);
  const [filePercentage, setFilePercentage] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (file) {
      handleFileUpLoad(file);
    }
  }, [file]);

  const handleFileUpLoad = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prograss =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePercentage(Math.round(prograss));
      },
      (error) => {
        setFileUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
          setFormData({ ...formData, avatar: downloadUrl });
        });
      }
    );
  };
  return (
    <div className="max-w-lg m-auto ">
      <h1 className="font-semibold text-3xl text-center mt-10 uppercase">
        profile
      </h1>

      <form className="flex flex-col gap-4 p-4 ">
        <input
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
          ref={fileRef}
          hidden
          accept="image/*"
        />
        <img
          onClick={() => fileRef.current.click()}
          className="self-center rounded-full mt-3 outline-none cursor-pointer my-3 h-20 w-20"
          src={formData.avatar || currentUser.avatar}
          alt=""
        />
        <p className="text-center">
          {fileUploadError ? (
            <span className="text-red-700">
              Error Image Upload (image must be less than 2mb)
            </span>
          ) : filePercentage > 0 && filePercentage < 100 ? (
            <span className="text-slate-700">{`Uploading ${filePercentage} %`}</span>
          ) : filePercentage === 100 ? (
            <span className="text-green-600">successefully uploaded</span>
          ) : (
            ""
          )}
        </p>

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
