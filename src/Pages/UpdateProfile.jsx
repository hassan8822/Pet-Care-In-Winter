
import { updateProfile } from "firebase/auth";
import { use, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const UpdateProfile = () => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!name || !photo) {
      toast.error("Name and Photo URL required!");
      return;
    }

    try {
      await updateProfile(user, {
        displayName: name,
        photoURL: photo,
      });

      toast.success("Profile updated successfully!");
      navigate("/myprofile");
      
    } catch (error) {
      console.log(error);
      toast.error("Update failed!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleUpdate} className="p-6 shadow-xl w-80">

        <h2 className="text-lg font-bold mb-4">Update Profile</h2>

        <label className="label">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input input-bordered w-full mb-3"
        />

        <label className="label">Photo URL</label>
        <input
          type="text"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          className="input input-bordered w-full mb-3"
        />

        <button type="submit" className="btn btn-primary w-full">
          Save
        </button>

      </form>
    </div>
  );
};

export default UpdateProfile;