import { adminlog } from "@/envFile/contact";
import { useState } from "react";
import { toast } from "react-hot-toast";


export const adminlogin = async (email, password) => {
  try {
    await fetch(adminlog + "/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data, "Login successfully");
        if (data.status === "ok") {
          toast.success("Successfully logined");
        }
        window.localStorage.setItem("Token", data.data);
        window.location.href = "/admin";
      });
  } catch (error) {
    console.log(error, "login error");
  }
};

// typeof window !== "undefined" &&
//   window.localStorage.setItem("userProfile", JSON.stringify(userdata));
