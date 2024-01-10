import React, { useEffect, useState } from "react";
import ImageCard from "./ImageCard";
import { CircularProgress } from "@mui/material";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Home() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");
  const key = process.env.REACT_APP_KEY;

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${key}&q=${term}&image_type=photo`)
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [key, term]);

  return (
    <div className="bg-[#E9EAEC]">
      <div className="container mx-auto w-[80%] pb-10 min-h-[calc(100vh-5rem)]">
        <div>
          <Navbar searchText={(text) => setTerm(text)} />
        </div>

        {!isLoading && images.length === 0 && (
          <h1 className="text-6xl h-full text-center mx-auto mt-32 ">
            No Images Found.
          </h1>
        )}

        {isLoading ? (
          <div className="flex items-center justify-center h-[70vh]">
            <CircularProgress />
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 mt-10">
            {images.map((image) => (
              <ImageCard key={image.id} image={image} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
