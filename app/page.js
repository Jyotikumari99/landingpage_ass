import Head from "next/head";
import Banner from "../components/Banner";
import ProductList from "../components/ProductList";
import "../app/globals.css";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Restaurant Landing</title>
      </Head>
      <div>
        <Navbar />
        <Banner />
        <ProductList />
      </div>
    </>
  );
}
