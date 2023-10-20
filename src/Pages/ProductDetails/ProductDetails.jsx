import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const products=useLoaderData();
  const params = useParams();
  const [product, setProduct] = useState(products);



  // console.log(params._id);
  useEffect(() => {
    
    const desiredProduct = products.find((product) => product._id === params._id);
    setProduct(desiredProduct)
      
    
      
  }, [params._id, products]);


  const handleAddToCart =()=>{

    fetch("http://localhost:5000/addToCart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((res) => res.json())
        .then((data) => {
          Swal.fire({
            icon: 'success',
            title: 'Oops...',
            text: ' product is add on the cart successfully!',
            // footer: '<a href="">Why do I have this issue?</a>'
          })
          console.log(data)});
  }



  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex justify-between gap-5">
        <div className="flex-1 border flex justify-center items-center">
           <img src={product.imgURL} alt="" className="h-[50vh]" /> 
        </div>
        <div className="flex-1 space-y-4">
          <span className="">
            {product.brand}/{product.category}
          </span>
          <h1 className="text-4xl font-bold">{product.title}</h1>
          <p className="">price: ${product.price}.00</p>
         
          <button className="btn btn-primary" onClick={handleAddToCart}>ADD TO CART</button>
        </div>
      </div>

      <div className="mt-10">
        <h1 className="text-3xl font-bold border my-5 p-3">Product Description </h1>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;



// useEffect(() => {
//   fetch("http://localhost:5000/products")
//     .then((res) => res.json())
//     .then((data) => {
//       setProducts(data)
//       const desiredProduct = products.find((product) => product._id === params._id);
    
//       setSingleProduct(desiredProduct);
//       console.log(desiredProduct);
//     });

// }, [params._id, products]);