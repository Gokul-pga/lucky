import { api } from "@/envFile/contact";
import { toast } from "react-hot-toast";

export const contactDetails = async (name, email, phone, subject, message) => {
  try {
    await fetch(api + "/contactDetails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        subject,
        message,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Thankyou for your response");
      });
  } catch (error) {
    console.log(error, "CONTACT POST METHOD");
  }
};
