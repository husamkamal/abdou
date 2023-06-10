import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Content from "./Components/content";
import Header from "./Components/header";
import Photo from "./Components/photo";
import axios from "axios";

function App() {
  const [isLoading, setIsLoaading] = useState(true)
  const [data , setData] = useState([])
  useEffect(()=>{
    const getData = async () =>{
      const response = await axios.get("https://ybiapi.fresh-app.com/api/demo_profile")
      setData(response.data)
    }
    getData()
  }, [])
  return (
    <div className="App">
      <Header image={data.images_list[0]} />
      <Content data={data}/>
      <Photo images={data.images_list}/>
      <Navbar />
    </div>
  );
}

export default App;
