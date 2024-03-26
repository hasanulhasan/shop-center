import { useRouter } from "next/navigation";
import data from "../../data/data.json";
import Product from "../Product";

const Categories = ({ categoryName, path }) => {
  const router = useRouter();

  const products = data?.products?.filter(
    (product) => {
      if(categoryName == 'all'){
        return product
      }
      else{
        return product.category === categoryName
      }
    }
  );

  const active = path.includes(categoryName);

  const handleRoute = (categoryName) => {
    router.push(`/category/${categoryName}`)
  }

  return (
    <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start">
      <div className="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4">
        <button onClick={()=> handleRoute('all')} className="hover:border-b border-black block h-6 box-border mt-5">
          All
        </button>
        <button onClick={()=> handleRoute('smartphones')} className="hover:border-b border-black block h-6 box-border mt-5">
          Smartphones
        </button>
        <button onClick={()=> handleRoute('laptops')} className="hover:border-b border-black block h-6 box-border mt-5">
          Laptops
        </button>
        <button onClick={()=> handleRoute('fragrances')} className="hover:border-b border-black block h-6 box-border mt-5">
          Fragrances
        </button>
        <button onClick={()=> handleRoute('skincare')} className="hover:border-b border-black block h-6 box-border mt-5">
          Skincare
        </button>
        <button onClick={()=> handleRoute('groceries')} className="hover:border-b border-black block h-6 box-border mt-5">
          Groceries
        </button>
      </div>
      <div className="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">
        {products?.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </section>
  );
};

export default Categories;
