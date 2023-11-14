import { Component } from "react";
import { IconVN, IconUSA } from "../../../../assets/imgs";
class Header extends Component {
  render() {
    return (
      <header className="p-1">
        <nav className="flex flex-row items-center justify-between p-6 lg:px-8 ">
          <div className="basis-1/4 hidden justify-end lg:flex lg:gap-x-1">
            <h2 className="font-bold text-2xl">Baycungban</h2>
            <a href="#" className="-m-1.5 p-1.5">
              <img className="h-8 w-auto" src={IconVN} alt="" />
            </a>
            <a href="#" className="-m-1.5 p-1.5">
              <img className="h-8 w-auto" src={IconUSA} alt="" />
            </a>
          </div>
          <div className="basis-2/4 hidden justify-center lg:flex lg:gap-x-12">
            <a href="#" className="-m-1.5 p-1.5">
              Promotion
            </a>
            <a href="#" className="-m-1.5 p-1.5">
              Flight Schedule
            </a>
            <a href="#" className="-m-1.5 p-1.5">
              About us{" "}
            </a>
            <a href="#" className="-m-1.5 p-1.5">
              Payment Guide
            </a>
          </div>
          <div className="basis-1/4 hidden lg:flex lg:flex-1 lg:justify-start">
            <button
              type="submit"
              className="bg-[#4D46FA] rounded-lg p-2 text-white"
            >
              Booking now
            </button>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
