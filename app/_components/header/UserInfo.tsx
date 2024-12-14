import Image from "next/image";

export default function UserInfo() {
  return (
    <div className="flex items-center">
      <div className="favorites_svg">
        <Image
          className="dark:invert cursor-pointer"
          src="/favorites.svg"
          alt="logo"
          width={20}
          height={20}
          priority
        />
      </div>
      <div className="shopping_bag_svg">
        <Image
          className="dark:invert mx-1 cursor-pointer"
          src="/shopping_bag.svg"
          alt="logo"
          width={20}
          height={20}
          priority
        />
      </div>
      <div className="user_svg">
        <Image
          className="dark:invert mr-1 md:mr-2 cursor-pointer"
          src="/user.svg"
          alt="logo"
          width={20}
          height={20}
          priority
        />
      </div>
    </div>
  );
}
