import Image from "next/image";

export default function Menu() {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="menu_svg">
          <Image
            className="dark:invert mx-2 cursor-pointer"
            src="/menu.svg"
            alt="logo"
            width={35}
            height={20}
            priority
          />
        </div>
        <div className="logo_container flex items-center justify-between">
          <Image
            className="dark:invert mx-2"
            src="/cart.svg"
            alt="logo"
            width={50}
            height={20}
            priority
          />
          <h2 className="hidden md:block text-black mx-2 text-3xl">
            Swift Shop
          </h2>
        </div>
      </div>
    </>
  );
}
