import React from "react";
import Navbar from "../components/Navbar";
import Aside from "../components/Aside";
import { ClockAfternoon, Queue, ThumbsUp } from "phosphor-react";

const VideoPage = () => {
  return (
    <>
      <Navbar />

      <div className="ff-container">
        <Aside />

        <div className="ff-container-videopage">
          <div className="ff-container-videoplayer">
            <div className="ff-iframe">
              <iframe
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                width="788.54"
                height="443"
                type="text/html"
                src="https://www.youtube.com/embed/DBXH9jJRaDk?autoplay=1&fs=1&iv_load_policy=1&showinfo=1&rel=1&cc_load_policy=1&start=0&end=0&origin=http://youtubeembedcode.com"
              >
                <div>
                  <small>
                    <a href="https://youtubeembedcode.com/es/">
                      youtubeembedcode es
                    </a>
                  </small>
                </div>
                <div>
                  <small>
                    <a href="https://xn--bsta-utlndska-casinon-51bh.se/">
                      bästa-utländska-casinon.se
                    </a>
                  </small>
                </div>
                <div>
                  <small>
                    <a href="https://youtubeembedcode.com/en">
                      youtubeembedcode en
                    </a>
                  </small>
                </div>
                <div>
                  <small>
                    <a href="https://bettingsidor-utan-svensk-licens.se/">
                      https://bettingsidor-utan-svensk-licens.se/
                    </a>
                  </small>
                </div>
                <div>
                  <small>
                    <a href="https://youtubeembedcode.com/pl/">
                      youtubeembedcode pl
                    </a>
                  </small>
                </div>
                <div>
                  <small>
                    <a href="https://norska-casinon-utan-svensk-licens.se/">
                      https://norska-casinon-utan-svensk-licens.se/
                    </a>
                  </small>
                </div>
                <div>
                  <small>
                    <a href="https://youtubeembedcode.com/de/">
                      youtubeembedcode.com/de/
                    </a>
                  </small>
                </div>
                <div>
                  <small>
                    <a href="https://norska-casinon-utan-svensk-licens.se/">
                      https://norska-casinon-utan-svensk-licens.se/
                    </a>
                  </small>
                </div>
              </iframe>
            </div>

            <div className="ff-videoplayer-text flex flex-col">
              <div className="ff-container-options flex flex-align-center flex-justify-space-btw">
                <div>
                  <span className="h6">Views</span>|
                  <span className="h6">Date</span>
                </div>
                <div className="ff-videoplayer-icon-wrap flex flex-align-center flex-justify-end">
                  <div className="ff-videoplayer-icon-chip  btn-warning btn-warning-hover ff-btn-secondary flex flex-align-center">
                    <ThumbsUp size={18} className="ff-videoplayer-icon" />{" "}
                    <span className="ff-videoplayer-icons-text">Like</span>
                  </div>

                  <div className="ff-videoplayer-icon-chip  btn-warning btn-warning-hover ff-btn-secondary flex flex-align-center">
                    <Queue size={18} className="ff-videoplayer-icon" />{" "}
                    <span className="ff-videoplayer-icons-text">Playlist</span>
                  </div>

                  <div className="ff-videoplayer-icon-chip  btn-warning btn-warning-hover ff-btn-secondary flex flex-align-center">
                    <ClockAfternoon size={18} className="ff-videoplayer-icon" />{" "}
                    <span className="ff-videoplayer-icons-text">
                      Watchlater
                    </span>
                  </div>
                </div>
              </div>

              <div className="ff-videoplayer-heading">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
                officiis!
              </div>
              <div className="ff-videoplayer-desc">
                <div className="ff-videoplayer-author-wrap flex flex-align-center flex-justify-start">
                  <img
                    src="https://yt3.ggpht.com/AukCDcmzFMxdgsXZN3K5ydji7Jd9IW6WZ0R2PrMUN51MZkgPJtcLH2zFCby0KoAUb-j4VdMPI-s=s68-c-k-c0x00ffffff-no-rj"
                    alt="avatar"
                    class="ff-avatar"
                  />{" "}
                  AUTHOR
                </div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Incidunt blanditiis aliquam ad temporibus iure harum qui nemo
                reprehenderit voluptatem corporis.
              </div>
            </div>
          </div>

          <div className="ff-container-videonote">
            <div className="ff-videonote-wrap">
              <div className="ff-videonote-heading ff-videoplayer-heading">
                Note
              </div>
              <input
                type="text"
                className="ff-videonote-input"
                placeholder="Title"
              />
              <textarea
                className="ff-videonote-input"
                cols="30"
                rows="5"
                placeholder="Description"
              />
              <div className="ff-videonote-btn btn btn-warning btn-warning-hover ff-btn-secondary">
                Add Note
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoPage;
