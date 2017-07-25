import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favourites: ''
    }

    var indexedDB = window.indexedDB,
        openDB = indexedDB.open('favourites', 5),
        // indexedDBFavourites,
        self = this;

    openDB.onsuccess = function() {
      // console.log("Open DB Success");

      var db = openDB.result,
          tx = db.transaction("stops", "readwrite"),
          store = tx.objectStore("stops");
          // index = store.index("StopsIndex");

      var getAll = store.getAll();

      getAll.onsuccess = function() {
        // console.log("All results", getAll.result);

        self.setState({
          favourites: getAll.result
        });
      }
    }
  }

  render() {
    const listItems = this.state.favourites;

    var favouritesList = '';

    if (listItems.length) {
      console.log("Render favourite items");

      // {data.stopId} / {data.stopName}
      favouritesList = listItems.map((data, i) =>
        <li key={i}>
          <Link to={`/stop/${data.stopId}`}>
            {data.stopId}
          </Link>
        </li>
      );

    } else {
      favouritesList = <li>No favourites yet</li>;
    }


    return (
      <aside className="sidebar">
        <ul>
          {favouritesList}
        </ul>
      </aside>
    );
  }
}

export default Sidebar;
