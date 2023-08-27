import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import campaignData from "api/banners.json";
import Title from "./ui/Title";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function NextBtn({ onClick }) {
  return (
    <button className={`text-brand-color absolute top-1/2 -right-6 -translate-y-1/2`} onClick={onClick}>
      <IoIosArrowForward size={22}/>
    </button>
  );
}
function PrevBtn({ onClick }) {
  return (
    <button className={`text-brand-color absolute top-1/2 -left-6 -translate-y-1/2`} onClick={onClick}>
      <IoIosArrowBack size={22}/>
    </button>
  );
}

function Campaigns() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    setCampaigns(campaignData);
  }, []);

  const settings = {
    dots: false,
    speed: 500,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
  };

  return (
    <div className="container mx-auto py-8">
      <Title>Kampanyalar</Title>
      <Slider className="-mx-2" {...settings}>
        {campaigns.length &&
          campaigns.map((campaign) => (
            <div key={campaign.id}>
              <picture className="block px-2">
                <img src={campaign.image} alt="" className="rounded-lg" />
              </picture>
            </div>
          ))}
      </Slider>
    </div>
  );
}

export default Campaigns;
