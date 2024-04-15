import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroller";
import ImageCart from "./Imagecart";
import Loader from "./Loader";

const Home = () => {
  const [pages, setPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [allImages, setAllImages] = useState([]);

  const plotImages = async (page) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://prod-be.1acre.in/lands/?ordering=-updated_at&page=${page}&page_size=10`
      );
      const data = await res.json();
      console.log(data.results);
      setLoading(false);
      return data.results;
    } catch (err) {
      console.log(err);
      setLoading(false);
      return [];
    }
  };

  const loadNextPage = async () => {
    const nextPage = pages + 1;
    const nextImages = await plotImages(nextPage);
    setAllImages((prevImages) => [...prevImages, ...nextImages]);
    setPages(nextPage);
  };

  useEffect(() => {
    const loadInitialPage = async () => {
      const initialImages = await plotImages(pages);
      setAllImages(initialImages);
    };
    loadInitialPage();
  }, []);

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={loadNextPage}
      hasMore={!loading}
      loader= {loading ? <Loader /> : null}
  
    >
        {console.log(loading)}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(33.33%, 1fr))",
          margin: "80px",
          justifyContent: "space-between",
        }}
      >
        {allImages.map((item, index) => {
          return (
            <ImageCart
              key={item.id}
              item={item}
              id={item.id}
              title={item.village_name}
              mandal_name={item.mandal_name}
              district_name={item.district_name}
              image={item.land_media}
              area={item.total_land_size_in_acres}
              price={item.price_per_acre_crore}
            />
          );
        })}
      </div>
    </InfiniteScroll>
  );
};

export default Home;
