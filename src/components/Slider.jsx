import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import GlobalApi from "../services/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import Carousel from "./carousel";

const Slider = () => {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();
  const screenWidth = window.innerWidth;
  useEffect(() => {
    getTrendingMovies();
    <ref className="mr-2"></ref>
  }, []);

  const getTrendingMovies = () => {
    GlobalApi.getTrendingMovies().then((res) => {
      setMovieList(res.data.results);
      console.log(res.data.results);
    });
  };
 
  return (
    <div>

      <div className=" flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth" ref={elementRef}>
      <Carousel autoSlide autoSlideInterval={5000}>
      {movieList.map((movie) =>
        !movie.adult ? (
          <img
            key={movie.id} // Assuming movie.id is unique
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={movie.title}
            className="border-1 min-w-full md:h-[500px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-600 transition-all duration-100 ease-in"
          />
        ) : null
      )}
    </Carousel>
      </div>
    </div>
  );
};

export default Slider;
