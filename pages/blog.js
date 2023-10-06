import Layout from "@/components/Layout";
import Image from "next/image";
import React from "react";

function Blog() {
  return (
    <>
      <Layout>
        <div className="flex flex-row w-full items-center justify-center">
          <Image src={require("../assests/blog.gif")} alt="images" />
        </div>
      </Layout>
    </>
  );
}

export default Blog;
