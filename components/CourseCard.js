import { cardurl } from "@/envFile/contact";
import { setFetchcard } from "@/redux/slice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiArrowDownSLine } from "react-icons/ri";
import "animate.css";
import { useRouter } from "next/router";

function CourseCard() {
  const router = useRouter()
  const dispatch = useDispatch();
  const fetchcard = useSelector((state) => state.tasks.fetchcard);
  const [course, setCourse] = useState([]);
  const [show, setShow] = useState(true);

  const fetchCourse = async () => {
    try {
      await fetch(cardurl + "/get", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          dispatch(setFetchcard(data.data));
          setCourse(data.data);
        });
    } catch (error) {
      console.log(error, "Course card error");
    }
  };

  useEffect(() => {
    fetchCourse();
  }, [course]);

  return (
    <>
      <div className="flex flex-col gap-5 w-full items-center justify-between">
        {show && (
          <div className=" grid grid-cols-1 md:grid-cols-3 w-full gap-3 ml-10 md:ml-10 items-center justify-between">
            {course.map((item, id) => {
              return (
                <div
                  key={id}
                  className="bg-[#BFBFBF] w-[90%] rounded-xl md:w-[90%] flex flex-col px-4 md:px-4 py-2 md:py-3 items-center justify-center gap-1 md:gap-3"
                >
                  <div className="flex flex-row w-12 h-8 md:w-32 md:h-20">
                    <img
                      src={item.cardImg.url}
                      alt="images"
                      className="w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-3 w-full items-center justify-center text-center">
                    <div className="text-lg md:text-base font-bold text-black">
                      {item.title}
                    </div>
                    <div className="text-sm md:text-base ">{item.description}</div>
                  </div>
                  <button className="bg-white px-3 py-1 rounded font-medium " onClick={() => {
                    router.push("/work")
                  }}>
                    Learn more
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default CourseCard;
