import axios from "axios";
import { Plus, Search, Table, Trash, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Api_key } from "../../constants/ApiKey";
import AddProduct from "../../components/layout/admin/AddProduct";

export default function Products() {
  const [searchInput, setSearchInput] = useState("");
  const [productData, setProductData] = useState([]);
  const [filterData, setfilterData] = useState(productData);
  const [isAddProduct, setIsAddProduct] = useState(false);

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
        },
      })
      .then((res) => {
        console.log(res.data);
        setProductData(res.data);
      });
  }, []);

  function handleAddProduct() {
    setIsAddProduct(true);
  }

  return (
    <div className="flex p-8 justify-between flex-col relative">
      <div className=" flex justify-between ">
        <div className="text-2xl">Products</div>
        <div className="flex gap-6">
          <button className="flex bg-red-400 px-4 py-2 text-md items-center gap-4 rounded-lg">
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
                        // checked={selectAll}
                        // onChange={handleSelectAll}
                      />
                    </th>
                    <th className="px-4 py-2">Prouduct Name</th>
                    <th className="px-4 py-2">Price</th>
                    <th className="px-4 py-2">Stock</th>
                  </tr>
                </thead>
                <tbody>
                  {productData.map((item) => (
                    <tr className=" w-full border border-b-1">
                      <td className="px-4 py-2">
                        <input type="checkbox" />
                      </td>
                      <td className="px-4 py-2">{item.name}</td>
                      <td className="px-4 py-2">{item.price}</td>
                      <td className="px-4 py-2">{item.stock}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            }
          </div>
        </div>
      </div>
      <div>
        {isAddProduct && <AddProduct setIsAddProduct={setIsAddProduct} />}
      </div>
    </div>
  );
}
