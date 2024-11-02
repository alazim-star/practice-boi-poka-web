import { Link, NavLink } from "react-router-dom";


const Nav = () => {
    return (
     
           <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <NavLink className="" to={"/"} >Home</NavLink>
        <NavLink className="" to={"/listedBooks"} >Listed Books</NavLink>

      <NavLink className="btn  p-3 text-[#23be0a] btn-outline" to={"/about"}>About</NavLink>
      <NavLink className="btn  p-3 text-[#23be0a] btn-outline" to={"/dashboard"}>DashBoard</NavLink>
     
      </ul>
    </div>
    <a ></a>

    <NavLink className="font-extrabold text-2xl" to={"/"}>Book Vibe</NavLink>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu gap-10 menu-horizontal px-1">
  
   
   <button className="btn  p-3 text-[#23be0a] btn-outline"> <NavLink className=" " to={"/"}>Home</NavLink></button>
   <button className="btn  p-3 text-[#23be0a] btn-outline" ><NavLink className="" to={"/listedBooks"} >Listed Books</NavLink></button>

      <button className="btn  p-3 text-[#23be0a] btn-outline" ><NavLink to={"/about"}>About</NavLink></button>
    <button className="btn  p-3 text-[#23be0a] btn-outline">  <NavLink to={"/dashboard"}>DashBoard</NavLink></button>
     
    </ul>
  </div>
  <div className="navbar-end gap-10">
    <button><NavLink className="bg-[#23be0a] btn text-white w-24">sign In</NavLink></button>
    <button><NavLink className="bg-[#59c6d2] btn text-white w-24">sign Up</NavLink></button>
    
    
  </div>
</div>







     
    );
};

export default Nav;