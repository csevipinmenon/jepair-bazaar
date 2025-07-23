import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="w-full dark:bg-[#343a46] dark:text-[#f2f2f2]">
      <div className="w-full ">
        <div className="w-full">
          <div className="flex justify-center items-center  w-full">
            
            <img src="about.jpg" className="w-auto h-[400px] rounded-xl " />
          </div>
          <div className="w-full  flex justify-between mt-2">
            <div className="mt-5 ml-10 ">
              <video width="640" height="360" controls className="rounded-lg" >
                <source src="jepairVideo.mp4" type="video/mp4"  />
              </video>
              <span>
                <img
                  src="jepairImage.jpg"
                  className="mt-20 rounded-lg "
                  width="640"
                  height="360"
                  
                />
              </span>
            </div>
            <div className="">
              <Link to={"/about"}>
                <img src="jepairNews.jpg" height={"360"} width={"640"}  />
              </Link>
            </div>
          </div>
          <div className=" mt-10 text-center">
            <h3 className="font-extrabold text-3xl text-[#2d2e82] dark:text-[#f2f2f2] block">
              What is <span className="text-[#ff7f00]">Jepair</span>{" "}
              <span className="text-[#2d2e82] dark:text-blue-300"> Bazaar?</span>
            </h3>
            <div className="mt-7 ">
              <p className="text-center font-semibold  lg:ml-52 lg:mr-52 ml-10 mr-10 leading-[2.5] text-[#2d2e82] dark:text-[#f2f2f2] ">
                As India’s largest service provider,{" "}
                <span className="text-[#ff7f00] font-bold">Jepair</span>{" "}
                <span className="text-[#2d2e82] dark:text-blue-300 font-bold"> Bazaar</span> is one
                of the most trustable destinations for your Home Appliance
                Repair Service. At{" "}
                <span className="text-[#ff7f00] font-bold">Jepair</span>{" "}
                <span className="text-[#2d2e82] dark:text-blue-300 font-bold"> Bazaar</span> we
                have a team of experienced technicians who visit your location
                and repair your home appliance at your doorstep. We service and
                repair a wide range of home appliances which contains AC Repair
                Service, Refrigerator Repair Service, Microwaves Repair Service,
                Washing Machine Repair Service, LED TV Repair Service, Inverter
                Repair Service, RO Repair Service, CCTV Repair Service, and many
                more. Along with home appliance repair and services.We also deal
                in Cleaning and Pest Control services like Pest Control, Car
                Cleaning, Bathroom Cleaning, and Water Tank Cleaning. In
                Contractor Services,{" "}
                <span className="text-[#ff7f00] font-bold">Jepair</span>{" "}
                <span className="text-[#2d2e82] dark:text-blue-300 font-bold"> Bazaar</span> deals
                in Interior Design, Carpet Flooring, Steel Railing, False
                Ceiling, House Construction, and Painting Contractor. Now Jepair
                Bazar also provides Beauty, Spa, Bridal Make-Up Service, laundry
                service and,Vehicle Repair Service.
              </p>
              <div className="flex justify-center items-center">
                <video
                  width="140"
                  height=""
                  autoPlay
                  muted
                  loop
                  controls
                  
                  className="border border-blue-400 rounded-lg"
                >
                  <source src="jepairIntro.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <img src="" />
          </div>
          <div className="mt-10 text-center border border-t-2 dark:border-gray-800">
            <h3 className="font-extrabold text-3xl text-[#2d2e82] dark:text-blue-300 block  mt-7 ">
              Why a <span className="text-[#ff7f00] font-bold">Jepair</span>{" "}
              <span className="text-[#2d2e82]  dark:text-blue-300 font-bold"> Bazaar?</span>
            </h3>
            <p className="mt-7 font-semibold lg:ml-52 lg:mr-52 ml-10 mr-10 leading-[2.5] text-[#2d2e82] dark:text-[#f2f2f2] mb-6">
              We throw away vast amounts of stuff. Even things with almost
              nothing wrong, and which could get a new lease on life after a
              simple repair. The trouble is, lots of people have forgotten that
              they can repair things themselves. Especially younger generations
              no longer know how to do that. Knowing how to make repairs is a
              skill quickly lost. This is a threat to a sustainable future and
              to the circular economy, in which raw materials can be reused
              again and again. That’s why there’s a{" "}
              <span className="text-[#ff7f00] font-bold">Jepair</span>{" "}
              <span className="text-[#2d2e82] dark:text-blue-300 font-bold"> Bazaar</span>! People
              with repair skills get the appreciation they deserve. Invaluable
              practical skills are passed on. Things are being used for longer
              and don’t have to be thrown away. This reduces the volume of raw
              materials and energy needed to make new products. It cuts CO2
              emissions, for example, because manufacturing new products and
              recycling old ones causes CO2 to be released. The{" "}
              <span className="text-[#ff7f00] font-bold">Jepair</span>{" "}
              <span className="text-[#2d2e82] dark:text-blue-300 font-bold"> Bazaar </span>
              teaches people to see their possessions in a new light. And, once
              again, to appreciate their value.This is essential to kindle
              people’s enthusiasm for a sustainable society.
            </p>
          </div>
          <div className="mt-10 text-center">
            <h3 className="font-extrabold text-3xl text-[#2d2e82]  dark:text-blue-300 block ">
              Who thought up the idea?
            </h3>
            <div className="flex overflow-hidden justify-between  mt-10">
              <div>
                <img
                  src="vipin.jpg"
                  height={"80"}
                  width={"260"}
                  className=" rounded-xl shadow-lg hover:translate-y-1.5"
                />
                <h3 className="mt-7 font-bold text-[#ff7f00]">
                  Mr. Vipin Kumar
                </h3>
              </div>
              <div>
                <img
                  src="saurabh.jpg"
                  height={"80"}
                  width={"300"}
                  className="rounded-xl shadow-lg hover:translate-y-1.5"
                />
                <h3 className="mt-6 font-bold text-[#ff7f00]">
                  Mr. Saurabh Paswan
                </h3>
              </div>
              <div>
                <img
                  src="vishal.jpg"
                  height={"80"}
                  width={"180"}
                  className="rounded-xl shadow-lg hover:translate-y-1.5"
                />
                <h3 className="mt-3 font-bold text-[#ff7f00]">
                  Mr. Vishal Arya
                </h3>
              </div>
            </div>
            <p></p>
          </div>
          <div className="mt-11 text-center border border-t-2 dark:border-gray-800">
            <h3 className="font-extrabold text-3xl text-[#2d2e82] dark:text-blue-300 block mt-7 ">
              Worldwide movement!
            </h3>
            <p className="mt-10 mb-7 font-semibold lg:ml-52 lg:mr-52 ml-10 mr-10 leading-[2.5] text-[#2d2e82] dark:text-[#f2f2f2]">
              <span className="text-[#ff7f00] font-bold">Jepair</span>{" "}
              <span className="text-[#2d2e82]  dark:text-blue-300 font-bold"> Bazaar</span>,
              meanwhile, form a worldwide movement that strives to preserve
              repair skills in society and to promote more repairable products.
              Besides India, there are{" "}
              <span className="text-[#ff7f00] font-bold">Jepair</span>{" "}
              <span className="text-[#2d2e82] dark:text-blue-300 font-bold"> Bazaar</span> in
              Belgium, Germany, France, the United Kingdom, the United States
              and in dozens of other countries around the world.{" "}
              <span className="text-[#ff7f00] font-bold">Jepair</span>
              <span className="text-[#2d2e82] dark:text-blue-300 font-bold"> Bazaar </span>
              has even made its way to India and Japan!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
