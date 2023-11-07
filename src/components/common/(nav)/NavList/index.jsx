import { TITLE_NAV } from "./routes";

function NavList() {
  return (
    <>
      <div className="flex space-x-8 my-auto">
        {TITLE_NAV.map((value) => {
          return (
            <div
              key={value.id}
              className="hover:rounded-3xl hover:px-4 hover:py-2 hover:bg-white-rbga hover:-my-2 cursor-pointer "
            >
              <h6 className="text-white font-normal">{value.title}</h6>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default NavList;
