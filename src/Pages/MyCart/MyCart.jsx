import { useLoaderData } from "react-router-dom";

import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const MyCart = () => {
  const {user} = useContext(AuthContext);
  const cartItems = useLoaderData();
  const [newUser,setNewUser]=useState('')
  const [filterUser, setFilterUser] = useState([]);
  // const [filterData, setFilterData] = useState(filterUser);
  const [filterData, setFilterData] = useState(cartItems);

    // console.log(cartItems);
    
    
  //   useEffect(() => {
  //     const userCartItems = cartItems.filter((cartItem) => cartItem.userEmail ===newUser );
  //     setFilterUser(userCartItems);
  //     // console.log(userCartItems);
  //     setNewUser(user?.email)
  //     // console.log(newUser);
  // }, [newUser,user.email, cartItems]);


  const handleDelete = (_id) => {
    console.log(_id);
    fetch(`http://localhost:5000/addToCart/${_id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const filteredData = filterData.filter((data) => data._id !== _id);
        setFilterData(filteredData);
      });
  };

  return (
    <div className=" max-w-7xl mx-auto grid grid-cols-2 gap-5 my-10">
      {/* <h1 className="">from cart</h1> */}
      {filterData.map((cartItem) => (
        <div className="h-[250px] rounded-md border flex" key={cartItem}>
          <div className="h-[250px]">
            <img src={cartItem.imgURL} alt="" className="h-full w-full" />
          </div>
          <div className="flex flex-col space-y-3 p-5">
            <p className="">
              {cartItem.brand}/{cartItem.category}
            </p>
            <h1 className="text-3xl font-bold">{cartItem.title}</h1>
            <h1 className="">Price: ${cartItem.price}.00</h1>
            <div className="flex ">
              <div className="flex-1"></div>
              <div className="flex justify-between gap-5 flex-1 ">
                <button className="btn text-xl flex-grow">
                  <FaEdit></FaEdit>
                </button>
                <button
                  className="btn text-xl"
                  onClick={() => handleDelete(cartItem._id)}
                >
                  <RiDeleteBin6Line></RiDeleteBin6Line>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyCart;
