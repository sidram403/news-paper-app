import React, { useState } from "react";
import HorizontalNewsItem from "../components/HorizontalNewsItem";

import NewsImage from "../assets/news-home.png";
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
import NewsVideo from "../assets/news-video-2.mp4";
import SingleNewsImg1 from "../assets/single-news.png";
import SingleNewsImg2 from "../assets/single-news-2.png";
import NewsType from "../components/NewsType";
import NewsVideos from "../components/NewsVideo";
import NewsItem from "../components/NewsItem";
import TopicDivider from "../components/TopicDivider";
import AdvertiseBanner from "../assets/advertise_02.png";
import ShortNews1 from "../assets/short_news_01.png";
import ShortNews2 from "../assets/short_news_02.png";
import ShortNews3 from "../assets/short_news_03.png";
import ShortNews4 from "../assets/short_news_04.png";
import ShortNews5 from "../assets/short_news_05.png";
import ShortNews6 from "../assets/short_news_06.png";
import HorizontalImage1 from "../assets/horizontal_news_01.png";
import HorizontalImage2 from "../assets/horizontal_news_02.png";
import HorizontalImage3 from "../assets/horizontal_news_03.png";
import BrandImage from "../assets/brand_name.png";
import HeadLines from "../components/HeadLines";
import Footer from "../components/Footer";
import Header from "../components/Header";

const types = [
  { id: 1, img: Icon1, title: "मुख्य समाचार" },
  { id: 2, img: Icon2, title: "मुख्य समाचार" },
  { id: 3, img: Icon3, title: "मुख्य समाचार" },
  { id: 4, img: Icon4, title: "मुख्य समाचार" },
  { id: 5, img: Icon5, title: "मुख्य समाचार" },
  { id: 6, img: Icon6, title: "मुख्य समाचार" },
  { id: 7, img: Icon7, title: "मुख्य समाचार" },
  { id: 8, img: Icon8, title: "मुख्य समाचार" },
  { id: 9, img: Icon9, title: "मुख्य समाचार" },
  { id: 10, img: Icon10, title: "मुख्य समाचार" },
];

const SingleNews = () => {
  const [activeType, setActiveType] = useState(1);

  const handleTypeClick = (index, e) => {
    e.preventDefault();
    setActiveType(index);
  };

  return (
    <div>
      <Header />
      <div className="w-full h-full">
        <div className="w-full h-fit relative">
          <img src={NewsImage} alt="NewsImage" className="w-full h-full" />
          <div className="absolute bottom-[20%] left-[10%]">
            <p className="bg-black  w-[300px] md:w-[600px] text-white px-2 py-2 text-[18px] md:text-[40px]">
              <span className="bg-[#F44336] font-bold rounded-lg py-1 px-1">
                BREKING NEWS:
              </span>
              <span className="font-semibold">
                केजरीवाल और आम आदमी पार्टी का झूठ आख़िर पकड़ा गया
              </span>
            </p>
          </div>
        </div>
        <div className="w-full h-fit">
          <div className="py-8 md:py-20 px-4 w-full ">
            <div className="flex flex-col md:flex-row px-4 md:px-20 gap-8 md:gap-12 w-full">
              <div className="md:w-[30%] flex flex-col gap-2 h-[500px]">
                <div className="w-full border border-slate-500 py-4 h-full overflow-scroll">
                  {types.map((item) => (
                    <NewsType
                      key={item.id}
                      item={item}
                      activeType={activeType}
                      onClick={handleTypeClick}
                    />
                  ))}
                </div>
              </div>
              <div className="md:w-[45%]">
                <div className="mb-6">
                  <p className=" font-bold text-[14px] md:text-[16px]">
                    <span className="rounded-md py-1 px-3 bg-[#F44336] text-white">
                      BREAKING:
                    </span>
                    <span className="text-[#83B82E] py-1 px-3">
                      िल्ली के मंत्री राजकुमार आनंद का इस्तीफा:
                    </span>
                    <span className="text-black">
                      पार्टी भ ोड़ी, कहा- मुझे कहीं से ऑफर नहीं; पिछले साल ED की
                      रेड पड़ी थ
                    </span>
                  </p>
                </div>
                <NewsVideos videoUrl={NewsVideo} />
              </div>
              <div className="md:w-[20%]">
                <div className="flex flex-col items-center gap-4">
                  <NewsItem
                    imageSrc={SingleNewsImg1}
                    text="पतंजलि का माफीनामा खारिज, सुप्रीम कोर्ट ने रामदेव-बालकृष्ण को क्या सुना दिया?"
                  />
                  <NewsItem
                    imageSrc={SingleNewsImg2}
                    text="मंदिर के पास कुत्तों को नॉनवेज खिला भावनाएं भड़काने का आरोप, पता है कोर्ट ने क्या फैसला सुनाया?"
                  />
                </div>
              </div>
            </div>
          </div>
          <img
            src={AdvertiseBanner}
            alt="AdvertiseBanner"
            className="w-full h-[200px] md:h-[350px]"
          />
          <div className="bg-gray-700 py-4 px-4 md:px-32">
            <h1 className="text-center text-white font-bold text-[24px] md:text-[30px]">
              एक मिनट में...
            </h1>
            <div className="py-4 flex flex-wrap justify-around gap-4 md:gap-0">
              <img
                src={ShortNews1}
                alt="short news"
                className="w-[150px] h-[250px] md:h-[300px]"
              />
              <img
                src={ShortNews2}
                alt="short news"
                className="w-[150px] h-[250px] md:h-[300px]"
              />
              <img
                src={ShortNews3}
                alt="short news"
                className="w-[150px] h-[250px] md:h-[300px]"
              />
              <img
                src={ShortNews4}
                alt="short news"
                className="w-[150px] h-[250px] md:h-[300px]"
              />
              <img
                src={ShortNews5}
                alt="short news"
                className="w-[150px] h-[250px] md:h-[300px]"
              />
              <img
                src={ShortNews6}
                alt="short news"
                className="w-[150px] h-[250px] md:h-[300px]"
              />
            </div>
          </div>
          <div className="py-4">
            <TopicDivider title="ख़ास ख़बर" />
          </div>
          <div className="flex flex-col md:flex-row justify-around py-4 px-4 md:px-12 items-center gap-4 md:gap-0">
            <HorizontalNewsItem
              image={HorizontalImage1}
              brandImage={BrandImage}
              brandName="ॲग्रोवन"
              listItem={[" तास आधी", " मिनिटांचे वाचन"]}
              title="अन्वयार्थ - दिवाळीत आनंद मिळावा; डोळे आणि कानांना इजा नको!"
              description="गणेशोत्सव आणि नवरात्र पार पडत नाही तोच दिवाळीचे वेध लागतात. वातावरण उत्सवी आणि उत्साही असते.  आनंद साजरा तर व्हायलाच हवा. मात्र, या उत्साहाचे अतिउत्साहात रूपांतर महागात पडते. गणेशोत्सव मिरवणुकीत डीजेला बंदी असतानाही ते अनेक ठिकाणी वाजवण्यात आले."
              note="संपादकीय"
            />
            <HorizontalNewsItem
              image={HorizontalImage2}
              brandImage={BrandImage}
              brandName="ॲग्रोवन"
              listItem={[" तास आधी", " मिनिटांचे वाचन"]}
              title="अन्वयार्थ - दिवाळीत आनंद मिळावा; डोळे आणि कानांना इजा नको!"
              description="गणेशोत्सव आणि नवरात्र पार पडत नाही तोच दिवाळीचे वेध लागतात. वातावरण उत्सवी आणि उत्साही असते.  आनंद साजरा तर व्हायलाच हवा. मात्र, या उत्साहाचे अतिउत्साहात रूपांतर महागात पडते. गणेशोत्सव मिरवणुकीत डीजेला बंदी असतानाही ते अनेक ठिकाणी वाजवण्यात आले."
              note="संपादकीय"
            />
            <HorizontalNewsItem
              image={HorizontalImage3}
              brandImage={BrandImage}
              brandName="ॲग्रोवन"
              listItem={[" तास आधी", " मिनिटांचे वाचन"]}
              title="अन्वयार्थ - दिवाळीत आनंद मिळावा; डोळे आणि कानांना इजा नको!"
              description="गणेशोत्सव आणि नवरात्र पार पडत नाही तोच दिवाळीचे वेध लागतात. वातावरण उत्सवी आणि उत्साही असते.  आनंद साजरा तर व्हायलाच हवा. मात्र, या उत्साहाचे अतिउत्साहात रूपांतर महागात पडते. गणेशोत्सव मिरवणुकीत डीजेला बंदी असतानाही ते अनेक ठिकाणी वाजवण्यात आले."
              note="संपादकीय"
            />
          </div>
          <div className="py-4">
            <TopicDivider title="संपादकीय" />
          </div>
          <div className="py-4 px-4 md:px-32 flex flex-wrap justify-between items-center gap-4">
            <HeadLines
              title="दक्षिण अमेरिकेचे प्राचीन पृथ्वी संरक्षक"
              subtitle="500 वर्षांहून अधिक काळ, स्थानिक कोगी लोक सापेक्ष एकांतात राहतात."
            />
            <HeadLines
              title="दक्षिण अमेरिकेचे प्राचीन पृथ्वी संरक्षक"
              subtitle="500 वर्षांहून अधिक काळ, स्थानिक कोगी लोक सापेक्ष एकांतात राहतात."
            />
            <HeadLines
              title="दक्षिण अमेरिकेचे प्राचीन पृथ्वी संरक्षक"
              subtitle="500 वर्षांहून अधिक काळ, स्थानिक कोगी लोक सापेक्ष एकांतात राहतात."
            />
            <HeadLines
              title="दक्षिण अमेरिकेचे प्राचीन पृथ्वी संरक्षक"
              subtitle="500 वर्षांहून अधिक काळ, स्थानिक कोगी लोक सापेक्ष एकांतात राहतात."
            />
            <HeadLines
              title="दक्षिण अमेरिकेचे प्राचीन पृथ्वी संरक्षक"
              subtitle="500 वर्षांहून अधिक काळ, स्थानिक कोगी लोक सापेक्ष एकांतात राहतात."
            />
            <HeadLines
              title="दक्षिण अमेरिकेचे प्राचीन पृथ्वी संरक्षक"
              subtitle="500 वर्षांहून अधिक काळ, स्थानिक कोगी लोक सापेक्ष एकांतात राहतात."
            />
            <HeadLines
              title="दक्षिण अमेरिकेचे प्राचीन पृथ्वी संरक्षक"
              subtitle="500 वर्षांहून अधिक काळ, स्थानिक कोगी लोक सापेक्ष एकांतात राहतात."
            />
            <HeadLines
              title="दक्षिण अमेरिकेचे प्राचीन पृथ्वी संरक्षक"
              subtitle="500 वर्षांहून अधिक काळ, स्थानिक कोगी लोक सापेक्ष एकांतात राहतात."
            />
            <HeadLines
              title="दक्षिण अमेरिकेचे प्राचीन पृथ्वी संरक्षक"
              subtitle="500 वर्षांहून अधिक काळ, स्थानिक कोगी लोक सापेक्ष एकांतात राहतात."
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleNews;
