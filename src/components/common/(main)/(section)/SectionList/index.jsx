import { Icon2Chiu } from "../../../../../assets/imgs";

function SectionList() {
  return (
    <>
    <div class="flex flex-row py-4 container mx-auto max-w-screen-xl h-auto ">
    <div class="flex space-x-14 ">
        <div className="max-w-screen-sm">
          <h3 className="text-bg-header-list text-base [font-family:'SVN-Biennale-SemiBold',Helvetica] font-bold">Da Nang (DAD)</h3>
          <h6 className="font-normal">Fri, 22 Mar, 2022</h6>
        </div>
        <img src={Icon2Chiu} alt="icon 2 chiu" className="h-4" />
        <div className="max-w-screen-sm">
          <h3 className="text-bg-header-list text-base [font-family:'SVN-Biennale-SemiBold',Helvetica] font-bold">Ho Chi Minh (SGN)</h3>
          <h6 className="font-normal">Fri, 22 Mar, 2022</h6>
        </div>
      </div>
      <div className="flex justify-center [font-family:'SVN-Biennale-SemiBold',Helvetica] font-bold space-x-5 px-20 ">
        <div>
            <h3 className="text-lg ">Round-trip</h3>
        </div>
        <div>
          <h3 className="text-lg "><span className="text-[#4D46FA]">02</span> Adult, <span className="text-[#4D46FA]">01</span> A children</h3>
        </div>
        <div>
          <h3 className="text-lg">Business Class</h3>
        </div>
      </div>
      <div className="flex " >
              <button className="rounded-xl items-center bg-[#F06336] flex-row flex text-white px-2  ">
              Change Flights
              <svg class="w-4 h-4 text-white dark:text-gray-400 "  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
              </button>
            </div>
    </div>
      
    </>
  );
}

export default SectionList;
