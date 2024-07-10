
import axios from 'axios';
import ordercontext from './orderContext'
import { useState, useReducer } from "react";

const cartReducer = (state, action) => {
   console.log(state)    
    switch (action.type) {
        case 'ADD_TO_CART':
          return state.map(item => 
            item._id === action.payload._id
              ? { ...item, quantity: item.quantity + 1 }
              : item
        ).concat(state.find(item => item._id === action.payload._id) ? [] : [{ ...action.payload, quantity: 1 }]);
        case 'REMOVE_FROM_CART':
          return state
            .map(item =>
              item._id === action.payload._id && item.quantity >= 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
            )
            .filter(item => item._id !== action.payload._id || item.quantity > 0);
        default:
          return state;
    }
  };

const OrderState = (props) => {
    const url = "https://odeasebackend.vercel.app";
    //const url = `http://localhost:3001`
    const [users, setCurrUser] = useState([]);
    const [allFood, setAllFood] = useState([]);
    const [currOrder, setCurrOrder] = useState([]);
    const [cart, dispatch] = useReducer(cartReducer, []);

    //get the curr user
    const gettCurrUser = async () => {
        await axios({
            url:`${url}/user`,
            method: "GET",
            headers:{
                "Access-Control-Allow-Origin": "*",
                "Authorization":  localStorage.getItem('token')
            }
        }).then(function(response){
            console.log(response.data)
            if(response.status === 200){
              setCurrUser(response.data)
            }
          }).catch(function(error){
            console.log(error);
            console.log(localStorage.getItem('token'))
            alert('Invalid Table number')
            return 'err'
          })
    }

    //get all the food items
    const getAllFoodItems = async () => {
        await axios({
            url:`${url}/allFoodItems`,
            method: "GET",
            headers:{
                "Access-Control-Allow-Origin": "*"
            }
        }).then(function(response){
            console.log(response)
            setAllFood(response.data);
        }).catch(function(error){
            console.log(error);
            console.log(localStorage.getItem('token'))
            alert('Invalid Table number')
            return 'err'
          })
    }

    const addToOrder = (id) => {        
        //let done = false;
        setCurrOrder([...currOrder, id]);
        console.log(currOrder)
    }

    const deleteFromOrder = (id) => {
        let once = false
        const news = currOrder.filter((item) => {
            console.log(item)
            if(once){
                return item;
            }
            else if(item.id!==id.id){
                return item
            }
            else if(item.id===id.id && !once){
                once = true;
            }
        })
        setCurrOrder(news);
        console.log(currOrder)
    }    

    return(
        <ordercontext.Provider value={{currOrder, users, gettCurrUser, getAllFoodItems, allFood, addToOrder, deleteFromOrder, cart, dispatch }}>
            {props.children}
        </ordercontext.Provider>
    )
}

export default OrderState;
