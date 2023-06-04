import React from "react";
import Slider from "react-slick";

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center px-5 border">
          <div>
            <div className="text-6xl font-bold">Tişört</div>
            <div className="text-xl my-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, id
              ducimus. Iusto soluta similique ex incidunt sequi veniam obcaecati
              beatae.
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-100 ">
              İncele
            </div>
          </div>

          <img
            src="https://contents.mediadecathlon.com/p1306727/k$8f5c11a23693ecb09f0f73a556aa2683/sq/8330843.jpg?format=auto&f=500x0"
            alt="ts"
          />
        </div>

        <div className="!flex items-center px-5 border ">
          <div>
            <div className="text-6xl font-bold">Spor Ayakkabısı</div>
            <div className="text-xl my-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, id
              ducimus. Iusto soluta similique ex incidunt sequi veniam obcaecati
              beatae.
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-100 ">
              İncele
            </div>
          </div>

          <img
            src="https://14231c.cdn.akinoncloud.com/products/2019/09/16/49846/090c6101-d824-40c4-99f2-d21d74234243_size480x480_cropCenter.jpg"
            alt="ts2"
          />
        </div>

        <div className="!flex items-center px-5 border ">
          <div>
            <div className="text-6xl font-bold">Saat</div>
            <div className="text-xl my-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, id
              ducimus. Iusto soluta similique ex incidunt sequi veniam obcaecati
              beatae.
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-100 ">
              İncele
            </div>
          </div>

          <img
            src="https://ayb.akinoncdn.com/products/2020/06/15/48979/fe15d134-5c3d-4d9a-8ad0-6ac3872dd7e5_size400x400_quality60_cropCenter.jpg"
            alt="ts3"
          />
        </div>

        <div className="!flex items-center px-5 border">
          <div>
            <div className="text-6xl font-bold">Şort</div>
            <div className="text-xl my-6 ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, id
              ducimus. Iusto soluta similique ex incidunt sequi veniam obcaecati
              beatae. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repudiandae, nemo.
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-100 ">
              İncele
            </div>
          </div>

          <img
            src="https://productimages.hepsiburada.net/s/72/300-443/110000014248255.jpg"
            alt="ts4"
          />
        </div>

        <div className="!flex items-center px-5 border">
          <div>
            <div className="text-6xl font-bold">Yemek Takımı</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam adipisci labore soluta natus consequuntur iste
              voluptatum doloremque nihil accusantium alias harum, velit
              molestias voluptatem rerum.
            </div>
            <div className="text-xl my-5">
              <ul>
                <h1>Ürün Özellikleri </h1>
                <li>Ürün Materyal: Porselen</li>
                <li>12 Adet Servis Tabağı 27 Cm</li>
                <li>12 Adet Pasta Tabağı 22 Cm</li>
                <li>12 Adet Cukur Tabak 22 Cm</li>
                <li>12 Adet Çorba Kasesi 14 Cm</li>
                <li>1 Adet Çorbalık</li>
                <li>1 Adet Çorbalık Kapağı</li>
                <li className="text-red-600">
                  NOT : Bulaşık Makinesinde Kullanıma uygundur.
                </li>
              </ul>
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-100 ">
              İncele
            </div>
          </div>

          <img
            src="https://cdn.ikea.com.tr/urunler/500_500/PE828005.jpg"
            alt="ts6"
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
