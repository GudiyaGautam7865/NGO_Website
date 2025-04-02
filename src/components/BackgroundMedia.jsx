// import React, { useRef, useState, useEffect } from "react";
// import { Play, Pause, Volume2 } from "lucide-react"; // Lucide icons

// const BackgroundMedia = () => {
//   const audioRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [volume, setVolume] = useState(1);

//   // Try autoplay when component mounts
//   useEffect(() => {
//     const playAudio = async () => {
//       if (audioRef.current) {
//         try {
//           await audioRef.current.play();
//           setIsPlaying(true);
//         } catch (error) {
//           console.log("Autoplay blocked. User must interact.", error);
//         }
//       }
//     };
//     playAudio();
//   }, []);

//   // Toggle Play/Pause
//   const togglePlayPause = () => {
//     if (isPlaying) {
//       audioRef.current.pause();
//     } else {
//       audioRef.current.play();
//     }
//     setIsPlaying(!isPlaying);
//   };

//   // Adjust Volume
//   const handleVolumeChange = (e) => {
//     const newVolume = e.target.value;
//     setVolume(newVolume);
//     audioRef.current.volume = newVolume;
//   };

//   return (
//     <div className="flex flex-col items-center justify-center w-full p-4 text-white">
//       <audio ref={audioRef} src="https://sample-videos.com/audio/mp3/crowd-cheering.mp3" loop></audio>

//       <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center w-full max-w-sm">
//         <h2 className="text-lg font-semibold mb-3 text-center">Seven Continents Song</h2>

//         {/* Play/Pause Button */}
//         <button
//           onClick={togglePlayPause}
//           className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition"
//         >
//           {isPlaying ? <Pause size={20} /> : <Play size={20} />}
//           <span className="ml-2">{isPlaying ? "Pause" : "Play"}</span>
//         </button>

//         {/* Volume Control */}
//         <div className="flex items-center mt-3 w-full px-2">
//           <Volume2 className="mr-2" />
//           <input
//             type="range"
//             min="0"
//             max="1"
//             step="0.1"
//             value={volume}
//             onChange={handleVolumeChange}
//             className="w-full"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BackgroundMedia;



import React, { useRef, useState } from "react";
import { Play, Pause, Volume2 } from "lucide-react"; // Lucide icons

const BackgroundMedia = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isInitialized, setIsInitialized] = useState(false);

  // Play Audio after User Interaction
  const initializeAudio = async () => {
    if (audioRef.current) {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
        setIsInitialized(true); // Ensure audio starts only after interaction
      } catch (error) {
        console.error("User interaction required for playback:", error);
      }
    }
  };

  // Toggle Play/Pause
  const togglePlayPause = () => {
    if (!isInitialized) {
      initializeAudio();
    } else {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Adjust Volume
  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  return (
    <div className="flex flex-col items-center justify-center w-full p-4 text-white">
      <audio ref={audioRef} src="https://sample-videos.com/audio/mp3/crowd-cheering.mp3" loop></audio>

      <div className="bg-gray-800 p-5 rounded-lg shadow-lg flex flex-col items-center w-full max-w-sm">
        <h2 className="text-xl font-semibold mb-3 text-center">Seven Continents Song</h2>

        {/* Play/Pause Button */}
        <button
          onClick={togglePlayPause}
          className="flex items-center px-5 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition text-lg"
        >
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          <span className="ml-2">{isPlaying ? "Pause" : "Play"}</span>
        </button>

        {/* Volume Control */}
        <div className="flex items-center mt-4 w-full px-2">
          <Volume2 className="mr-2" />
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
            className="w-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default BackgroundMedia;
