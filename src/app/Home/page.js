"use client";
import Footer from "../../component/Home/Footer";
import Hero from "../../component/Home/Hero";
import Nav from "../../component/Home/Nav";
import data from "../../data/data.json";
import Product from "@/component/Product";
import Subscription from "../../component/Home/Subscription";

export default function HomePage() {

  return (
    <div>
      <Nav />
      <Hero />
      <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 my-4 lg:my-10">
          {data?.products.map((product) => (
            <Product key={product.id} product={product}/>
          ))}
        </div>
      </section>
      <Subscription />
      <Footer />
    </div>
  );
}
