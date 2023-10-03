import React, { useState } from "react";
import { Modal ,Button,} from "@mui/material";
import { AiOutlineClose } from "react-icons/ai";
import "animate.css";
import { toast, Toaster } from "react-hot-toast";

function AdminLogin({ open, setOpen }) {
  const [passwordMsg, setPasswordMsg] = useState(false); //check password recuriments
  const passMsg = () => {
    setPasswordMsg(true);
  };

  // code start for input datas
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    confirmpass: "",
  });
  const { name, email, password, confirmpass } = input;
  var regularExpression =
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$";
  //code for submitandler
  const submithandler = () => {
    if (name !== "" && email !== "" && password !== "" && confirmpass !== "") {
      if (password.length >= 8 && confirmpass.length >= 8) {
        if (password === confirmpass) {
          console.log(input, "user Register data");
          setInput({
            name: "",
            email: "",
            password: "",
            confirmpass: "",
          });
          toast.success("Sucessfull Register");
          setPasswordMsg(false);
        } else {
          toast.error("password not matched");
        }
      } else {
        toast.error("Atleast minimum 8 letter");
      }
    } else {
      toast.error("All fields are mandatory");
    }
  };
  return (
    <>
      <Toaster />
      <Modal
        open={open}
        className=" flex flex-row w-full bg-[#333232b7] h-screen items-center justify-center outline-none"
      >
        <div className="animate__animated animate__backInDown rounded-md outline-none text-white flex flex-col bg-[#000000e3] py-5 gap-5 w-[70%] md:w-[50%] lg:w-[30%]  items-center justify-center">
          <div className="flex flex-row items-center w-[80%] justify-between">
            <div className="text-2xl">Signup</div>
            <div
              onClick={() => {
                setOpen(false);
              }}
            >
              <AiOutlineClose className="text-xl" />
            </div>
          </div>

          <div className="flex flex-col gap-3 w-[80%] ">
            <input
              className="px-2 py-2 outline-none text-black"
              type="text"
              placeholder="Name"
              required
              value={name}
              onChange={(e) => {
                setInput({ ...input, name: e.target.value });
              }}
              onClick={() => {
                passMsg();
              }}
            />
            <input
              className="px-2 py-2 outline-none text-black"
              type="text"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => {
                setInput({ ...input, email: e.target.value });
              }}
            />
            <input
              className="px-2 py-2 outline-none text-black"
              type="text"
              placeholder=" password"
              required
              value={password}
              onChange={(e) => {
                setInput({ ...input, password: e.target.value });
              }}
            />
            <input
              className="px-2 py-2 outline-none text-black"
              type="text"
              placeholder="Confirm password"
              required
              value={confirmpass}
              onChange={(e) => {
                setInput({ ...input, confirmpass: e.target.value });
              }}
            />
            <button
              onClick={submithandler}
              className="bg-blue-400 px-2 py-2 text-xl logobg"
            >
              Submit
            </button>
          </div>

          <div className="flex flex-row gap-2 cursor-pointer">
            <div>Already have account?</div>
            <div className="rounded-md"
              onClick={() => {
                setOpen(false);
              }}
            >
              Login
            </div>
          </div>

          <div className=" w-[90%] ">
            <div>Password Recuriments:-</div>
            <div>1. Atleast minimum 8 letter</div>
            <div>2. Should contain at least one digit</div>
            <div>3. Should contain at least Lower case</div>
            <div>4. Should contain at least upper case</div>
          </div>
        </div>
      </Modal>
    </>
  );
}
export default AdminLogin;
