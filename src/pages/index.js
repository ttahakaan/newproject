import Link from "next/link";

export default function YeniProject() {
  return (
    <div className="bg-sky-100 h-screen overflow-scroll">
      <div class="grid grid-rows-2 grid-cols-2 h-screen p-4">
        <Link className="bg-sky-400 mr-2 p-4 items-center flex justify-center border border-gray-400 rounded-full text-white font-bold" href="/how-to-take-care-of-your-kalimba">
          How to take care of your Kalimba?
        </Link>
        <Link className="bg-sky-400 p-4 items-center flex justify-center border border-gray-400 rounded-full text-white font-bold" href="/how-to-tune-your-kalimba">
          How to Tune Your Kalimba?
        </Link>
        <Link className="bg-sky-400 mr-2 mt-2 p-4 items-center flex justify-center border border-gray-400 rounded-full text-white font-bold " href="/how-to-make-your-own-kalimba-arrangement">
          How To Make You Own Kalimba Arrangement?
        </Link>
        <Link className="bg-sky-400 p-4 mt-2 items-center flex justify-center border border-gray-400 rounded-full text-white font-bold" href="/how-to-fix-buzzing-kalimba-tines">
          How To Fix Buzzing Kalimba Tiness
        </Link>
      </div>
    </div>
  );
}
