import React, { Component } from 'react';

import CountDown from './countdown/index';

class StopPoint extends Component {
  addToFavourites(stopId) {
    // TODO: Add to current state;

    var indexedDB = window.indexedDB,
        openDB = indexedDB.open('favourites', 5);

    // openDB.onupgradeneeded = function() {
    //   var db = openDB.result,
    //       store = db.createObjectStore("stops", { keyPath: "stopId" }),
    //       index = store.createIndex("StopsIndex", ["stopId", "stopName"]);
    // };

    openDB.onsuccess = function() {
      var db = openDB.result,
          tx = db.transaction("stops", "readwrite"),
          store = tx.objectStore("stops");
          // index = store.index("StopsIndex");

      store.put({
        "stopId": stopId,
        "stopName": stopId
      });
    }

    console.log("Add to favourites button clicked", stopId);
  }

  render() {
    return (
      <div className="stopPoint">
        <button onClick={(e) => this.addToFavourites(this.props.match.params.stopPoint)}>Add to homepage</button>

        <CountDown stopPoint={this.props.match.params.stopPoint} />
      </div>
    );
  }
}

export default StopPoint;
