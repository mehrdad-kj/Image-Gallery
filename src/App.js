import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import ImageCard from './components/ImageCard';
import Navbar from './components/Navbar';


function App() {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');
  const key = '29016271-b982132d50e2623ff345042db';

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${key}&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, [term])


  return (
    <div className="bg-[#E9EAEC] h-screen]">
      <div className="container mx-auto w-[80%] pb-10 h-[100%]">
        <div>
          <Navbar searchText={text => setTerm(text)} />
        </div>

        {!isLoading && images.length === 0 && <h1 className="text-6xl h-screen text-center mx-auto mt-32 ">
            No Images Found.
          </h1> }

        {isLoading 
          ? 
          <h1 className="text-6xl text-center mx-auto mt-32 ">
            Loading ...
          </h1> 
          :
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-10 mt-10">
            {images.map(image =>(
              <ImageCard key={image.id} image={image}/>
            ))}
          </div>}
      </div>
      <Footer />
    </div>
    
  );
}

export default App;
