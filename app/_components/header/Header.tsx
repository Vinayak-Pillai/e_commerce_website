// import Menu from "@/app/_components/header/Menu";
import Menu from "_components/header/Menu";
import HeaderSearch from "_components/header/HeaderSearch";
import UserInfo from "_components/header/UserInfo";

export default function Header() {
  return (
    <div className="fixed z-50 w-[100%]">
      <div className=" bg-white grid grid-cols-[50%,50%] md:grid-cols-[30%,20%,50%] h-[50px] md:h-[70px] md:border md:border-b-gray-300 ">
        <div className="flex justify-left">
          <Menu />
        </div>
        <div className="hidden md:flex justify-center items-center h-full">
          <HeaderSearch />
        </div>
        <div className="flex justify-end">
          <UserInfo />
        </div>
      </div>
      <div className="md:hidden mx-2 bg-white">
        <HeaderSearch />
      </div>
    </div>
  );
}
