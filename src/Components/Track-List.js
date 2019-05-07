import React from "react";

import TrackListItem from "./Track-List-Item";

const TrackList = props => {
  const { tracks } = props;
  console.log(tracks);
  return (
    <div className="tracklist">
      <h1>The sound of React</h1>
      {tracks.map((trackInfo, index) => (
        <TrackListItem trackInfo={trackInfo} key={index} />
      ))}
    </div>
  );
};

export default TrackList;
