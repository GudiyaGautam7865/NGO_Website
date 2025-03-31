import React, { useRef, useState, useEffect } from "react";
import { Play, Pause, Volume2 } from "lucide-react"; // Lucide icons

const BackgroundMedia = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);

  // Try autoplay when component mounts
  useEffect(() => {
    const playAudio = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          console.log("Autoplay blocked. User must interact.");
        }
      }
    };
    playAudio();
  }, []);

  // Toggle Play/Pause
  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Adjust Volume
  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  return (
    <div className="flex flex-col items-end w-89 ml-290 mb-5 justify-end   text-white">
        <audio ref={audioRef} src="https://sample-videos.com/audio/mp3/crowd-cheering.mp3" loop></audio>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-4">Seven Continents Song</h2>

        {/* Play/Pause Button */}
        <button
          onClick={togglePlayPause}
          className="flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition"
        >
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          <span className="ml-2">{isPlaying ? "Pause" : "Play"}</span>
        </button>

        {/* Volume Control */}
        <div className="flex items-center mt-4">
          <Volume2 className="mr-2" />
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
            className="w-32"
          />
        </div>
      </div>
    </div>
  );
};

export default BackgroundMedia;
