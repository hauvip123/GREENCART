import { assets } from "../assets/assets";
const NewLetter = () => {
  return (
    <div className="relative mt-24">
      <img
        src={assets.bottom_banner_image}
        alt="bottom banner"
        className="w-full hidden md:block"
      />
      <img
        src={assets.bottom_banner_image_sm}
        alt="bottom banner mobile"
        className="w-full md:hidden"
      />
      <div className="absolute inset-0 flex flex-col items-center md:items-end md:justify-center pt-16 md:p-0 md:pr-24">
        <h1 className="md:text-4xl text-2xl font-semibold">
          Never Miss a Deal!
        </h1>
        <p className="md:text-lg text-gray-500/70 pb-8">
          Subscribe to get the latest offers, new arrivals, and exclusive
          discounts
        </p>
        <form className="flex items-center justify-between max-w-xl w-full md:h-13 h-12">
          <input
            className="border border-gray-300 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500"
            type="text"
            placeholder="Enter your email id"
            required
          />
          <button
            type="submit"
            className="md:px-12 px-8 h-full text-white bg-primary hover:bg-primary-dull transition-all cursor-pointer rounded-md rounded-l-none"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};
export default NewLetter;
