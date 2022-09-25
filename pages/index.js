import axios from "axios";
import React from "react";
import Newscard from "../component/newscard";
import NavbarComp from "../component/navbar-comp";
import Router from "next/router";


export const getServerSideProps = async () => {
  const response = await axios.get("https://inshorts.deta.dev/news?category=entertainment");
  const setNews = response.data.data
 
  return {
    props: {
      listNews: setNews,
    },
  };
};


const ServeSideRendering = ({ listNews }) => {
  // const router = useRouter();
  const handleDetail = (item) => {
    Router.push({
      pathname: `${item.title}`,
      query: {
        author : item.author,
        date : item.date,
        content : item.content,
        imageUrl: item.imageUrl,
        readMoreUrl : item.readMoreUrl,
        time : item.time,
        title : item.title,
      }
    })
  }

  return (
    <div>
      <NavbarComp/>
      <div className="row flex p-5">
        
      {listNews.map((item) => {
        return (
          <Newscard 
        // key={index}
        title={item.title}
        src={item.imageUrl}
        onClick={() => handleDetail(item)}/>
        )
        
      })}
      </div>
    </div>
  );
};

export default ServeSideRendering
