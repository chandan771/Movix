import React, { useState, useEffect } from "react";
import "./hero.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import Img from "../../../components/lazylord/Img";
import ContentWrapper from "../../../components/contentWrap/ContentWrapper";

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);

  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  /* -- We are putting method because of whatever
   we search in Input it's saved on our state -- */

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className="hero_container">
      {!loading && (
        <div className="backdrop_image">
          <Img src={background} alt="" />
        </div>
      )}

      <div className="opacity-layer"></div>

      <ContentWrapper>
        <div className="wrapper">
          <div className="hero_content">
            <span className="title">Welcome</span>
            <span className="subtitle">
              Millions of movies, TV shows and people to Discover. Explore now.
            </span>
            <div className="searchInput">
              <input
                type="text"
                placeholder="Search your favorite movies and Tv shows..."
                onKeyUp={searchQueryHandler}
                onChange={(e) => setQuery(e.target.value)}
                /* -Whatever we type in this all value setquery save here- */
              />
              <button>Search</button>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
