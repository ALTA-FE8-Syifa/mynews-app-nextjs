import axios from "axios";
import React from "react";
import Newscard from "./component/newscard";


// const [news, setNews] = useState([])
export const getServerSideProps = async () => {
  const response = await axios.get(`https://inshorts.deta.dev/news?category=entertainment`);
  const setNews = response.data
  // const title = response.data.title;
  return {
    props: {
      listNews: setNews,
      //title: title,
    },
  };
};

const index = ({ listNews }) => {
    console.log("list news: ", listNews.data);
  return (
    <div>
      <p>Ini Server Side Rendering</p>
      <p>{listNews.data}</p>

      {/* {news.map((item) => {
        <Newscard 
        title={item.title}
        src={item.src}/>
      })} */}
    </div>
  );
};

export default index
