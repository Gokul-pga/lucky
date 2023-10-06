import { cardurl } from "@/envFile/contact";

export const cardModel = async (title, description, modalImage) => {
  try {
    await fetch(cardurl + "/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        title,
        description,
        cardImg: modalImage,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log("added ");
      });
  } catch (error) {
    console.log(error, "CARD POST ERROR");
  }
};
