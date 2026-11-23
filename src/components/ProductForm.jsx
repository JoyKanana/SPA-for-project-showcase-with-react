import { useState } from "react";
import { FormInput } from "./FormInput";
import { FormTextArea } from "./FormTextArea";
import { FormSelect } from "./FormSelect";
import { FormCheckbox } from "./FormCheckBox";
import { FormActions } from "./FormActions";

// Change these to your team's 6 categories
const categories = ["Headphones", "Speakers", "Keyboards", "Accessories", "Cables", "Other"];

const emptyProduct = {
  name: "",
  description: "",
  category: "",
  price: "",
  inStock: true,
  image: "",
};

export function ProductForm({ initialValues, onSubmit, onCancel, submitText }) {
  const [values, setValues] = useState({ ...emptyProduct, ...initialValues });
  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
      setValues({ ...values, [name]: checked });
    } else {
      setValues({ ...values, [name]: value });
    }
  }

  function validate() {
    const newErrors = {};

    if (values.name.trim() === "") {
      newErrors.name = "Name is required";
    }
    if (values.description.trim() === "") {
      newErrors.description = "Description is required";
    }
    if (values.category === "") {
      newErrors.category = "Please choose a category";
    }
    if (values.price === "" || Number(values.price) <= 0) {
      newErrors.price = "Enter a price greater than 0";
    }

    return newErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newErrors = validate();
    setErrors(newErrors);

    // stop here if any error was found
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    onSubmit({
      name: values.name.trim(),
      description: values.description.trim(),
      category: values.category,
      price: Number(values.price),
      inStock: values.inStock,
      image: values.image.trim(),
    });
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-lg rounded-lg bg-white p-6 shadow">
      <FormInput
        label="Name"
        name="name"
        value={values.name}
        onChange={handleChange}
        error={errors.name}
      />
      <FormTextArea
        label="Description"
        name="description"
        value={values.description}
        onChange={handleChange}
        error={errors.description}
      />
      <FormSelect
        label="Category"
        name="category"
        value={values.category}
        onChange={handleChange}
        options={categories}
        error={errors.category}
      />
      <FormInput
        label="Price (KES)"
        name="price"
        type="number"
        step="0.01"
        value={values.price}
        onChange={handleChange}
        error={errors.price}
      />
      <FormInput
        label="Image URL"
        name="image"
        placeholder="https://..."
        value={values.image}
        onChange={handleChange}
      />
      <FormCheckbox
        label="In stock"
        name="inStock"
        checked={values.inStock}
        onChange={handleChange}
      />
      <FormActions submitText={submitText} onCancel={onCancel} />
    </form>
  );
}