import { useState } from "react";
import Header from "../../components/common/(header)/HeaderHome";
// import background from "../../../../assets/images/bg.png";
import { IconMuiten, IconTrain } from "../../assets/imgs";
import Footer from "../../components/common/(footer)/footerHome";

const Home = () => {
  const [formattedDate, setFormattedDate] = useState("");

  const handleDateChange = (event) => {
    const inputDate = new Date(event.target.value);
    const options = {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric",
    };
    const formatted = inputDate.toLocaleDateString("en-GB", options);
    const formattedDisplay = formatted.replace(/(\d+)(?:st|nd|rd|th)/, "$1");
    setFormattedDate(formattedDisplay);
  };

  return (
    <>
      <div className="m-auto min-w-[1512px] h-[982px]">
        <div className="container m-auto w-full h-[803px] bg-cover bg-[url('assets/imgs/bg.png')]">
          <Header />
          <div className="container absolute left-64 text-left text-7xl w-[500px] mt-48 [font-family:'SVN-Biennale-Light' ] font-light">
            <p>Hello!</p>
            <p>Where are</p>
            <p>
              you{" "}
              <span className="[font-family:'SVN-Biennale-SemiBold',Helvetica] font-semibold text-[#4d46fa]">
                flying
              </span>{" "}
              to ...
            </p>
          </div>
        </div>
        <div className="box-border shadow-md rounded-lg w-[1230px] h-[224px] bg-white m-auto mt-[-170px] p-3">
          <div className="flex flex-col space-y-4">
            <div className="flex h-[50px]">
              <div className="flex items-center mb-[0.125rem] mr-4 min-h-[1.5rem] pl-[1.5rem]">
                <input
                  id="draft"
                  className="peer/draft w-[30px] h-full"
                  type="radio"
                  name="status"
                  checked
                />
                <label
                  htmlFor="draft"
                  className="peer-checked/draft:text-sky-500 ml-[0.5rem]"
                >
                  One way / Round-trip
                </label>
              </div>
              <div className="flex items-center mb-[0.125rem] mr-4 min-h-[1.5rem] pl-[1.5rem]">
                <input
                  id="published"
                  className="peer/draft w-[30px] h-full"
                  type="radio"
                  name="status"
                />
                <label
                  htmlFor="published"
                  className="peer-checked/published:text-sky-500 ml-[0.5rem]"
                >
                  Multi-city
                </label>
              </div>
              <div className="flex items-center mb-[0.125rem] mr-4 min-h-[1.5rem] pl-[1.5rem]">
                <select className="border-0 outline-none ">
                  <option>
                    <p className="text-blue-400" style={{ display: "inline" }}>
                      02{" "}
                    </p>
                    Adult, 01 children
                  </option>
                </select>
              </div>
              <div className="flex items-center mb-[0.125rem] mr-4 min-h-[1.5rem] pl-[1.5rem]">
                <select className="border-0 outline-none ">
                  <option>Business Class</option>
                </select>
              </div>
            </div>
            <div className="flex flex-row space-x-4 h-[100px] relative">
              <div className="basis-1/4 box-border rounded-lg border-solid border-2 h-full bg-white m-auto">
                <div className="md:flex p-1">
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <div className="text-gray-600">FROM</div>
                    <a
                      href="/get-started"
                      className="block mt-1 text-indigo-600 font-bold"
                    >
                      Da Nang
                    </a>
                    <p className="mt-2 font-bold text-gray-600">
                      Quang Nam, Viet Nam
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-full border-solid border-2 w-[60px] h-[60px]  bg-white absolute left-[255px]  top-1/2 transform -translate-y-1/2 justify-items-center">
                <img className="h-6 mt-4 m-auto" src={IconTrain} alt="" />
              </div>
              <div className="basis-1/4 box-border rounded-lg border-solid border-2 h-full bg-white m-auto">
                <div className="md:flex p-1">
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <div className="text-gray-600">TO</div>
                    <a
                      href="/get-started"
                      className="block mt-1 text-indigo-600 font-bold"
                    >
                      Ho Chi Minh
                    </a>
                    <p className="mt-2 font-bold text-gray-600">Viet Nam</p>
                  </div>
                </div>
              </div>
              <div className="basis-2/4 box-border flex rounded-lg border-solid border-2 h-full bg-white m-auto ">
                <div className="md:flex p-1">
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <div className="uppercase text-gray-600">Departure</div>
                    <div className="flex items-center">
                      <input
                        type="date"
                        title={formattedDate}
                        onChange={handleDateChange}
                      />
                    </div>
                    <p className="mt-2 font-bold text-gray-600">Viet Nam</p>
                  </div>
                </div>
                <div className="md:flex p-1">
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <div className="uppercase text-gray-600">return</div>
                    <div className="flex items-center">
                      <input
                        type="date"
                        title={formattedDate}
                        onChange={handleDateChange}
                      />
                    </div>
                    <p className="mt-2 font-bold text-gray-600">Viet Nam</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full hidden lg:flex lg:flex-1 flex-col-reverse items-end">
              <button
                type="submit"
                className="w-[245px] h-[60px] bg-[#4D46FA] rounded-lg p-2 text-white flex items-center justify-center"
              >
                Booking now
                <img className="h-6 ml-2" src={IconMuiten} alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className="bg-[#F4F2F9] w-[1283px] h-[179px] ml-auto"></div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
