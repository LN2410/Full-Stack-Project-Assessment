import Search from "./Search";
import VideoForm from "./VideoForm";
import VideoDisplay from "./videoDisplay";
import { useState } from "react";

const Video = () => {
  const [videoLinks, setVideoLinks] = useState([]);
  return (
    <div>
      <div className="addVideo">
        <VideoForm
          onAdd={(newVideo) => {
            setVideoLinks([...videoLinks, newVideo]);
          }}
        />
        <Search />
      </div>
      <div className="display">
        <VideoList videos={videoLinks} />
      </div>
    </div>
  );
};

function VideoList({ videos }) {
  return (
    <div>
      {videos.map((video) => (
        <VideoDisplay title={video.title} link={video.url} />
      ))}
    </div>
  );
}

export default Video;
