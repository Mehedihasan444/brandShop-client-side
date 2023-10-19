import { Link } from "react-router-dom";

const Brands = ({ brands }) => {
  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Our Brands</h1>
      </div>
      <div className="grid grid-cols-3 gap-5 justify-center items-center">
        {brands.map((brand) => (
          <Link to={`BrandDetailsPage/${brand.id}`} key={brand.id}>
            {" "}
            <div className="flex flex-col text-center border p-5 h-[245px] ">
              <div className="flex justify-center items-center flex-grow">
                <img src={brand.image} alt="" className="w-[180px]" />
              </div>
              <h3 className="text-xl font-semibold cursor-pointer">
                {brand.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Brands;

//  <div className="flex flex-col text-center border p-5 h-[245px]">
// <div className="flex justify-center items-center flex-grow">
// <img src={apple} alt="" className="w-[180px]" />
// </div>
// <h3 className="text-xl font-semibold cursor-pointer">Apple</h3>
// </div>
// <div className="flex flex-col text-center border p-5 h-[245px]">
// <div className="flex justify-center items-center flex-grow">
// <img src={xiaomi} alt="" className="w-[180px]" />
// </div>
// <h3 className="text-xl font-semibold cursor-pointer">Xiaomi</h3>
// </div>
// <div className="flex flex-col text-center border p-5 h-[245px]">
// <div className="flex justify-center items-center flex-grow">
// <img src={oneplus} alt="" className="w-[180px]" />
// </div>
// <h3 className="text-xl font-semibold cursor-pointer">Oneplus</h3>
// </div>
// <div className="flex flex-col text-center border p-5 h-[245px]">
// <div className="flex justify-center items-center flex-grow">
// <img src={oppo} alt="" className="w-[180px]" />
// </div>
// <h3 className="text-xl font-semibold cursor-pointer">Oppo</h3>
// </div>
// <div className="flex flex-col text-center border p-5 h-[245px] ">
// <div className="flex justify-center items-center flex-grow">
// <img src={vivo} alt="" className="w-[180px] " />
// </div>

// <h3 className="text-xl font-semibold cursor-pointer ">Vivo</h3>
// </div>
