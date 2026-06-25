import { AddProfile, GetProfile, UpdateProfile } from "../../supaApi/data";
import { useState, useEffect } from "react";
import Loading from "../Loading";
function ProfileForm({ user }) {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [profile, setProfile] = useState([]);
  const [occupation, setOccupation] = useState("");
  const [issubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const userId = user?.id;
    await AddProfile(
      userId,
      name,
      phone,
      city,
      gender,
      dob,
      occupation,
      setIsSubmitted,
    );
  };
  const handleUpdate = async (event) => {
    event.preventDefault();
    const userId = user?.id;
    await UpdateProfile(userId, name, phone, city, gender, dob, occupation, setIsSubmitted);
  };
  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      const userId = user?.id;
      if (userId) {
        const profile = await GetProfile(userId);

        if (profile && profile.length > 0) {
          const { Full_Name, Phone, City, Gender, Dob, Occupation } =
            profile[0];
          setProfile(profile);
          setName(Full_Name);
          setPhone(Phone);
          setCity(City);
          setGender(Gender);
          setDob(Dob);
          setOccupation(Occupation);
        }
      }
      setLoading(false);
    };
    fetchProfile();
  }, [user]);

  
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="max-w-[800px] mx-auto p-4 border border-emerald-400/20 rounded-lg shadow-md">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#00d492"
              class="size-6"
            >
              <path
                fill-rule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clip-rule="evenodd"
              />
            </svg>
            <h1 className="text-2xl flex items-center font-bold">Profile </h1>
          </div>
          <form action="" className="mt-3" onSubmit={profile.length > 0 ? handleUpdate : handleSubmit}>
            {issubmitted && (
              <div className="flex justify-center items-center  p-2 rounded mb-4">
                Profile added successfully!
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex justify-center items-start  flex-col  p-2 rounded mb-1">
                <label className="mb-3 text-emerald-400" htmlFor="name">
                  Full Name:
                </label>
                <input
                  className="border border-emerald-400/20 p-2 rounded mb-4 w-full"
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex justify-center items-start  flex-col  p-2 rounded mb-1">
                <label className="mb-3 text-emerald-400" htmlFor="phone">
                  Phone:
                </label>
                <input
                  className="border border-emerald-400/20 p-2 rounded mb-4 w-full"
                  type="text"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="flex justify-center items-start  flex-col  p-2 rounded mb-1">
                <label className="mb-3 text-emerald-400" htmlFor="gender">
                  Gender:
                </label>
                <select
                  className="border bg-gary-800 border-emerald-400/20 p-2 rounded mb-4 w-full"
                  id="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option className="bg-gray-800 text-emerald-400" value="">
                    Select Gender
                  </option>
                  <option className="bg-gray-800 text-emerald-400" value="male">
                    Male
                  </option>
                  <option
                    className="bg-gray-800 text-emerald-400"
                    value="female"
                  >
                    Female
                  </option>
                  <option
                    className="bg-gray-800 text-emerald-400"
                    value="other"
                  >
                    Other
                  </option>
                </select>
              </div>
              <div className="flex justify-center items-start  flex-col p-2 rounded mb-1">
                <label className="mb-3 text-emerald-400" htmlFor="city">
                  City:
                </label>
                <input
                  className="border border-emerald-400/20 p-2 rounded mb-4 w-full"
                  type="text"
                  id="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>

              <div className="flex justify-center items-start  flex-col  p-2 rounded mb-1">
                <label className="mb-3 text-emerald-400" htmlFor="dob">
                  Date of Birth:
                </label>
                <input
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  className="border border-emerald-400/20 p-2 rounded mb-4 w-full"
                  type="date"
                  id="dob"
                />
              </div>

              <div className="flex justify-center items-start flex-col  p-2 rounded mb-1">
                <label className="mb-3 text-emerald-400" htmlFor="occupation">
                  Occupation:
                </label>
                <input
                  className="border  border-emerald-400/20 p-2 w-full rounded mb-4"
                  type="text"
                  id="occupation"
                  value={occupation}
                  onChange={(e) => setOccupation(e.target.value)}
                />
              </div>
            </div>
            {profile.length > 0 ? (
              <button
                type="submit"
                className="bg-emerald-400 hover:bg-emerald-400  text-black font-bold py-2 px-4 rounded"
              >
                Update Profile
              </button>
            ) : (
              <button
                type="submit"
                className="bg-emerald-400 hover:bg-emerald-400  text-black font-bold py-2 px-4 rounded"
              >
                Submit Profile
              </button>
            )}
          </form>
        </div>
      )}
    </>
  );
}

export default ProfileForm;
