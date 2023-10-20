import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  const [products, setProducts] = useState([]);
const [singleProduct,setSingleProduct]=useState([]);


//   console.log(params._id);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });

    const desiredProduct = products.find(
      (product) => product._id === params._id
    );
    // console.log(desiredProduct);
    setSingleProduct(desiredProduct);
  }, [params._id, products]);

//   const {price,imgURL,brand}=singleProduct;
  console.log(singleProduct);
  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex justify-between gap-5">
        <div className="flex-1 border flex justify-center items-center">
           <img src={singleProduct.imgURL} alt="" className="h-[50vh]" /> 
        </div>
        <div className="flex-1 space-y-4">
          <span className="">
            {singleProduct.brand}/{singleProduct.category}
          </span>
          <h1 className="text-4xl font-bold">{singleProduct.title}</h1>
          <p className="">price: ${singleProduct.price}.00</p>
         
          {/* <button className="btn btn-primary">ADD TO CART</button> */}
        </div>
      </div>

      <div className="">
        <p>{products.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
