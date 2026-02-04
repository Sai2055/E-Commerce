import axios, { Axios } from "axios";
import { Axis3D, Plus, Search, Table, Trash, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Api_key } from "../../constants/ApiKey";
import AddProduct from "../../components/layout/admin/AddProduct";

export default function Products() {
  const [searchInput, setSearchInput] = useState("");
  const [productData, setProductData] = useState([]);
  const [filterData, setFilterData] = useState(productData);
  const [isAddProduct, setIsAddProduct] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedId, setSelectedId] = useState([]);

  function handleSearch(e) {
    const value = e.target.value;
    setSearchInput(value);
  }

  useEffect(() => {
    axios
      .get("https://ohwdqklamwslzrhgkvup.supabase.co/rest/v1/products", {
        headers: {
          apikey: Api_key,
          Authorization: `Bearer ${Api_key}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        setProductData(res.data);
        setFilterData(res.data);
      })
      .catch((err) => {
        console.error("Failed to load products:", err);
      });
  }, []);

  function handleAddProduct() {
    setIsAddProduct(true);
  }

  function handleCheckBox(id, checked) {
    if (checked) {
      let updated = [...selectedId, id];
      setSelectedId(updated);
      if (updated.length === productData.length) {
        setSelectAll(true);
      }
    } else {
      const updated = selectedId.filter((itemId) => itemId !== id);
      setSelectedId(updated);
      setSelectAll(false);
    }
  }

  function handleSelectAll(checked) {
    setSelectAll(checked);
    if (checked) {
      setSelectedId(productData.map((item) => item.id));
    } else {
      setSelectedId([]);
    }
  }
  function handleDeleteProducts() {
    selectedId.forEach((id) => {
      axios
        .delete(
          `https://ohwdqklamwslzrhgkvup.supabase.co/rest/v1/products?id=eq.${id}`,
          {
            headers: {
              apikey: Api_key,
              Authorization: `Bearer ${Api_key}`,
              Prefer: "return=minimal",
              "Content-Type": "application/json",
            },
          },
        )
        .then(() => {
          setProductData((prev) => {
            const updated = prev.filter((item) => item.id !== id);
            setFilterData(updated);
            return updated;
          });
        });
    });
  }

  return (
    <div className="flex p-8 justify-between flex-col relative">
      <div className=" flex justify-between ">
        <div className="text-2xl">Products</div>
        <div className="flex gap-6">
          <button
            className="flex bg-red-400 px-4 py-2 text-md items-center gap-4 rounded-lg"
            onClick={handleDeleteProducts}
          >
            <Trash /> <p>Delete</p>
          </button>
          <button
            className="flex bg-green-400 px-4 text-md items-center gap-4 rounded-lg"
            onClick={handleAddProduct}
          >
            <Plus />
            <p>Add Product</p>
          </button>
        </div>
      </div>

      <div>
        <div className="bg-white flex flex-col gap-8 px-10 py-4 my-6 overflow-hidden">
          <div className="flex justify-between">
            <input
              type="text"
              value={searchInput}
              placeholder="Search Product"
              onChange={handleSearch}
              className="relative border border-black px-4 py-1 w-[530px] pr-12"
            />
            <Search className="pt-2 absolute left-[570px] text-gray-500" />
            <select
              name=""
              id=""
              className="w-[300px] border border-black px-4 py-1 pr-12 "
            >
              <option value="Categories">Categories</option>
            </select>
            <button className="px-4 py-1 bg-gray-400  rounded-lg">Reset</button>
          </div>
          <div>
            {
              <table className="table-auto w-full border-collapse">
                <thead className="bg-gray-100 border border-gray-200">
                  <tr className="font-bold text-left">
                    <th className="px-4 py-2">
                      <input
                        type="checkbox"
                        checked={selectAll}
                        onChange={(e) => handleSelectAll(e.target.checked)}
                      />
                    </th>
                    <th className="px-4 py-2">Prouduct Name</th>
                    <th className="px-4 py-2">Price</th>
                    <th className="px-4 py-2">Stock</th>
                    <th className="px-4 py-2">Category_id</th>
                  </tr>
                </thead>
                <tbody>
                  {filterData.map((item) => (
                    <tr className=" w-full border border-b-1" key={item.id}>
                      <td className="px-4 py-2">
                        <input
                          type="checkbox"
                          checked={selectedId.includes(item.id)}
                          onChange={(e) =>
                            handleCheckBox(item.id, e.target.checked)
                          }
                        />
                      </td>
                      <td className="px-4 py-2">{item.name}</td>
                      <td className="px-4 py-2">{item.price}</td>
                      <td className="px-4 py-2">{item.stock}</td>
                      <td className="px-4 py-2">{item.category_id}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            }
          </div>
        </div>
      </div>
      <div>
        {isAddProduct && (
          <AddProduct
            setIsAddProduct={setIsAddProduct}
            setProductData={setProductData}
          />
        )}
      </div>
    </div>
  );
}
