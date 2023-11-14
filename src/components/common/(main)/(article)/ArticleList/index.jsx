import { IconAirlines } from "../../../../../assets/imgs";
import { IconTime } from "../../../../../assets/imgs";
import { IconSuitcase } from "../../../../../assets/imgs";
import { IconCutlery } from "../../../../../assets/imgs";

function ArticleList() {
  return (
    <>
      <div className=" w-full flex justify-center py-3">
        <div className="flex space-x-3 ">
          <div className="p-[7px]">
            <p className="text-sm uppercase opacity-40  font-semibold [font-family:'SVN-Biennale-SemiBold',Helvetica]">
              Filter
            </p>
          </div>
          <div className="">
            <select className="w-[120px] h-[34px] shrink-0 text-xs rounded-xl bg-white">
              <option value="">Transit</option>
            </select>
            <select className="w-[120px] h-[34px] shrink-0 text-xs rounded-xl bg-white">
              <option value="">Time</option>
            </select>
            <select className="w-[120px] h-[34px] shrink-0 text-xs rounded-xl bg-white">
              <option value="">Ariline</option>
            </select>
            <select className="w-[120px] h-[34px] shrink-0 text-xs rounded-xl bg-white">
              <option value="">Low Price</option>
            </select>
          </div>
        </div>
      </div>

      <div className="w-[890px] max-h-[331px] bg-slate-400 rounded-xl flex m-auto justify-center">
        <div>
          <div className="flex">
            <img
              src={IconAirlines}
              className="w-[30px] h-[30px] ml-3 my-5 rounded-md border-spacing-1"
              alt=""
            />
            <h1 className="text-sm my-6 ml-3 tracking-wider uppercase [font-family:'SVN-Biennale-SemiBold',Helvetica] font-semibold">
              Bamboo Airways
            </h1>
          </div>
          {/* <div className="flex my-3">
            <div>
              <input class="sr-only peer" type="radio" value="FlightDetail" name="answer" id="answer_FlightDetail"></input>
              <label className="uppercase m-3 font-bold opacity-50 focus:outline-none [font-family:'SVN-Biennale-SemiBold',Helvetica] text-xs peer-checked:text-[#4D46FA]" for="answer_FlightDetail">
                Flight detail
              </label>
              <div class="absolute hidden w-100 h-5 peer-checked:block top-5 right-3">
                b
              </div>
            </div>

            <div >
              <input class="sr-only peer" type="radio" value="FlightDetail" name="answer" id="answer_FareInfo"></input>
              <label className="uppercase m-3 font-bold opacity-50 focus:outline-none [font-family:'SVN-Biennale-SemiBold',Helvetica] text-xs peer-checked:text-[#4D46FA]" for="answer_FareInfo">
                fare info
              </label>
              <div class="absolute hidden w-100 h-5 peer-checked:block top-5 right-3">
                🤔
              </div>
            </div>

          </div> */}
          <div></div>
        </div>
        <div className="ml-8 my-2">
          <div className="flex">
            <div className="m-1">
              <p className="w-10 h-5 ml-3 font-semibold">21:40</p>
              <div className="py-1 px-2 ml-2 m-1 bg-[#4D46FA1A] gap-[10px] rounded-[100px]">
                DAD
              </div>
            </div>
            <div className="m-1">
              <p className="text-sm text-center font-normal">1h 30m</p>
              <img src={IconTime} alt="" className="w-[91px] h-2" />
              <p className="font-normal text-center text-xs">Direct</p>
            </div>
            <div className="m-1">
              <p className="w-10 h-5 ml-3 font-semibold">23:10</p>
              <div className="py-1 px-2 ml-2 m-1 bg-[#4D46FA1A] gap-[10px] rounded-[100px]">
                DAD
              </div>
            </div>
          </div>
        </div>

        <div className="flex ml-5 my-4 ">
          <div>
            <img src={IconSuitcase} alt="" className="w-[14px] h-[14px]" />
            <img src={IconCutlery} alt="" className="w-[14px] h-[14px] my-3" />
          </div>
          <div>
            <p className="font-normal text-sm ml-1">
              Baggage <strong className=" text-sm text-[#4D46FA]">20kg </strong>
            </p>
            <p className="font-normal text-sm ml-1 my-1">
              In-flight
              <strong className=" text-sm text-[#4D46FA]"> Meal </strong>
            </p>
          </div>
          <div>
            <p className="font-normal ml-5 opacity-50 line-through">
              1,326,000 vnd
            </p>
            <p className="text-[#F06336] font-semibold ml-5">1,322,000 vnd</p>
          </div>
        </div>
        <div className="flex ml-12 my-5 ">
          <button className="w-[82px] h-[33px] bg-[#F06336] rounded-xl gap-[10px] text-white px-[15px] py-[6px] font-semibold text-sm">
            Choose
          </button>
        </div>
      </div>

      <div className="bg-slate-500 w-[890px] h-[207px] flex m-auto justify-center">
        <div>
          <div>
            <h1 className="font-semibold text-sm uppercase [font-family:'SVN-Biennale-SemiBold',Helvetica] ml-3 ">
              Conditions
            </h1>
          </div>
          <div>
            <div className="flex">
              <img
                src={IconAirlines}
                className="w-[30px] h-[30px] ml-3 my-4 rounded-md border-spacing-1"
                alt=""
              />
              <div className="ml-2 my-3">
                <h1 className="text-sm tracking-wider uppercase [font-family:'SVN-Biennale-SemiBold',Helvetica] font-semibold">
                  Bamboo Airways
                </h1>
                <p className="font-normal text-xs [font-family:'SVN-Biennale-SemiBold',Helvetica]">
                  QH-183 . Economy
                </p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="ml-3">
              <p className="font-normal text-sm ">Da Nang</p>
              <p className="font-normal text-xs text-[#4D46FA]">Economy</p>
            </div>

            <img src={IconTime} alt="" className="w-[91px] h-2 m-2" />
            <p>Ho Chi Minh City</p>
          </div>
          <div>
            {" "}
            <p className="font-normal text-xs m-3">Non - Refundable</p>
          </div>
        </div>

        <div className="ml-24">
          <div>
            <h1 className="font-semibold text-sm [font-family:'SVN-Biennale-SemiBold',Helvetica] uppercase">
              price details
            </h1>
          </div>
          <div className="flex">
            <div className="my-3">
              <p className="font-normal my-1 text-sm"> Adult Basic Fare (x1)</p>
              <p className="font-normal  my-1 text-sm">Tax</p>
              <p className="font-normal  my-1 text-sm">Regular Total Price</p>
              <p className="font-normal  my-1 text-sm text-[#F06336] ">Save</p>
            </div>
            <div className="my-3 ml-36">
              <p className="font-normal my-1 text-sm"> 1,326,000 vnd</p>
              <p className="font-normal  my-1 text-sm">included</p>
              <p className="font-normal  my-1 text-sm">1,326,000 vnd</p>
              <p className="font-normal  my-1 text-sm ">-4,000 vnd</p>
            </div>
          </div>

          <div>
            <hr className="opacity-20" />
            <div className="flex">
              <div className="my-3">
                <p className="font-normal my-1 text-sm">You pay</p>
              </div>
              <div className="my-3 ml-56">
                <p className="font-normal my-1 text-sm text-[#F06336]">
                  1,322,000 vnd
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[890px] max-h-[331px] bg-slate-400 rounded-xl  m-auto justify-center">
        <div className="w-[890px] h-[124px] bg-slate-400 rounded-xl flex ">
          <div>
            <div className="flex">
              <img
                src={IconAirlines}
                className="w-[30px] h-[30px] ml-3 my-5 rounded-md border-spacing-1"
                alt=""
              />
              <h1 className="text-sm my-6 ml-3 tracking-wider uppercase [font-family:'SVN-Biennale-SemiBold',Helvetica] font-semibold">
                Bamboo Airways
              </h1>
            </div>

            <div></div>
          </div>
          <div className="ml-8 my-2">
            <div className="flex">
              <div className="m-1">
                <p className="w-10 h-5 ml-3 font-semibold">21:40</p>
                <div className="py-1 px-2 ml-2 m-1 bg-[#4D46FA1A] gap-[10px] rounded-[100px]">
                  DAD
                </div>
              </div>
              <div className="m-1">
                <p className="text-sm text-center font-normal">1h 30m</p>
                <img src={IconTime} alt="" className="w-[91px] h-2" />
                <p className="font-normal text-center text-xs">Direct</p>
              </div>
              <div className="m-1">
                <p className="w-10 h-5 ml-3 font-semibold">23:10</p>
                <div className="py-1 px-2 ml-2 m-1 bg-[#4D46FA1A] gap-[10px] rounded-[100px]">
                  DAD
                </div>
              </div>
            </div>
          </div>

          <div className="flex ml-5 my-4 ">
            <div>
              <img src={IconSuitcase} alt="" className="w-[14px] h-[14px]" />
              <img
                src={IconCutlery}
                alt=""
                className="w-[14px] h-[14px] my-3"
              />
            </div>
            <div>
              <p className="font-normal text-sm ml-1">
                Baggage{" "}
                <strong className=" text-sm text-[#4D46FA]">20kg </strong>
              </p>
              <p className="font-normal text-sm ml-1 my-1">
                In-flight
                <strong className=" text-sm text-[#4D46FA]"> Meal </strong>
              </p>
            </div>
            <div>
              <p className="font-normal ml-5 opacity-50 line-through">
                1,326,000 vnd
              </p>
              <p className="text-[#F06336] font-semibold ml-5">1,322,000 vnd</p>
            </div>
          </div>
          <div className="flex ml-12 my-5 ">
            <button className="w-[82px] h-[33px] bg-[#F06336] rounded-xl gap-[10px] text-white px-[15px] py-[6px] font-semibold text-sm">
              Choose
            </button>
          </div>
        </div>

        <div>
          <div>
            <div className="  ">
              <input
                className="sr-only peer/FlightDetail"
                type="radio"
                value="FlightDetail"
                name="answer"
                id="answer_FlightDetail"
              ></input>
              <label
                className="uppercase  m-3 font-bold opacity-50 focus:outline-none [font-family:'SVN-Biennale-SemiBold',Helvetica] text-xs peer-checked/FlightDetail:text-[#4D46FA]"
                form="answer_FlightDetail"
              >
                Flight detail
              </label>
              <input
                className="sr-only peer/FareInfo"
                type="radio"
                value="FareInfo"
                name="answer"
                id="answer_FareInfo"
              ></input>
              <label
                className="uppercase m-3 font-bold opacity-50 focus:outline-none [font-family:'SVN-Biennale-SemiBold',Helvetica] text-xs peer-checked/FareInfo:text-[#4D46FA]"
                form="answer_FareInfo"
              >
                fare info
              </label>

              <div className="bg-slate-500 w-[890px] h-[207px] rounded-xl hidden peer-checked/FlightDetail:block"></div>

              <div className="bg-slate-500 w-[890px] h-[207px] rounded-xl hidden  peer-checked/FareInfo:block">
                <div className="flex">
                  <div>
                    <div>
                      <h1 className="font-semibold text-sm uppercase [font-family:'SVN-Biennale-SemiBold',Helvetica] ml-3 ">
                        Conditions
                      </h1>
                    </div>
                    <div>
                      <div className="flex">
                        <img
                          src={IconAirlines}
                          className="w-[30px] h-[30px] ml-3 my-4 rounded-md border-spacing-1"
                          alt=""
                        />
                        <div className="ml-2 my-3">
                          <h1 className="text-sm tracking-wider uppercase [font-family:'SVN-Biennale-SemiBold',Helvetica] font-semibold">
                            Bamboo Airways
                          </h1>
                          <p className="font-normal text-xs [font-family:'SVN-Biennale-SemiBold',Helvetica]">
                            QH-183 . Economy
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="ml-3">
                        <p className="font-normal text-sm ">Da Nang</p>
                        <p className="font-normal text-xs text-[#4D46FA]">
                          Economy
                        </p>
                      </div>

                      <img src={IconTime} alt="" className="w-[91px] h-2 m-2" />
                      <p>Ho Chi Minh City</p>
                    </div>
                    <div>
                      {" "}
                      <p className="font-normal text-xs m-3">
                        Non - Refundable
                      </p>
                    </div>
                  </div>

                  <div className="ml-24">
                    <div>
                      <h1 className="font-semibold text-sm [font-family:'SVN-Biennale-SemiBold',Helvetica] uppercase">
                        price details
                      </h1>
                    </div>
                    <div className="flex">
                      <div className="my-3">
                        <p className="font-normal my-1 text-sm">
                          {" "}
                          Adult Basic Fare (x1)
                        </p>
                        <p className="font-normal  my-1 text-sm">Tax</p>
                        <p className="font-normal  my-1 text-sm">
                          Regular Total Price
                        </p>
                        <p className="font-normal  my-1 text-sm text-[#F06336] ">
                          Save
                        </p>
                      </div>
                      <div className="my-3 ml-36">
                        <p className="font-normal my-1 text-sm">
                          {" "}
                          1,326,000 vnd
                        </p>
                        <p className="font-normal  my-1 text-sm">included</p>
                        <p className="font-normal  my-1 text-sm">
                          1,326,000 vnd
                        </p>
                        <p className="font-normal  my-1 text-sm ">-4,000 vnd</p>
                      </div>
                    </div>

                    <div>
                      <hr className="opacity-20" />
                      <div className="flex">
                        <div className="my-3">
                          <p className="font-normal my-1 text-sm">You pay</p>
                        </div>
                        <div className="my-3 ml-56">
                          <p className="font-normal my-1 text-sm text-[#F06336]">
                            1,322,000 vnd
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ArticleList;
