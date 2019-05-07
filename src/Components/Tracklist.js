import React from "react";

import TracklistItem from "./TracklistItem";

const Tracklist = props => {
    const { tracks } = props;
    console.log(tracks);
    return (
        <div className="tracklist">
            {tracks.map((trackInfo, index) => (
                <TracklistItem trackInfo={trackInfo} key={index} />
            ))}
        </div>
    );
};

export default Tracklist;
