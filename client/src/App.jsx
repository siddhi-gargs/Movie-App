import { useEffect, useState } from 'react'
import './App.css';

function  App () {
  const [showPopUp, setpopUp] = useState(false);
  const [formdata, setFormdata] = useState({ Title: '', Desc: '', Producer: '' });
  const [movies, setMovies] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormdata(prev => ({ ...prev, [name]: value }));
  }

  const getAllMovies = async () => {
    const getRes = await fetch("http://localhost:5197/movies", {
      method: "GET",
    })

    if (!getRes.ok) {
      throw new Error("Not Able to fetch the movies");
    }

    const res1 = await getRes.json();
    setMovies(res1);
  }

  useEffect(() => {
  
    console.log(movies);
    getAllMovies().catch(console.error);
  }, [movies]);

  const removeThis = async(id) => {
    try {
      const response = await fetch(`http://localhost:5197/movies/${id}`, {
        method: "DELETE"
      })

      const res = await response.text();
      console.log(res)

    } catch (error) {
      console.error("Error from deleting the movie", error);
    }
  }
 
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("form data ", formdata);
    try {

      const response = await fetch("http://localhost:5197/movies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formdata)
      });



      const res = await response.text();
      console.log("Response after adding one more movie detail", res);

      setFormdata({ Title: '', Desc: '', Producer: '' });
      setpopUp(false);

    } catch (error) {

      console.error("Error is adding movie", error);
    }

  }

  return (
    <div className='main-container'>
      <h1 style={{ textAlign: 'center' }}>Movies App</h1>
      <table className='Table'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Producer</th>
            <th>Description</th>
            <th> <button onClick={() => { setpopUp(true) }} style={{ backgroundColor: 'green' }}>Add A new Movie</button>
              {
                showPopUp && (<div className="pop-up-container">
                  <div className="pop-up">

                    <h2>Add the content</h2>
                    <form onSubmit={handleSubmit}>
                      <input
                        className='input-bar'
                        type="text"
                        name="Title"
                        value={formdata.Title}
                        onChange={handleChange}
                        placeholder='Movie title'
                        required
                      />
                      <br />
                      <input
                        className='input-bar'
                        type="text"
                        name="Producer"
                        value={formdata.Producer}
                        onChange={handleChange}
                        placeholder='Movie Producer'
                        required
                      />
                      <textarea
                        name="Desc"
                        className='input-bar'
                        value={formdata.Desc}
                        onChange={handleChange}
                        placeholder='description'
                        required
                      />
                      <br />
                      <button type="submit" >Submit</button>
                    </form>
                  </div>
                </div>)
              }</th>
          </tr>
        </thead>
        <tbody>
          {
            movies.map(element => 
              (<tr key={element.id}>
                <td>{element.title}</td>
                <td>{element.desc}</td>
                <td>{element.producer}</td>
                <td><button style={{backgroundColor: "green"}} onClick={() => removeThis(element.id)}>Delete</button></td>
              </tr>)
            )
          }

        </tbody>
      </table>

    </div>
  )
}

export default App