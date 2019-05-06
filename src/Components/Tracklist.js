import React, { Component } from 'react';
import TracklistItem from './TracklistItem'

export default class Tracklist extends Component {
    render() {
        return (
            <div id="tracks">
                <tr>
                    <TracklistItem />
                </tr>
            </div>
        )
    }
}