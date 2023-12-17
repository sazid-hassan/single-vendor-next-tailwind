import Image from "next/image";

const Card = () => {
  return (
    <div className="max-w-sm mx-auto py-8 md:px-4 px-8 bg-white rounded-xl shadow-lg md:flex md:gap-8 dark:bg-gray-600 ">
      <div>
        <Image
          src={"/image.png"}
          height={96}
          width={96}
          alt="img"
          className="mx-auto rounded-full ring-4 hover:scale-105 duration-500"
        />
      </div>
      <div className="text-center space-y-2 md:text-left">
        <div className="space-y-0.5">
          <p className="text-lg font-semibold">Card</p>
          <p className="text-gray-500 font-medium">Description</p>
        </div>
        <button className="px-4 py-1 border border-purple-400 rounded-full text-sm hover:text-white hover:bg-purple-400 hover:focus:outline-none dark: border-gray-300 dark:hover:bg-black">
          Check
        </button>
      </div>
    </div>
  );
};

export default Card;
