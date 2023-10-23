import { FaSnapchatGhost,FaSpotify,FaStudiovinari,FaTwitter,FaInstagram, FaFacebook, FaSteam } from "react-icons/fa";
export default function YeniProject() {
  return (
    <div className="h-screen bg-sky-100">
      <div className="bg-sky-200">
        <div className="bg-sky-500 container mx-auto h-12 items-center text-xl justify-center flex">
          <h1 className="text-white ">Header</h1>
        </div>
      </div>
      <div className="bg-white h-3">
       
      </div>
      <div className="bg-sky-600 h-12 justify-between flex">
        <div className="bg-sky-200 w-full items-center text-3xl justify-center flex text-white "><FaSnapchatGhost/></div>
        <div className="bg-sky-300 w-full items-center text-3xl justify-center flex text-white "><FaSpotify/></div>
        <div className="bg-sky-400 w-full items-center text-3xl justify-center flex text-white "><FaStudiovinari/></div>
        <div className="bg-sky-600 w-full items-center text-3xl justify-center flex text-white "><FaTwitter/></div>
        <div className="bg-sky-400 w-full items-center text-3xl justify-center flex text-white "><FaInstagram/></div>
        <div className="bg-sky-300 w-full items-center text-3xl justify-center flex text-white "><FaFacebook/></div>
        <div className="bg-sky-200 w-full items-center text-3xl justify-center flex text-white "><FaSteam/></div>
      </div>
    </div>
  );
}
