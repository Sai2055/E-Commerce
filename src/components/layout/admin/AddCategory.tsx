import { X } from "lucide-react";

export default function AddCategory({ setIsAddCategoryOpen }) {
  function handleCloseCategory() {
    setIsAddCategoryOpen(false);
  }
  return (
    <div className="bg-white flex flex-col justify-between p-8 w-1/2 absolute top-0 right-0 h-[88vh] border border-black-500">
      <div className="flex justify-between">
        <p className="text-2xl font-bold">Add Category</p>

        <X onClick={handleCloseCategory} />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between ">
          <label htmlFor="" className="font-bold">
            Name
          </label>
          <input type="text" className="border boder-gray-300 w-[300px] " />
        </div>
        <div className="flex justify-between">
          <label htmlFor="" className="font-bold">
            Description
          </label>
          <input
            type="text"
            className="border boder-gray-300 w-[300px] h-[80px]"
          />
        </div>
        <div className="flex justify-between">
          <label htmlFor="" className="font-bold">
            Parenet Category
          </label>
          <input type="text" className="border boder-gray-300 w-[300px]" />
        </div>
        <div className="flex justify-between">
          <label htmlFor="" className="font-bold">
            Category Image
          </label>
          <input
            type="text"
            className="border boder-gray-300 w-[300px] h-[80px]"
          />
        </div>
        <div className="flex justify-between p">
          <button className="bg-gray-500 w-[48%] px-8 py-2">Cancel</button>
          <button className="bg-green-500 w-[48%] px-8 py-2">
            Add Category
          </button>
        </div>
      </div>
    </div>
  );
}
