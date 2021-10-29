import React from "react";
import { useForm } from "react-hook-form";

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
    <div>
      <h1 className="text-center">Add service here</h1>
      <div className="d-flex justify-content-center align-items-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("location", { required: true })}
            placeholder="Tour Location"
          />
          <br />
          <input {...register("duration")} placeholder="Tour Length" />
          <br />
          <textarea
            {...register("description")}
            placeholder="Tour Description"
          />
          <br />
          <input {...register("img_url")} placeholder="Image URL" />
          <br />
          <input type="number" {...register("price")} placeholder="Price" />
          <br />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddService;
