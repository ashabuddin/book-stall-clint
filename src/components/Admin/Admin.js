import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";


const Admin = () => {

  const { register, handleSubmit, watch, errors } = useForm();
  const [imageURL, setImageURL] = useState(null)


  const onSubmit = data =>{
      const bookData = {
          name: data.name,
          price: data.price,
          imageURL: imageURL,
          
      }
        const url = `https://blooming-tor-37064.herokuapp.com/addBook`;
      
        fetch(url, {
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify(bookData)
        })
        .then(res => console.log('server side response',res))
    };


    const handleImageUpload = book => {
        console.log(book.target.files[0]);
       const imageData = new FormData();
       imageData.set('key', '88915d62ec9d02c19a4c66f98a63a842');
       imageData.append('image', book.target.files[0] );
       
       axios.post('https://api.imgbb.com/1/upload', imageData )
      .then(function (response) {
       setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="name"  placeholder='Enter Book Name' ref={register}  />
            <br/>
            <input name="price"  placeholder='Enter Book Price' ref={register} />
            <br/>
            <input name="exampleRequired" type='file' onChange={handleImageUpload} />
            <br/>
            
            <input type="submit" />
        </form>
    );
};

export default Admin;