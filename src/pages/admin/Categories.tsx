import { Plus, Trash } from "lucide-react";
import AddCategory from "../../components/layout/admin/AddCategory";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Categories() {
  const [isAddCategoryOpen, setIsAddCategoryOpen] = useState(false);
  const [productData, setProductData] = useState([]);
  function handleAddCategory() {
    setIsAddCategoryOpen(true);
  }

  useEffect(() => {
    axios
      .get(
        "https://ohwdqklamwslzrhgkvup.supabase.co/rest/v1/categories?apikey=sb_publishable_oYJBmQoJ8OvVZyieB_B_ZQ_Dblx7GSy"
      )
      .then((res) => {
        console.log(res.data);
        setProductData(res.data);
      });
  }, []);
  console.log("Productdata1", productData);
  return (
    <div
      className="flex p-8 justify-between flex-col relative
    "
    >
      <div className=" flex justify-between ">
        <div className="text-2xl">Category</div>
        <div className="flex gap-6">
          <button className="flex bg-red-400 px-4 py-2 text-md items-center gap-4 rounded-lg">
            <Trash /> <p>Delete</p>
          </button>
          <button
            className="flex bg-green-400 px-4 text-md items-center gap-4 rounded-lg"
            onClick={handleAddCategory}
          >
            <Plus />
            <p>Add Category</p>
          </button>
        </div>
      </div>
      <div>
        <div className="bg-white flex flex-col justify-between px-10 py-4 my-6 overflow-hidden">
          <div className="flex justify-between py-5">
            <input
              type="text"
              placeholder="Search by Category name"
              className="border border-black px-4 py-1 w-[600px] pr-12"
            />
            <div className="flex gap-6">
              <button className="px-4 py-1 bg-green-400  rounded-lg">
                Filter
              </button>
              <button className="px-4 py-1 bg-gray-400  rounded-lg">
                Reset
              </button>
            </div>
          </div>
          {isAddCategoryOpen && (
            <AddCategory
              setIsAddCategoryOpen={setIsAddCategoryOpen}
              productData={productData}
            />
          )}
          <div className="h-[300px] overflow-auto">
            <table className="table-auto w-full border-collapse">
              <thead className="bg-gray-100 border border-gray-200">
                <tr className="font-bold text-left">
                  <th className="px-4 py-2">
                    <input type="checkbox" />
                  </th>
                  <th className="px-4 py-2">Id</th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Category</th>
                </tr>
              </thead>
              <tbody>
                {productData.map((item, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-4 py-2">
                      <input type="checkbox" />
                    </td>
                    <td className="px-4 py-2">{item.id}</td>
                    <td className="px-4 py-2">{item.name}</td>
                    <td className="px-4 py-2">{item.parent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
