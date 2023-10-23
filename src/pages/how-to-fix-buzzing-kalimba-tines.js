import { useState, useEffect } from "react";
import { BsArrowUpShort } from "react-icons/bs";
export default function HowToFixBuzzingKalimbaTines() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // Örneğin, 100 piksel aşağı kaydırıldığında butonu göster
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className=" bg-sky-100">
      <div className="bg-sky-400 h-16 text-white items-center flex justify-center text-lg rounded-b-md">How To Fix Buzzing Kalimba Tines</div>
      {/* <div className="bg-white p-4">
        <h2 className="container mx-auto text-black">Have you heard your Kalimba suddenly buzzing on some of its key? Have you wondered how to fix it? Or you are now looking for the solution to fix your buzzing Kalimba? We are here to help you and give some tips that might have a higher chance of fixing it.</h2>
      </div> */}
      <div className="">
        <div className="p-3">
          <div className="bg-gray-50 mt-3 rounded-md p-3 card-css">
            <h2 className="container mx-auto text-gray-700">Have you heard your Kalimba suddenly buzzing on some of its key? Have you wondered how to fix it? Or you are now looking for the solution to fix your buzzing Kalimba? We are here to help you and give some tips that might have a higher chance of fixing it.</h2>
          </div>
        </div>
        <div className="p-3">
          <div className="bg-gray-50 mt-3 rounded-md p-3 card-css">
            <h1 className="container mx-auto text-gray-700 font-bold text-3xl mb-2">Wiggling</h1>
            <h2 className="container mx-auto text-gray-700">Yes you read it right, a simple movement from left to right and vice versa would sometimes fix the problem. There might be just something stuck between the tines and bridge, and moving it may removed them. If you succeed with this first step, then your lucky enough.</h2>
            <div className="items-center flex justify-center mt-4">
              <img className="rounded-md" src="https://i.ibb.co/h2bjLMW/paperkalimba-225x300.jpg" alt="Kalimba Fix on Buzzing Tines" />
            </div>
            <h1 className="items-center flex justify-center ">Kalimba Fix on Buzzing Tines</h1>
          </div>
        </div>
        <div className="p-3">
          <div className="bg-gray-50 mt-3 rounded-md p-3 card-css">
            <h1 className="container mx-auto text-gray-700 font-bold text-3xl mb-2">Piece of paper</h1>
            <h2 className="container mx-auto text-gray-700">Another simple solution you can do is just by using a piece of paper. Cut a paper into a thin size with about an inch in length and about same width as the tines. Slip the paper under the tines until it reach the in between of tines and bridge. You need to pull up the tines a little to make the paper go in between. Try to pluck the key, if the buzz goes off, then cut the remaining piece of paper leaving the piece of paper in between.</h2>
          </div>
        </div>
        <div className="p-3">
          <div className="bg-gray-50 mt-3 rounded-md p-3 card-css">
            <h1 className="container mx-auto text-gray-700 font-bold text-3xl mb-2">Sandpaper</h1>
            <h2 className="container mx-auto text-gray-700">For this solution, you need extra effort on buying the sand paper. We recommend to find the finest sandpaper (400 -1000 grit per inch) you can buy. Cut it the same size as we did at the piece of paper. Slip it also between the tines and bridge, make sure the rough side of sandpaper is facing the bridge. Grind the sandpaper, a couple of times, while also testing the tines.</h2>
          </div>
        </div>
        <div className="p-3">
          <div className="bg-gray-50 mt-3 rounded-md p-3 card-css">
            <h1 className="container mx-auto text-gray-700 font-bold text-3xl mb-2">Last Resort</h1>
            <h2 className="container mx-auto text-gray-700">If none of the above doesn’t work, try to remove the buzzing tines and clean it up. Try to clean the saddle as well. You can also try to use extra tines as replacement for testing and we hope that it would finally fix everything.</h2>
          </div>
        </div>
        <div className="p-3">
          <div className="bg-gray-50 mt-3 rounded-md p-3 card-css">
            <h1 className="container mx-auto text-gray-700 font-bold text-3xl mb-2">Dead Tines</h1>
            <h2 className="container mx-auto text-gray-700">Buzz problem is differ from dead tines. But you can try all the steps above as well, maybe its just another tine issue. You can also pull the tines up and down as additional solution. You can also try replacing it with longer tines cause sometimes it fix the problem. But if nothings really work, the Kalimba body itself has the issue. We only found Kalimba Magic who does the fixing of dead tines related to the body itself. They will be adding something inside your Kalimba (Hollow Box). Although it cost a lot and you might prefer to replace the Kalimba itself. We also found out that dead tines mostly happen with the hollow box type than the flat board.</h2>
          </div>
        </div>
      </div>
      <div
        className={`fixed bottom-8 right-8 bg-sky-400 text-white p-2 flex items-center justify-center rounded-full shadow cursor-pointer transition-opacity duration-500 ${showScrollButton ? "opacity-100" : "opacity-0"}`}
        onClick={() => {
          scrollToTop();
        }}
      >
        Back To Top
        <BsArrowUpShort size={30} /> {/* İkon boyutunu 30 olarak bıraktık */}
      </div>
      <footer className="bg-sky-400 h-12 text-white items-center flex justify-center">Kalimba Tabs</footer>
    </div>
  );
}
