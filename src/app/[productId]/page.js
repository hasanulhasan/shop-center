/* eslint-disable @next/next/no-img-element */
'use client'

import Nav from "@/component/Home/Nav";
import Image from "next/image";
import data from '../../data/data.json'
import star from '../assets/svg/star.svg'
import Ratings from "@/utils/Ratings";

const productDetails = ({params}) => {
  const {productId} = params

  let product = null;
  if(productId){
    product = data?.products?.find(product => product.id == productId)
  }
  const {id,title, category, description, price, discountPercentage, thumbnail, images, rating} = product
  console.log(product)

  return (
    <div>
      <Nav/>
      <main className="h-screen">
    <section className="bg-[#fafaf2] h-full py-20">
      <div className="w-11/12 lg:w-8/12 max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row items-center justify-between">
        <div className="w-full lg:w-7/12 border border-slate-500/20 p-4">
          <Image src={thumbnail} className=" mx-auto object-cover" height={500} width={400} alt="" />

          <div className="flex gap-4 mt-4">
            <Image src={images[0]} className="mx-auto border object-cover" height={100} width={100} alt="" />
            <Image src={images[1]} className="mx-auto border object-cover" height={100} width={100} alt="" />
            <Image src={images[2]} className="mx-auto border object-cover" height={100} width={100} alt="" />
            <Image src={images[3]} className="mx-auto border object-cover" height={100} width={100} alt="" />
          </div>
        </div>
        <div className="w-full lg:w-5/12">
          <h1 className="italic text-xl lg:text-3xl font-serif font-semibold">{title}</h1>
          <span className="text-[#919090] my-3">{category}</span>
          {/* <div className="mt-3 flex items-center justify-start gap-1"> */}
            <Ratings rating={rating} star={star}/>
            {/* <Image src={star} width="20px" alt="" />
            <Image src={star} width="20px" alt="" />
            <Image src={star} width="20px" alt="" />
            <Image src={star} width="20px" alt="" />
            <Image src={star} width="20px" alt="" /> */}
          {/* </div> */}
          <hr className="my-5 bg-black" />

          <div>
            <p className="my-3">
              <span className="text-rose-600 opacity-60 line-through">${price}</span>
              <span className="font-bold text-2xl">${discountPercentage}</span>
            </p>
          </div>
          <div>
            <p className="leading-7">
              {description}
            </p>

            <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full">
              Add To Cart - ${discountPercentage}
            </button>
          </div>
        </div>
      </div>
    </section>
  </main>
    </div>
  );
};

export default productDetails;