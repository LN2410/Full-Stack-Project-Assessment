import { useState } from "react";

const VideoForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  return (
    <div className="formContainer">
      <h4>Add Video</h4>
      <form
        class="form"
        onSubmit={(event) => {
          event.preventDefault();
          onAdd?.({ title, url });
        }}
      >
        <label>
          Title
          <input
            class="input"
            value={title}
            name="title"
            type="text"
            required
            onChange={(event) => setTitle(event.target.value)}
          ></input>
        </label>
        <div>
          <label>
            URL
            <input
              class="input"
              value={url}
              onChange={(event) => setUrl(event.target.value)}
              name="videoURL"
              type="text"
              required
            ></input>
          </label>
        </div>
        <div>
          <button class="cancelBtn" type="cancel">
            Cancel
          </button>
          <button class="addBtn" type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default VideoForm;
