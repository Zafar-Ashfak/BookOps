import React from "react";
import BoardImg from "../../assets/website/board.png";
import PlayStoreImg from "../../assets/website/play_store.png";
import AppStoreImg from "../../assets/website/app_store.png";

const BannerImg = {
  backgroundImage: `url(${BoardImg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

function AppStoreBanner() {
  return (
    <div
      className="bg-gray-100 dark:bg-gray-800
       text-white py-10"
      style={BannerImg}>
      <div className="container">
        <div data-aos="fade-up" data-aos-duration="300" className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold ">
            Read Books at your fingertips
          </h1>
          <div
            className="flex flex-wrap justify-center items-center gap-4">
            <a href="#">
              <img
                src={PlayStoreImg}
                alt=""
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px] lg:-ml-20"
              />
            </a>
            <a href="#">
              <img
                src={AppStoreImg}
                alt=""
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppStoreBanner;
