import { adminurl } from "@/envFile/contact";

export const admindata = async (name, email, password, confirmpass) => {
  try {
    await fetch(adminurl + "/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        confirmpass,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "POST DATA");
      });
  } catch (error) {
    console.log(error, "Admin post method");
  }
};
