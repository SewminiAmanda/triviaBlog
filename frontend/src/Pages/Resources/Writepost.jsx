/*import { ImCross } from 'react-icons/im';
import React, {useState } from 'react';

import { URL } from '../../url';
import axios from 'axios';
import './Writepost.css'

export const Writepost = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [file, setFile] = useState('');
  
  const [cat, setCat] = useState('');
  const [cats, setCats] = useState([]);

  const deleteCategory = (i) => {
    let updatedCats = [...cats];
    updatedCats.splice(i, 1);
    setCats(updatedCats);
  };

  const addCategory = () => {
    let updatedCats = [...cats];
    updatedCats.push(cat);
    setCat('');
    setCats(updatedCats);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const post = {
      title,
      desc,
      
      categories: "cats"
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append('img', filename);
      data.append('file', file);
      post.photo = filename;

      try {
        const imgUpload = await axios.post(URL + '/api/upload', data);
        console.log(imgUpload.data);
      } catch (err) {
        console.log(err);
      }
    }

    try {
      const res = await axios.post(URL + '/api/posts/create', {title,desc});
      console.log('Post created:',res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='container'>
      <h1 className='title'>Write Your Post</h1>
      <form onSubmit={handleSubmit} className='form'>
        <input onChange={(e) => setTitle(e.target.value)} type='text' placeholder='Enter Post Title' className='input'value={title} />
        <input onChange={(e) => setFile(e.target.files[0])} type='file' className='file-input' />
        <div className='category-container'>
          <div className='category-input-container'>
            <input value={cat} onChange={(e) => setCat(e.target.value)} className='category-input' placeholder='Enter Post Category' type='text' />
            <div onClick={addCategory} className='add-category-btn'>
              Add
            </div>
          </div>
          <div className='categories'>
            {cats?.map((c, i) => (
              <div key={i} className='category'>
                <p>{c}</p>
                <p onClick={() => deleteCategory(i)} className='delete-category-btn'>
                  <ImCross />
                </p>
              </div>
            ))}
          </div>
        </div>
        <textarea value={desc} onChange={(e) => setDesc(e.target.value)} className='description' placeholder='Enter Post Description' cols={30} rows={15}></textarea>
        <button type="submit" className='publish-btn'>
          Publish
        </button>
      </form>
    </div>
  );
};

export default Writepost;*/
