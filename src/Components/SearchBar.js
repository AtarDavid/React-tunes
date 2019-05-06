import React, { Component } from 'react';

export default class SearchBar extends Component {
    render() {
        return (
            <div className="refineSearch">
                <input type="search" name="search" id="search" placeholder="Search..." />
                <select name="dropdown" id="sortBy" onclick="myTrackList.sort()">
                    <option value="">Sort by...</option>
                    <option value="artistAsc">Artist Name &uArr;</option>
                    <option value="artistDes">Artist Name &dArr;</option>
                    <option value="trackAsc">Track Name &uArr;</option>
                    <option value="trackDes">Track Name &dArr;</option>
                    <option value="priceAsc">Price &uArr;</option>
                    <option value="priceDes">Price &dArr;</option>
                    <option value="available">Availability</option>
                </select>

            </div>
        )
    }
}