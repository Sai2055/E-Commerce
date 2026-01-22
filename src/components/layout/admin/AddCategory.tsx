import axios from "axios";
import { X } from "lucide-react";
import { useState } from "react";
import { Api_key } from "../../../constants/ApiKey";
export default function AddCategory({
  setIsAddCategoryOpen,
  productData,
  setProductData,
}) {
  const [parentCategory, setParentCategory] = useState(null);
  const [categoryName, setCategoryName] = useState("");
  const [error, setError] = useState({ nameError: "" });
  function handleCloseCategory() {
    setIsAddCategoryOpen(false);
  }

  function handleSelectParentCategory(e) {
    setParentCategory(e.target.value);
  }
  function handelCategoryName(e) {
    setCategoryName(e.target.value);
  }
  // console.log("productData", productData);

  function handleAddCategory() {
    if (!categoryName.trim()) {
      setError((prev) => ({ ...prev, nameError: "Name is Required" }));
      return;
    } else {
      setError({ nameError: "" });
      axios
        .post(
          "https://ohwdqklamwslzrhgkvup.supabase.co/rest/v1/categories",
          { name: categoryName, parent_id: parentCategory },
          {
            headers: {
              apikey: Api_key,
              Authorization: `bearer ${Api_key}`,
              "Content-Type": "application/json",
              Prefer: "return=representation",
            },
          }
        )
        .then((res) => {
          setProductData((prev) => [...prev, res.data[0]]);
          setIsAddCategoryOpen(false);
        });
    }
  }

  return (
    <div className="bg-[#f0f0f0] flex flex-col gap-[80px] p-8 w-1/2 absolute top-0 right-0 h-full border border-black-500">
      <div className="flex justify-between">
        <p className="text-2xl font-bold">Add Category</p>

        <X onClick={handleCloseCategory} />
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between ">
          <label htmlFor="" className="font-bold">
            Name
          </label>
          <input
            type="text"
            className="border border-black w-[300px] "
            onChange={handelCategoryName}
          />
        </div>
        {error.nameError && <p className="text-red-700">{error.nameError}</p>}
        {/* <div className="flex justify-between">
          <label htmlFor="" className="font-bold">
            Description
          </label>  
          <input
            type="text"
            className="border boder-gray-300 w-[300px] h-[80px]"
          />
        </div> */}
        <div className="flex justify-between">
          <label htmlFor="" className="font-bold">
            Parenet Category
          </label>
          <select
            name=""
            id=""
            className="border border-black w-[300px]"
            onChange={handleSelectParentCategory}
          >
            <option value="--select the value--">--select the value--</option>
            {productData.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
          {/* <input type="text"  /> */}
        </div>
        {/* <div className="flex justify-between">
          <label htmlFor="" className="font-bold">
            Category Image
          </label>
          <input
            type="text"
            className="border boder-gray-300 w-[300px] h-[80px]"
          />
        </div> */}
      </div>
      <div className="flex justify-between p">
        <button
          className="bg-gray-500 w-[48%] px-8 py-2"
          onClick={handleCloseCategory}
        >
          Cancel
        </button>
        <button
          className="bg-green-500 w-[48%] px-8 py-2"
          onClick={handleAddCategory}
        >
          Add Category
        </button>
      </div>
    </div>
  );
}
