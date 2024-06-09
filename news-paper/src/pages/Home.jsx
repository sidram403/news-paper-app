import React, { useEffect, useState } from "react";
import Advertisement from "../assets/aads.png";
import { Divider } from "@mui/material";
import ArticleImg from "../assets/Article.png";
import ArticleCoverImg1 from "../assets/article-cover-01.png";
import ArticleCoverImg2 from "../assets/article-cover-02.png";
import ArticleCoverImg3 from "../assets/article-cover-03.png";
import ArticleCoverImg4 from "../assets/article-cover-04.png";
import ArticleCoverImg5 from "../assets/article-cover-05.png";
import Icon1 from "../assets/icons/icon-1.png";
import Icon2 from "../assets/icons/icon-2.png";
import Icon3 from "../assets/icons/icon-3.png";
import Icon4 from "../assets/icons/icon-4.png";
import Icon5 from "../assets/icons/icon-5.png";
import Icon6 from "../assets/icons/icon-6.png";
import Icon7 from "../assets/icons/icon-7.png";
import Icon8 from "../assets/icons/icon-8.png";
import Icon9 from "../assets/icons/icon-9.png";
import Icon10 from "../assets/icons/icon-10.png";
import TopicDivider from "../components/TopicDivider";
import Footer from "../components/Footer";
import Header from "../components/Header";

const articleData = [
  {
    id: 1,
    img: ArticleCoverImg1,
    title: "Jansatta Editorial:",
    subtitle:
      "संपादकीय: डेयरियों में मिलावट का कारोबार और पशुओं को दवा देकर दूध का क्रूर उत्पादन.",
    published: "May 6, 2024 08:05 IST",
    description:
      "कभी-कभार दूध में मिलावट करने वालों के खिलाफ तो सख्ती होती देखी जाती है, मगर पशुओं को हानिकारक दवाएं देकर…",
  },
  {
    id: 2,
    img: ArticleCoverImg2,
    title: "Jansatta Editorial:",
    subtitle:
      "संपादकीय: डेयरियों में मिलावट का कारोबार और पशुओं को दवा देकर दूध का क्रूर उत्पादन.",
    published: "May 6, 2024 08:05 IST",
    description:
      "कभी-कभार दूध में मिलावट करने वालों के खिलाफ तो सख्ती होती देखी जाती है, मगर पशुओं को हानिकारक दवाएं देकर…",
  },
  {
    id: 3,
    img: ArticleCoverImg3,
    title: "Jansatta Editorial:",
    subtitle:
      "संपादकीय: डेयरियों में मिलावट का कारोबार और पशुओं को दवा देकर दूध का क्रूर उत्पादन.",
    published: "May 6, 2024 08:05 IST",
    description:
      "कभी-कभार दूध में मिलावट करने वालों के खिलाफ तो सख्ती होती देखी जाती है, मगर पशुओं को हानिकारक दवाएं देकर…",
  },
  {
    id: 4,
    img: ArticleCoverImg4,
    title: "Jansatta Editorial:",
    subtitle:
      "संपादकीय: डेयरियों में मिलावट का कारोबार और पशुओं को दवा देकर दूध का क्रूर उत्पादन.",
    published: "May 6, 2024 08:05 IST",
    description:
      "कभी-कभार दूध में मिलावट करने वालों के खिलाफ तो सख्ती होती देखी जाती है, मगर पशुओं को हानिकारक दवाएं देकर…",
  },
  {
    id: 5,
    img: ArticleCoverImg5,
    title: "Jansatta Editorial:",
    subtitle:
      "संपादकीय: डेयरियों में मिलावट का कारोबार और पशुओं को दवा देकर दूध का क्रूर उत्पादन.",
    published: "May 6, 2024 08:05 IST",
    description:
      "कभी-कभार दूध में मिलावट करने वालों के खिलाफ तो सख्ती होती देखी जाती है, मगर पशुओं को हानिकारक दवाएं देकर…",
  },
];

const types = [
  {
    id: 1,
    img: Icon1,
    title: "मुख्य समाचार",
  },
  {
    id: 2,
    img: Icon2,
    title: "मुख्य समाचार",
  },
  {
    id: 3,
    img: Icon3,
    title: "मुख्य समाचार",
  },
  {
    id: 4,
    img: Icon4,
    title: "मुख्य समाचार",
  },
  {
    id: 5,
    img: Icon5,
    title: "मुख्य समाचार",
  },
  {
    id: 6,
    img: Icon6,
    title: "मुख्य समाचार",
  },
  {
    id: 7,
    img: Icon7,
    title: "मुख्य समाचार",
  },
  {
    id: 8,
    img: Icon8,
    title: "मुख्य समाचार",
  },
  {
    id: 9,
    img: Icon9,
    title: "मुख्य समाचार",
  },
  {
    id: 10,
    img: Icon10,
    title: "मुख्य समाचार",
  },
];

const Home = () => {
  const [activeType, setActiveType] = useState(3);
  const [newsListingsArray, setNewsListingsArray] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(newsListingsArray.length / itemsPerPage);

  const handleTypeClick = (index, e) => {
    e.preventDefault();
    setActiveType(index);
  };

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const paginatedItems = newsListingsArray.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() =>{
    const fetchNewsDetails = async () => {
      try {
        const res = await fetch("https://news-paper-app.onrender.com/server/listing/getNewsListings");
        const data = await res.json();
        console.log(data);

        const filteredData = data.filter(news => news.allowNews === true);
        const newsData = filteredData.map(news => {
          const date = new Date(news.createdAt);
          const formattedDate = date.toLocaleString('en-IN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            timeZoneName: 'short'
          });
          return {
            ...news,
            published: formattedDate
          };
        });

        setNewsListingsArray(newsData);
        // setNewsListingsArray(filteredData);
      console.log(newsData);


      } catch (error) {
        console.log(error.message);
      }
    };
    fetchNewsDetails();

  },[])

  return (
    <div>
      <Header />
      <div className="w-full flex flex-col items-center">
        <div className="mt-20 w-full bg-[#F1F1F1]">
          <p className="text-center">Advertisement</p>
          <div className="flex justify-center py-8 px-4 md:px-48 items-center text-center">
            <img src={Advertisement} alt="aads image" className="w-full h-32" />
          </div>
        </div>
        <TopicDivider title="ख़ास ख़बर" />
        <div className="py-8 md:py-20 px-4 w-full">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full">
            <div className="md:w-[10%]"></div>
            <div className="md:w-[50%]">
              <div>
                <img
                  src={ArticleImg}
                  alt="ArticleImg"
                  className="w-full h-auto md:h-[320px]"
                />
              </div>
              {paginatedItems.map((item) => (
                <div className="py-2 w-full cursor-pointer" key={item._id}>
                  <h1 className="font-bold text-lg md:text-[25px]">
                    {item.user}
                  </h1>
                  <div className="flex flex-col md:flex-row gap-4 py-2">
                    <div className="md:w-[70%]">
                      <p className="font-semibold text-sm md:text-[16px]">
                        {item.title}
                      </p>
                      <p className="text-sm md:text-[16px]">
                        Updated: {item.published}
                      </p>
                      <p className="font-normal text-sm md:text-[16px]">
                        {item.content}
                      </p>
                    </div>
                    <div className="md:w-[30%]">
                      <img
                        src={item.imageUrls[0]}
                        alt="ArticleCoverImg"
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                  <Divider />
                </div>
              ))}
            </div>
            <div className="md:w-[30%] flex flex-col gap-4 md:gap-12">
              <div className="w-full border border-slate-500 py-4">
                {types.map((item) => (
                  <div
                    onClick={(e) => handleTypeClick(item.id, e)}
                    key={item.id}
                    className={`flex items-center gap-1 cursor-pointer p-2 ${
                      activeType === item.id ? "bg-red-500 text-white" : ""
                    }`}
                  >
                    <img
                      src={item.img}
                      alt="Icon"
                      className="w-8 h-8 md:w-16 md:h-16"
                    />
                    <p className="font-semibold text-sm md:text-[20px]">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
              <div className="w-full shadow-custom-light py-4 min-h-[200px] md:min-h-[400px]"></div>
            </div>
          </div>
        </div>
        <div className="pagination flex justify-center items-center gap-2 mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 m-1 bg-gray-300 hover:bg-gray-400 disabled:bg-gray-200"
        >
          Previous
        </button>
        
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 m-1 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 m-1 bg-gray-300 hover:bg-gray-400 disabled:bg-gray-200"
        >
          Next
        </button>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
