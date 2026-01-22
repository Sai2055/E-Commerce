import { X } from "lucide-react";

export default function AddProduct({ setIsAddProduct }) {
  function handleCloseProduct() {
    setIsAddProduct(false);
  }
  return (
    <div className="flex flex-col gap-6 bg-gray-300 w-[60%] p-8 absolute top-0 right-0 shadow-xl">
      <div className="flex justify-between  border-b-1">
        <div>
          <p className="font-bold text-2xl">Add Product</p>
          <p className="text-gray-700 ">
            Add your product and necessary information from here
          </p>
        </div>
        <div
          className=" text-red-600   flex justify-center items-center  "
          onClick={handleCloseProduct}
        >
          <X className="" />
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <div
          className="flex
            justify-between w-full"
        >
          <label htmlFor="" className="w-[30%]">
            Product Name:
          </label>{" "}
          <input type="text" name="" id="" className="w-[70%] py-2" />
        </div>
        <div
          className="flex
            justify-between w-full"
        >
          <label htmlFor="" className="w-[30%]">
            Product Description:
          </label>{" "}
          <input type="text" name="" id="" className="w-[70%] py-2" />
        </div>
        <div
          className="flex
            justify-between w-full"
        >
          <label htmlFor="" className="w-[30%]">
            Product Price:
          </label>{" "}
          <input type="number" name="" id="" className="w-[70%] py-2" />
        </div>
        <div
          className="flex
            justify-between w-full"
        >
          <label htmlFor="" className="w-[30%]">
            Product Stock:
          </label>{" "}
          <input type="number" name="" id="" className="w-[70%] py-2  " />
        </div>
      </div>
      <div className="flex justify-between p">
        <button
          className="bg-gray-500 w-[48%] px-8 py-2"
          onClick={handleCloseProduct}
        >
          Cancel
        </button>
        <button className="bg-green-500 w-[48%] px-8 py-2">Add Category</button>
      </div>
    </div>
  );
}
