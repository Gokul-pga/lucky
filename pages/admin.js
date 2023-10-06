import CourseCard from "@/components/CourseCard";
import { adminlog } from "@/envFile/contact";
import { cardModel } from "@/routes/cardmodal";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useSelector } from "react-redux";

function Admin() {
    const fetchcard = useSelector((state) => state.tasks.fetchcard);

  const [profile, setProfile] = useState("");
  const [modalImage, setModalImage] = useState(""); //usestate for image storing
  // usestate for get input values
  const [input, setInput] = useState({
    title: "",
    description: "",
  });
  const { title, description } = input;

  // convert image onto base64 image
  const handleimg = (e) => {
    const file = e.target.files[0];
    transformFile(file);
  };

  function transformFile(file) {
    const reader = new FileReader(file);
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setModalImage(reader.result);
      console.log(modalImage);
    };
  }

  // logout function
  const logoutfun = () => {
    window.localStorage.clear;
    window.location.href = "/home";
  };

  // submithandler to submit the input values
  const submitHandler = () => {
    if (title !== "" && description !== "") {
      cardModel(title, description, modalImage);
      setInput({
        title: "",
        description: "",
      });
      setModalImage("");
      console.log(modalImage, "image data");
      console.log(input, "input data");
      toast.success("added");
    } else {
      toast.error("All fields are mandatory");
    }
  };

  // verifying admin or not
  const adminverify = async () => {
    try {
      await fetch(adminlog + "/userdata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          token: window.localStorage.getItem("Token"),
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.data, "Token");
          const account = data.data;
          setProfile(account);
          console.log(account);
          if (data.data == "Token expired") {
            window.localStorage.clear;
            window.location.href = "/adminlogin";
          }
        });
    } catch (error) {
      console.log(error, "token error");
    }
  };

  useEffect(() => {
    adminverify();
  }, [1]);

  typeof window !== "undefined" &&
    window.localStorage.setItem("userProfile", JSON.stringify(profile));

  const windows =
    typeof window !== "undefined" && window.localStorage.getItem("userProfile");
  const User = JSON.parse(windows);
  console.log(User);

  return (
    <>
      <Toaster />
      <div className="bg-[#050505e5] w-full ">
        <div className="bg-[#000] w-full p-5 flex flex-row justify-between">
          <div className="logotext text-3xl  text-blue-400">LuckyCharm</div>
          <div className="bg-red-400">
            <div className="text-white text-3xl">{User.name}</div>
          </div>
          <div>
            <button
              onClick={logoutfun}
              className="text-white text-xl font-semibold font-mono px-4 py-2 bg-gradient-to-r from-sky-400 to-purple-400"
            >
              Logout
            </button>
          </div>
        </div>
        <div className="flex flex-col w-full items-center">
          <div className="flex flex-col md:flex-row mt-5 items-center w-[70%] bg-gray-200  justify-center ">
            <div className="  px-5 py-5 flex flex-col w-full md:w-[50%] items-center ">
              <div className="px-3 py-3 flex flex-col w-full gap-3">
                <input
                  type="text"
                  placeholder="Title Name"
                  className="px-2 py-2"
                  value={title}
                  onChange={(e) => {
                    setInput({ ...input, title: e.target.value });
                  }}
                />
                <textarea
                  type="text"
                  placeholder="Description"
                  className="px-2 py-2"
                  value={description}
                  onChange={(e) => {
                    setInput({ ...input, description: e.target.value });
                  }}
                />
                <input
                  type="file"
                  placeholder="Title Name"
                  accept="image/*"
                  onChange={handleimg}
                />
              </div>
              <button
                className="bg-white px-4 py-1 rounded-md"
                onClick={submitHandler}
              >
                Create
              </button>
            </div>

            <div className="flex flex-row w-full justify-center">
              {modalImage == "" || modalImage == null ? (
                <div>
                  <div>No preview available</div>
                </div>
              ) : (
                <div className="w-32 py-3">
                  <img src={modalImage}  alt="image" />
                </div>
              )}
            </div>
          </div>
          <div>
          <div className=" grid grid-cols-1 md:grid-cols-3 w-full gap-3 ml-10 md:ml-10 items-center justify-between">
            {fetchcard.map((item, id) => {
              return (
                <div
                  key={id}
                  className="bg-white w-[90%] rounded-md md:w-[90%] flex flex-col px-2 py-3 items-center justify-center gap-3"
                >
                  <div className="flex flex-row w-28 h-20">
                    <img
                      src={item.cardImg.url}
                      alt="images"
                      className="w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-3 w-full items-center justify-center text-justify">
                    <div className="text-base font-bold text-black">
                      {item.title}
                    </div>
                    <div className="text-sm ">{item.description}</div>
                  </div>
                  <button className="bg-gray-400 px-3 py-1 rounded">
                    Learn more
                  </button>
                </div>
              );
            })}
          </div>
          </div>
          <div className="flex flex-col w-full"></div>
        </div>
      </div>
    </>
  );
}

export default Admin;
