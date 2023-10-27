import Layout from "@/components/Layout";
import Image from "next/image";
import React from "react";

function WebDevelopementPg() {
  return (
    <>
      <Layout>
        <div>WebDevelopementPg</div>
        <Image src={require("../assests/logoimg.png")} alt="image" />
      </Layout>
    </>
  );
}

export default WebDevelopementPg;
