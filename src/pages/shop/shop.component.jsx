import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";

import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";

class ShopPage extends React.Component {
  componentDidMount() {
    // const { updateCollections } = this.props;
    // const collecionRef = firestore.collection("collections");
    // this.unsubscribeFromSnapshot = collecionRef.onSnapshot(async (snapshot) => {
    //   const collectionsMap = convertCollectionSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({
    //     loading: false,
    //   });
    // });
    // collecionRef.get().then((snapshot) => {
    //   const collectionsMap = convertCollectionSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({
    //     loading: false,
    //   });
    // });
    // fetch(
    //   "https://firestore.googleapis.com/v1/projects/clothing-store-db-c193f/databases/(default)/documents/collections"
    // )
    //   .then((response) => response.json())
    //   .then((collections) => console.log(collections));
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
