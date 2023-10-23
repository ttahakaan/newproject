import { FaSnapchatGhost, FaSpotify, FaStudiovinari, FaTwitter, FaInstagram, FaFacebook, FaSteam } from "react-icons/fa";
export default function YeniProject() {
  return (
    <div className="bg-sky-100 h-screen overflow-scroll">
      <div className="bg-sky-400 h-16 text-white items-center flex justify-center text-lg rounded-b-md">Welcome!</div>
      <div class="grid grid-rows-2 grid-cols-2 h-screen p-4">
        <a className="bg-sky-400 mr-2 p-4 items-center flex justify-center border border-gray-400 rounded-full text-white font-bold" href="/how-to-take-care-of-your-kalimba">
          How to take care of your Kalimba?
        </a>
        <a className="bg-sky-400 p-4 items-center flex justify-center border border-gray-400 rounded-full text-white font-bold" href="/how-to-tune-your-kalimba">
          How to Tune Your Kalimba?
        </a>
        <a className="bg-sky-400 mr-2 mt-2 p-4 items-center flex justify-center border border-gray-400 rounded-full text-white font-bold " href="/how-to-make-your-own-kalimba-arrangement">
          How To Make You Own Kalimba Arrangement?
        </a>
        <a className="bg-sky-400 p-4 mt-2 items-center flex justify-center border border-gray-400 rounded-full text-white font-bold" href="/how-to-fix-buzzing-kalimba-tines">
          How To Fix Buzzing Kalimba Tines
        </a>
      </div>
    </div>
  );
}
