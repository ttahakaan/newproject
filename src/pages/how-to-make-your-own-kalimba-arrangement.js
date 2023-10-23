import { useState, useEffect } from "react";
import { BsArrowUpShort } from "react-icons/bs";
export default function HowToMakeYouOwnKalimbaArrangement() {
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
      <div className="bg-sky-400 h-16 text-white items-center flex justify-center text-lg rounded-b-md">How To Make You Own Kalimba Arrangement?</div>
      {/* <div className="bg-white p-4">
        <h2 className="container mx-auto text-black">Have you heard your Kalimba suddenly buzzing on some of its key? Have you wondered how to fix it? Or you are now looking for the solution to fix your buzzing Kalimba? We are here to help you and give some tips that might have a higher chance of fixing it.</h2>
      </div> */}
      <div className="">
        <div className="p-3">
          <div className="bg-gray-50 mt-3 rounded-md p-3 card-css">
            <h2 className="container mx-auto text-gray-700">You might be searching your favorite song over the internet, but somehow can’t find the tabs for it? Then you think maybe you can arrange yourself? But again, you don’t know how to do your own Kalimba arrangement of that song you really like to play.</h2>
          </div>
        </div>
        <div className="p-3">
          <div className="bg-gray-50 mt-3 rounded-md p-3 card-css">
            <h2 className="container mx-auto text-gray-700">As you may know, some people with music background or with some good ears for the music can arrange a song or piece without using any other tool. We’ll it is not the case for everyone, specially those beginners for music. So here we are giving you some help that can make your own music arrangement in some easy steps. It is not 100% that you did the arrangement yourself, rather than transposing those existing arrangement from other instruments. But you can claim it when you do some additional technical stuff on it that will make it unique. Without further a do, let us start.</h2>
          </div>
        </div>
        <div className="p-3">
          <div className="bg-gray-50 mt-3 rounded-md p-3 card-css">
            <h1 className="container mx-auto text-gray-700 font-bold text-3xl mb-2">Transposing Piano Keys</h1>
            <h1 className="container mx-auto text-gray-700 font-bold text-2xl mb-2">Thumb Piano</h1>
            <h2 className="container mx-auto text-gray-700">Kalimba wouldn’t be called a thumb piano if it doesn’t resemble anything for it. Though it is not really created just to be a copy of a piano, it has its own uniqueness. But we will tackle their similarities since it is what we need here.</h2>
            <h1 className="container mx-auto text-gray-700 font-bold text-2xl mb-2 mt-4">Piano Keys and Kalimba Tines</h1>
            <h2 className="container mx-auto text-gray-700">International standard C Major Kalimba tuned consist of 2 full octaves and another 3 notes on the next octave. Which these octaves can be directly plotted against the octaves of piano keys. So it means, when you press the C4 in piano key and C4 in Kalimba tines they would sound the same. Take note that we are taking about single key in piano here not the chords (multiple keys) that we will tackle later. Let us also tackle the white keys only as the black keys (accidental) are a little more advance, but we will discuss them as well a little.</h2>
            <div className="items-center flex justify-center mt-4">
              <img className="rounded-md" src="https://i.ibb.co/hDxS3Jg/piano.jpg" alt="Piano Keys and Thumb Piano Keys" />
            </div>
            <h1 className="items-center flex justify-center ">Piano Keys and Thumb Piano Keys</h1>
          </div>
        </div>
        <div className="p-3">
          <div className="bg-gray-50 mt-3 rounded-md p-3 card-css">
            <h1 className="container mx-auto text-gray-700 font-bold text-3xl mb-2">Where to get existing Piano Arrangement?</h1>
            <h2 className="container mx-auto text-gray-700">There are a lot of YouTube tutorials video for piano which you can copy the melody. Below is the example of keys played in the video wherein you need to copy them. The right side (blueish) is the melody of the songs which is the one you really need. Take note where did the note comes, if its after the C4 or C5 since it would be different octave already. Then the left side (violet)is the accompaniment or rhythm, which you can take note of some part that you can mixed with the melody. It is either by plucking both keys or sliding (glissando) them as a chord, which will give more life to the arrangement.</h2>
          </div>
        </div>
        <div className="p-3">
          <div className="bg-gray-50 mt-3 rounded-md p-3 card-css">
            <h1 className="container mx-auto text-gray-700 font-bold text-3xl mb-2">Accidentals or Black Keys</h1>
            <h2 className="container mx-auto text-gray-700">If you find some black keys being used in the video, it is either you skip and look for another one or you can retune your Kalimba and you can follow this guide : How to Tune Your Kalimba?</h2>
          </div>
        </div>
        <div className="p-3">
          <div className="bg-gray-50 mt-3 rounded-md p-3 card-css">
            <h1 className="container mx-auto text-gray-700 font-bold text-3xl mb-2">Transposing Piano Sheet</h1>
            <h2 className="container mx-auto text-gray-700">Now we have done transposing directly from a piano music video by using the same keys and adding some rhythm of our own, let us go one step higher. There are a lot more songs written in music sheet than the videos we can find. These sheets can be converted as well for Kalimba. Though it is much harder than from getting in the videos.</h2>
          </div>
        </div>
        <div className="p-3">
          <div className="bg-gray-50 mt-3 rounded-md p-3 card-css">
            <h1 className="container mx-auto text-gray-700 font-bold text-3xl mb-2">Music Sheet</h1>
            <h2 className="container mx-auto text-gray-700">If you are not a music person or no knowledge at all and saw a music sheet, you might feel overwhelmed. But we will try to make it easier as we can be. Now, you need to find a music sheet online, there are free sheets just google them. Make sure that you will be using a C Major music sheets, this are sheets without any accidentals (# or b) throughout the sheet.</h2>
          </div>
        </div>
        <div className="p-3">
          <div className="bg-gray-50 mt-3 rounded-md p-3 card-css">
            <h1 className="container mx-auto text-gray-700 font-bold text-3xl mb-2">On Different Scale</h1>
            <h2 className="container mx-auto text-gray-700">If you see that the sheet is on another scale, you need to transpose them first, normally sites have an automatic transposing of sheet. Or you can transpose them manually using a scale chart as you can see below. But you can also play it without transposing, but you need to retune your Kalimba tines to that scale to be able to play it. But its quite tedious to do.</h2>
          </div>
        </div>
        <div className="p-3">
          <div className="bg-gray-50 mt-3 rounded-md p-3 card-css">
            <h1 className="container mx-auto text-gray-700 font-bold text-3xl mb-2">Music Notes and Kalimba Keys</h1>
            <h2 className="container mx-auto text-gray-700">Now that you have the music sheet you will arrangement, let us convert the notes one by one. Below is the chart that you will be using to convert from notes to Kalimba Key notation. Just follow them throughout the music sheet, make sure you are taking the melody part which is in the treble clef. The Bass Clef can help you if you can to add the rhythm t your arrangement, some music sheet already showing the chords above the treble clef which is more easier.</h2>
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
