import React, {useState} from 'react'
import axios from 'axios';
import '../css/addfoodite.css'
import { useNavigate } from 'react-router-dom';

function AddFoodItems() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        price: '',
        image: null,
        category: '', // Added state for Veg/Non-Veg selection
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleImageChange = (e) => {
        setFormData({
          ...formData,
          image: e.target.files[0],
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to a server
        //console.log(formData);

        await axios.post('https://odeasebackend.vercel.app/addFoodItem', {
            foodName: formData.title,
            foodDescription: formData.description,
            foodCategory: formData.category,
            foodPrice: Number(formData.price)
        }).then((response) => {
           // console.log(response);
            alert('Food added');
            navigate('/adminHome')

        }).catch((error) => {
          //console.log(error);
            alert('Something went wrong');
        })

      };
    
      return (
        <div className="form-container">
          <form className="product-form" onSubmit={handleSubmit}>
            <div className="product-form__group">
              <label className="product-form__label" htmlFor="title">Title:</label>
              <input
                className="product-form__input"
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            <div className="product-form__group">
              <label className="product-form__label" htmlFor="description">Description:</label>
              <textarea
                className="product-form__textarea"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
            <div className="product-form__group">
              <label className="product-form__label" htmlFor="price">Price:</label>
              <input
                className="product-form__input"
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
              />
            </div>
            <div className="product-form__group">
              <label className="product-form__label" htmlFor="category">Category:</label>
              <select
                className="product-form__select"
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="veg">Veg</option>
                <option value="non-veg">Non-Veg</option>
              </select>
            </div>
            <div className="product-form__group">
              <label className="product-form__label" htmlFor="image">Image:</label>
              <input
                className="product-form__file"
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
            <button className="product-form__button" type="submit">Submit</button>
          </form>
        </div>
      );
    };

    export default AddFoodItems;