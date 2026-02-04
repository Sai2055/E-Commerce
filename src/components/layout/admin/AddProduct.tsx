import axios from "axios";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { Api_key } from "../../../constants/ApiKey";
import getCategories from "../../../services/admin/Categories/categories.services";

export default function AddProduct({ setIsAddProduct, setProductData }) {
  const [productDetails, setProductDetails] = useState({
    name: "",
    description: "",
    category_id: "",
    price: "",
    stock: "",
  });
  const [categories, setCategories] = useState([]);
  function handleCloseProduct() {
    setIsAddProduct(false);
  }

  function handleProductDetails(e) {
    setProductDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  useEffect(() => {
    async function fetchCategories() {
      const data = await getCategories();
      setCategories(data);
    }
    fetchCategories();
    // console.log("categoriesList" + categories);
  }, []);
  // console.log(productDetails);
  function handleAddProduct() {
    axios
      .post(
        "https://ohwdqklamwslzrhgkvup.supabase.co/rest/v1/products",
        {
          name: productDetails.name,
          description: productDetails.description,
          price: productDetails.price,
          stock: productDetails.stock,
          category_id: productDetails.category_id,
        },
        {
          headers: {
            apikey: Api_key,
            Authorization: `Bearer ${Api_key}`,
            "Content-Type": "application/json",
            Prefer: "return=representation",
          },
        },
      )
      .then((res) => {
        setProductData((prev) => [...prev, res.data[0]]);
        setIsAddProduct(false);
      });
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
          <label htmlFor="" className="w-[30%] font-bold">
            Product Name:
          </label>
          <input
            type="text"
            name="name"
            value={productDetails.name}
            onChange={handleProductDetails}
            className="w-[70%] py-2 px-4"
          />
        </div>
        <div
          className="flex
            justify-between w-full"
        >
          <label htmlFor="" className="w-[30%] font-bold">
            Product Description:
          </label>{" "}
          <input
            type="text"
            name="description"
            value={productDetails.description}
            onChange={handleProductDetails}
            className="w-[70%] py-2 px-4"
          />
        </div>
        <div
          className="flex
            justify-between w-full"
        >
          <label htmlFor="" className="font-bold">
            Product Category
          </label>
          <select
            id=""
            className="w-[70%] py-2 px-4"
            name="category_id"
            value={productDetails.category_id}
            onChange={handleProductDetails}
          >
            <option value="">--select the category--</option>
            {categories.map((item, index) => (
              <option value={item.id} key={index}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <div
          className="flex
            justify-between w-full"
        >
          <label htmlFor="" className="w-[30%] font-bold">
            Product Price:
          </label>{" "}
          <input
            type="number"
            name="price"
            value={productDetails.price}
            onChange={handleProductDetails}
            className="w-[70%] py-2 px-4"
          />
        </div>
        <div
          className="flex
            justify-between w-full"
        >
          <label htmlFor="" className="w-[30%] font-bold">
            Product Stock:
          </label>{" "}
          <input
            type="number"
            name="stock"
            value={productDetails.stock}
            onChange={handleProductDetails}
            className="w-[70%] py-2  px-4"
          />
        </div>
      </div>
      <div className="flex justify-between p">
        <button
          className="bg-gray-500 w-[48%] px-8 py-2"
          onClick={handleCloseProduct}
        >
          Cancel
        </button>
        <button
          className="bg-green-500 w-[48%] px-8 py-2"
          onClick={handleAddProduct}
        >
          Add Category
        </button>
      </div>
    </div>
  );
}
