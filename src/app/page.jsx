import { houseData, services, testimonials } from "@/data/dummydata";
import { text } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowRight,
  faBed,
  faChevronLeft,
  faChevronRight,
  faRuler,
  faSearch,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="bg-[#FFF7F0] w-full h-full pt-5">
        <section className="w-full h-screen flex flex-col items-center gap-6 px-2 md:flex-row lg:pl-32 md:pl-10">
          <div className="w-full flex flex-col gap-2 xl:w-[50%] relative">
            <h1 className="text-[25px] font-semibold text-[#1F1F1F] md:text-[40px] xl:text-[50px]">
              Discover your new home with{" "}
              <span className="text-[#FF8000]">Дома</span> faster than ever
            </h1>
            <p className="text-[14px] font-normal text-[#8C8C8C] md:text-[18px]">
              Find houses faster than you can fix your bills and budget
            </p>
          </div>
          <div className="h-full w-[90%]">
            <Image
              src={"/assets/hero-image.jpeg"}
              alt=""
              width={300}
              height={400}
              className="w-full h-full object-cover"
            />
            <div
              style={{
                boxShadow: "0px 4px 74px 0px rgba(255, 128, 0, 0.10)",
              }}
              className="w-full bg-[#FFFEFC] px-2 py-3 rounded-[16px] grid grid-cols-2 gap-8 absolute md:bottom-[-20%] lg:bottom-[-16%] right-0 md:w-[90vw] md:grid-cols-4 md:py-7 md:px-5 "
            >
              <div className="flex flex-col items-start col-span-1">
                <select
                  className="text-[#8C8C8C] text-[14px] md:text-[18px] font-normal bg-transparent"
                  name=""
                  id=""
                >
                  <option value="">Location</option>
                </select>
                <h3 className="text-[#1F1F1F] text-[15px] md:text-[21px] font-normal">
                  Kharkiv
                </h3>
              </div>
              <div className="flex flex-col items-start col-span-1">
                <select
                  className="text-[#8C8C8C] text-[14px] md:text-[18px] font-normal bg-transparent"
                  name=""
                  id=""
                >
                  <option value="">Property Type</option>
                </select>
                <h3 className="text-[#1F1F1F] text-[15px] md:text-[21px] font-normal">
                  Apartment
                </h3>
              </div>
              <div className="flex flex-col items-start col-span-1">
                <select
                  className="text-[#8C8C8C] text-[14px] md:text-[18px] font-normal bg-transparent"
                  name=""
                  id=""
                >
                  <option value="">Price Range</option>
                </select>
                <h3 className="text-[#1F1F1F] text-[15px] md:text-[21px] font-normal">
                  ₴3000 - 6000
                </h3>
              </div>
              <button className="rounded-[16px] bg-[#FF8000] w-[40px] h-[40px] flex flex-col justify-center items-center">
                <FontAwesomeIcon
                  icon={faSearch}
                  className="text-[#FFFEFC] w-[18px] h-[18px]"
                  role="button"
                />
              </button>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-9 px-2 mb-20 md:ml-10 lg:ml-32 md:p-0 mt-48">
          <div className="flex gap-4 items-center justify-between">
            <h1 className="text-[#1F1F1F] text-[20px] font-semibold md:text-[31px]">
              New listings
            </h1>
            <div className="flex items-center gap-3">
              <button className="border-[#8C8C8C] border rounded-[8px] w-[20px] h-[20px] flex justify-center items-center">
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className="text-[#8C8C8C] w-[12px] h-[12px]"
                  role="button"
                />
              </button>
              <button className="border-[#8C8C8C] border rounded-[8px] w-[20px] h-[20px] flex justify-center items-center">
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="text-[#8C8C8C] w-[12px] h-[12px]"
                  role="button"
                />
              </button>
            </div>
          </div>
          <div className="flex items-center overflow-x-scroll gap-6 w-full">
            {houseData.map((data, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col gap-3 shrink-0 w-fit h-fit bg-[#FFFEFC] rounded-[20px] p-3 md:w-fit"
                >
                  <Image
                    src={data.imageSrc}
                    alt=""
                    width={300}
                    height={210}
                    className="rounded-[16px] h-[210px]"
                  />
                  <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-1">
                      <span className="text-[#8C8C8C] text-[14px] md:text-[18px] font-normal">
                        {data.location}
                      </span>
                      <h4 className="text-[#1F1F1F] text-[15px] md:text-[20px] font-medium">
                        {data.name}
                      </h4>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <FontAwesomeIcon
                            icon={faRuler}
                            className="w-[15px] h-[15px] text-[#8C8C8C]"
                          />
                          <p className="text-[#1F1F1F] text-[10px] md:text-[16px] font-normal">
                            {data.distance}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <FontAwesomeIcon
                            icon={faBed}
                            className="w-[15px] h-[15px] text-[#8C8C8C]"
                          />
                          <p className="text-[#1F1F1F] text-[10px] md:text-[16px] font-normal">
                            {data.roomNumber}
                          </p>
                        </div>
                      </div>
                      <span className="text-[#1F1F1F] text-[15px] md:text-[21px] font-medium">
                        {data.price}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="flex flex-col items-center gap-10 px-2 mb-20 lg:px-32 md:px-10">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-[25px] text-[#262626] font-semibold md:text-[31px]">
              Our Services
            </h1>
            <p className="text-[14px] text-[#8C8C8C] font-normal md:text-[18px]">
              Here is how Дома can help you
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 w-full px-10 md:grid-cols-4 md:justify-items-center">
            {services.map((serve, index) => {
              return (
                <div
                  key={index}
                  className="w-full h-[170px] bg-[#FFFEFC] rounded-[16px] flex flex-col justify-center items-center gap-2 p-3 xl:w-[75%]"
                >
                  <Image
                    src={serve.icon}
                    width={50}
                    height={50}
                    className="w-[50px] h-[50px]"
                    alt=""
                  />
                  <p className="text-[14px] text-[#262626] font-normal md:text-[16px] px-3 w-[150px] md:w-full text-center">
                    {serve.content}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="flex flex-col items-center gap-10 px-2 mb-20 ">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-[25px] text-[#262626] font-semibold md:text-[31px]">
              Testimonials
            </h1>
            <p className="text-[14px] text-[#8C8C8C] font-normal md:text-[18px]">
              Here is what our clients say about us
            </p>
          </div>
          <div className="flex items-center overflow-x-scroll w-full gap-6  md:justify-center md:items-center md:pl-52 lg:pl-0">
            {testimonials.map((test, index) => {
              return (
                <div
                  key={index}
                  className="w-fit h-[270px] bg-[#FFFEFC] rounded-[16px] flex flex-col justify-between gap-5 p-3 shrink-0 md:w-[300px] md:h-[300px]"
                >
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((_, index) => {
                      return (
                        <FontAwesomeIcon
                          icon={faStar}
                          key={index}
                          className="text-[#FFE500] w-[15px] h-[15px]"
                        />
                      );
                    })}
                  </div>
                  <p className="text-[#8C8C8C] text-[14px] font-normal md:text-[16px]">
                    {test.content}
                  </p>
                  <div className="flex items-center gap-3">
                    <Image
                      src={test.imageSrc}
                      alt={test.name}
                      width={60}
                      height={60}
                      className="w-[70px] h-[70px] md:w-[50px] md:h-[50px] rounded-full"
                    />
                    <h2 className="text-[#8C8C8C] text-[14px] font-normal md:text-[16px]">
                      {test.name}
                    </h2>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex items-center gap-3">
            <button className="border-[#8C8C8C] border rounded-[8px] w-[20px] h-[20px] flex justify-center items-center">
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="text-[#8C8C8C] w-[12px] h-[12px]"
                role="button"
              />
            </button>
            <button className="border-[#8C8C8C] border rounded-[8px] w-[20px] h-[20px] flex justify-center items-center">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-[#8C8C8C] w-[12px] h-[12px]"
                role="button"
              />
            </button>
          </div>
        </section>

        <section className="mb-20 w-full h-full md:px-10 lg:px-32">
          <section className="property flex flex-col justify-center items-center px-4 lg:items-end">
            <div className="flex flex-col gap-3">
              <h1 className="text-[#FFFEFC] font-semibold text-[25px] md:text-[40px] lg:w-[340px]">
                Want to rent your property?
              </h1>
              <p className="text-[#FFFEFC] font-medium text-[14px] md:text-[18px]">
                Create a free offer & contact <br /> interested tenants in 24
                hours
              </p>
              <button className="flex items-center bg-[#FF8000] w-fit p-2 rounded-[8px]">
                <span className="text-[#FFFEFC] text-[14px] md:text-[18px] font-medium">
                  List your property
                </span>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-[#FFFEFC] w-[25px] h-[15px]"
                />
              </button>
            </div>
          </section>
        </section>
      </section>
    </>
  );
}
