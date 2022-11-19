import React from 'react';
import toast from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';

const AddService = () => {
  useTitle("AddService")
    const handleAddNewService = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const category = form.category.value;
        const img = form.img.value;
        const description = form.description.value;
        console.log(name,category,img,description);
        const addNewService = {
            strMeal: name,
            price,
          strCategory: category,
          strMealThumb: img,
          strInstructions:description,
        };
            fetch("http://localhost:5000/services", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(addNewService),
            })
              .then((res) => res.json())
              .then((data) => {
                form.reset();
                console.log(data);
                toast.success("New service added")
              })
              .catch((err) => console.log(err));
    }
    return (
      <div className="w-4/5 mx-auto">
        <form onSubmit={handleAddNewService} className="md:w-3/5 mx-auto border p-5 rounded-xl">
          <label className="text-xl text-gray-600">
            Food Name:
            <input
              className="w-full border border-red-400 py-3 px-4 mb-2 rounded-lg"
              name="name"
              type="text"
              placeholder="food name"
            />
          </label>
          <label className="text-xl text-gray-600">
            Food Price:
            <input
              className="w-full border border-red-400 py-3 px-4 mb-2 rounded-lg"
              name="price"
              type="text"
              placeholder="food name"
            />
          </label>
          <label className="text-xl text-gray-600">
            Food Category:
            <input
              className="w-full border border-red-400 py-3 px-4 mb-2 rounded-lg"
              name="category"
              type="text"
              placeholder="food category"
            />
          </label>
          <label className="text-xl text-gray-600">
            Image URL:
            <input
              className="w-full border border-red-400 py-3 px-4 mb-2 rounded-lg"
              name="img"
              type="text"
              placeholder="images url"
            />
          </label>
          <label className="text-xl text-gray-600">
            Food Description:
            <textarea
              className="w-full border border-red-400 py-3 px-4 mb-2 rounded-lg"
              name="description"
              placeholder="write description"
            ></textarea>
          </label>
          <input
            type="submit"
            className="bg-red-600 text-white font-semibold py-2 px-5 my-2 rounded-md hover:shadow hover:shadow-red-700"
            value="Submit"
          />
        </form>
      </div>
    );
};

export default AddService;