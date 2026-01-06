import { Plus, Trash } from "lucide-react";
import AddCategory from "../../components/layout/admin/AddCategory";
import { useEffect, useState } from "react";
import axios from "axios";
import { Api_key } from "../../constants/ApiKey";

export default function Categories() {
  const [isAddCategoryOpen, setIsAddCategoryOpen] = useState(false);
  const [productData, setProductData] = useState([]);
  const [selectedId, setSelectedId] = useState([]);
  const [searchInput, setSearchInput] = useState(null);
  const [FilteredSearch, setFilteredSearch] = useState(productData);

  useEffect(() => {
    axios
      .get(
        "https://ohwdqklamwslzrhgkvup.supabase.co/rest/v1/categories?apikey=sb_publishable_oYJBmQoJ8OvVZyieB_B_ZQ_Dblx7GSy"
      )
      .then((res) => {
        console.log(res.data);
        setProductData(res.data);
        setFilteredSearch(res.data);
      });
  }, []);
  // console.log("Productdata1", productData);
  function handleAddCategoryModal() {
    setIsAddCategoryOpen(true);
  }
  function handleCheckBoxChange(id, checked) {
    if (checked) {
      setSelectedId((prev) => [...prev, id]);
    } else {
      setSelectedId((prev) => prev.filter((itemId) => itemId !== id));
    }
  }

  function handleDeleteCategory() {
    selectedId.forEach((id) => {
      axios
        .delete(
          `https://ohwdqklamwslzrhgkvup.supabase.co/rest/v1/categories?id=eq.${id}`,
          {
            headers: {
              apikey: Api_key,
              Authorization: `Bearer ${Api_key}`,
            },
          }
        )
        .then(() => {
          setProductData((prev) => prev.filter((item) => item.id !== id));
        });
    });
  }

  function handleSearch(e) {
    const value = e.target.value;
    setSearchInput(value);
    const filteredData = productData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredSearch(filteredData);
  }
  return (
    <div
      className="flex p-8 justify-between flex-col relative
    "
    >
      <div className=" flex justify-between ">
        <div className="text-2xl">Category</div>
        <div className="flex gap-6">
          <button
            className="flex bg-red-400 px-4 py-2 text-md items-center gap-4 rounded-lg"
            onClick={handleDeleteCategory}
          >
            <Trash /> <p>Delete</p>
          </button>
          <button
            className="flex bg-green-400 px-4 text-md items-center gap-4 rounded-lg"
            onClick={handleAddCategoryModal}
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
              onChange={handleSearch}
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
              setProductData={setProductData}
            />
          )}
          <div className="h-[370px] overflow-auto">
            <table className="table-auto w-full border-collapse">
              <thead className="bg-gray-100 border border-gray-200">
                <tr className="font-bold text-left">
                  <th className="px-4 py-2">
                    <input type="checkbox" />
                  </th>
                  <th className="px-4 py-2">Id</th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Parent_id</th>
                </tr>
              </thead>
              <tbody>
                {FilteredSearch.map((item, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-4 py-2">
                      <input
                        type="checkbox"
                        checked={selectedId.includes(item.id)}
                        onChange={(e) =>
                          handleCheckBoxChange(item.id, e.target.checked)
                        }
                      />
                    </td>
                    <td className="px-4 py-2">{item.id}</td>
                    <td className="px-4 py-2">{item.name}</td>
                    <td className="px-4 py-2">{item.parent_id}</td>
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
