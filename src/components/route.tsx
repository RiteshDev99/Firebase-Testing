import { NavLink } from "react-router-dom";


const PageChanges = () => {
  return (
    <div className="h-[100vh] w-full items-center justify-center flex">
          <NavLink className=" mx-8 px-12 rounded-xl text-white text-lg py-4 bg-blue-300" to={"/RealTime Data"}>Click and Check Firebase RealTime Data</NavLink>
          <NavLink className=" mx-8 px-12 rounded-xl text-white text-lg py-4 bg-green-500" to={"/page"}>Go Next Page</NavLink>

    </div>
  );
}

export default PageChanges;
