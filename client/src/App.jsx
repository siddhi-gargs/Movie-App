import { useEffect, useState } from 'react'
import './App.css';

function App() {
  const [showPopUp, setpopUp] = useState(false);
  const [formdata, setFormdata] = useState({Title : '', Desc : '', Producer: ''});

  const handleChange = (e) => {      
    const {name, value} = e.target;
    console.log(name, value);
    setFormdata(prev => ({...prev, [name] : value}));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("form data ", formdata);
    try {

      const getRes = await fetch("http://localhost:5197/movies", {
        method: "GET",
      })

      const res1 = await getRes.text();
      console.log(res1);

      const response = await fetch("http://localhost:5197/movies", {
        method: "POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify(formdata)
      });
      
      const res = await response.json();

      
      console.log("We are getting this repsonse by sending movie details", res);
      setFormdata({Title : '', Desc : '' , Producer : '' });
      setpopUp(false); 

    } catch (error) {

      console.error("Error is adding movie", error);
    }

  }

  return ( 
  <div>
    <h1>Movies App</h1>
    <button onClick={() => {setpopUp(true)}}>Add A new Movie</button> 
    {
      showPopUp && (<div class = "pop-up"> 
      <h2>Add the content</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="Title"
          value={formdata.Title}
          onChange={handleChange}
          placeholder='Movie title'
          required
        />
        <br/>

         <input
          type="text"
          name="Producer"
          value={formdata.Producer}
          onChange={handleChange}
          placeholder='Movie Producer'
          required
        />

        <textarea 
          name="Desc"
          value={formdata.Desc}
          onChange={handleChange}
          placeholder='description'
          required
        />

        <br/>
        <button type="submit" >Submit</button>
      </form>
      </div>)
    }
  </div>
  )
}

export default App
