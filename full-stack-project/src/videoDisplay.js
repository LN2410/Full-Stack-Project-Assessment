const VideoDisplay = ({ link, title }) => {
  const videoId = new URL(link).searchParams.get("v");
  const embedLink = `https://www.youtube.com/embed/${videoId}?`;

  return (
    <div className="displayContainer">
      <div className="display">
        <h4 className="title">{title}</h4>
        <div>
          <iframe title="youtube video" src={embedLink}></iframe>
        </div>
      </div>
      <div>
        <button className="deleteBtn">Delete</button>
      </div>
    </div>
  );
};

export default VideoDisplay;
