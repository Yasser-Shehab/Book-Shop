import { useState, useEffect } from "react";
import { Navbar, MobileNav, Typography, Button, IconButton } from "@material-tailwind/react";
import { BiHeart, BiSearch } from "react-icons/bi";
import { Input } from "@material-tailwind/react";

export default function Nav({ searchHandle }: { searchHandle: any }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [openNav, setOpenNav] = useState(false);

  const handleReszie = () => {
    window.innerWidth >= 960 && setOpenNav(false);
  };

  const inputHandle = (e: any) => {
    setSearchTerm((prev) => (prev = e.target.value));
    searchHandle(e.target.value);
  };

  useEffect(() => {
    window.addEventListener("resize", handleReszie);
    return () => window.removeEventListener("resize", handleReszie);
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
      <div className="w-72 flex items-center relative">
        <Input
          className="border-none bg-blue-gray-50 "
          label="Search by author, title, name"
          value={searchTerm}
          onChange={inputHandle}
        />
        <BiSearch className="text-lg absolute right-5 cursor-pointer hover:scale-105 ease-in-out" />
      </div>
    </ul>
  );

  return (
    <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 mt-3">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="small"
          className="mr-4 cursor-pointer py-1.5 font-normal"
        >
          <span className="font-bold text-xl">Booksy</span>
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex items-center">
          <div className="mx-2">
            <BiHeart />
          </div>
          <div className="mx-2">
            <IconButton size="sm" className="rounded-full">
              0
            </IconButton>
          </div>
          <div className="mx-2">EN</div>
        </div>

        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>{navList}</MobileNav>
    </Navbar>
  );
}
