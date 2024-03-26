"use client";
import Footer from "@/component/Home/Footer";
import Hero from "@/component/Home/Hero";
import Nav from "@/component/Home/Nav";
import Subscription from "@/component/Home/Subscription";
import Categories from "@/component/category/Categories";
import { usePathname } from "next/navigation";

const CategoryPage = ({ params }) => {
  const path = usePathname();
  const { categoryName } = params;
  const pathName = path.split("/")[2];
  return (
    <div>
      <Nav />
      <Hero />
      <Categories categoryName={categoryName} pathName={pathName} />
      <Subscription />
      <Footer />
    </div>
  );
};

export default CategoryPage;
