import { call, email, facebook, instagram } from "../../../../assets/imgs";
function Footer() {
  return (
    <footer>
      <nav className="flex flex-row items-center justify-between mt-[-80px] my-auto">
        <div className="basis-1/4 hidden justify-end lg:flex lg:gap-x-1">
          <a href="#" className="-m-1.5 p-1.5">
            <img className="h-8 w-auto" src={call} alt="" />
          </a>
          <p className="my-auto">Call us: +84 908 02 02 58</p>
        </div>
        <div className="basis-2/4 hidden ml-20 lg:flex lg:gap-x-1">
          <a href="#" className="-m-1.5 p-1.5">
            <img className="h-8 w-auto" src={email} alt="" />
          </a>
          <p className="my-auto">Email: chucinog@gmail.com</p>
        </div>
        <div className="basis-1/4 hidden lg:flex lg:flex-1 lg:justify-start">
          <p className="my-auto">Follow us</p>
          <hr className="border-x-8 w-[50px] border-black my-auto mx-1" />
          <a href="#" className="-m-1.5 p-1.5">
            <img className="h-8 w-auto" src={facebook} alt="" />
          </a>
          <a href="#" className="-m-1.5 p-1.5">
            <img className="h-8 w-auto" src={instagram} alt="" />
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
