import { createSelector } from "reselect";

import { memoize } from "lodash";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

// const COLLECTION_ID_MAP = {
//   hats: 1,
//   sneakers: 2,
//   jackets: 3,
//   womens: 4,
//   mens: 5,
// };

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectCollections],
    // (collections) =>
    //   collections.find(
    //     (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    //   )
    //   converted the shopdata into an object since searching for an element in an array takes a lot of time

    (collections) => collections[collectionUrlParam]
  )
);