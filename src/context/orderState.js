
import axios from 'axios';
import ordercontext from './orderContext'
import { useState } from "react";

const OrderState = (props) => {
    const url = "https://odeasebackend.vercel.app";
    
    const [users, setCurrUser] = useState([]);
    
    //get the curr user
    const getCurrUser = async () => {
        axios({
            url:`${url}/user`,
            method: "GET",
            headers:{
                "Authorization": 'Bearer ' + localStorage.getItem('token')
            }
        }).then(function(response){
            console.log(response.data)
            if(response.status === 200){
              setCurrUser(response.data)
            }
          })
    }

    //get all the posts
    // const getAllPost = async () => {
    //     axios({
    //         url:`${url}/posts`,
    //         method: 'GET',
    //         headers:{
    //             "Authorization": 'Bearer ' + localStorage.getItem('token')
    //         }
    //     }).then(function(response){
    //         console.log(response.data)
    //         if(response.status === 200){
    //           setAllPosts(response.data)
    //         }
    //       })
    // }

    

    //get all the users
    // const getUsers = async () => {
    //     console.log(localStorage.getItem('token'))
    //     axios({
    //     url: `${url}/chats`,
    //     method: "GET",
    //     headers:{
    //         "Authorization": 'Bearer ' + localStorage.getItem('token')
    //     }
    //     }).then(function(response){
    //         console.log(response.data)
    //         if(response.status === 200){
    //           setUsers(response.data)
    //         }
    //       })
    // }

    return(
        <ordercontext.Provider value={{users, getCurrUser}}>
            {props.children}
        </ordercontext.Provider>
    )
}

export default OrderState;