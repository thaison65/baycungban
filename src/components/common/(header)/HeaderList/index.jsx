import NavList from "../../(nav)/NavList";
import { IconVN, IconUSA } from "../../../../assets/imgs";

function HeaderList() {
  return (
    <>
      <div className="bg-bg-header-list py-4">
        <div className="container mx-auto max-w-screen-xl h-auto">
          <div className="flex justify-between align-middle">
            <div className="">
              <div className="flex space-x-3">
                <h1 className="text-2xl text-white">Baycungban</h1>
                <img src={IconVN} alt="icon viet nam" className="h-5 my-auto" />
                <img src={IconUSA} alt="icon usa" className="h-5 my-auto" />
              </div>
            </div>
            <div className="flex justify-center">
              <NavList />
            </div>
            <div className="">
              <button className="rounded-xl bg-white text-bg-header-list px-4 py-2">
                Booking now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderList;
