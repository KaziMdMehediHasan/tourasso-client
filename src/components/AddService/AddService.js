import React from "react";
import { useForm } from "react-hook-form";
import "./AddService.css";

const AddService = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);

    //sending request to server
    fetch("https://fast-meadow-84110.herokuapp.com/offers", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    alert("Added Success");
    e.target.reset();
  };
  return (
    <div className="my-5">
      <h1 className="text-center">Add New Service</h1>
      <div className="add-service-parent shadow-lg">
        <div>
          <form className="add-service-form" onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("location", { required: true })}
              placeholder="Location"
            />
            <hr />
            <input {...register("duration")} placeholder="Tour Length" />
            <hr />
            <textarea {...register("description")} placeholder="Description" />
            <hr />
            <input {...register("img_url")} placeholder="Image URL" />
            <hr />
            <input type="number" {...register("price")} placeholder="Price" />
            <hr />
            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
