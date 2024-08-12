import { createSelector } from "@reduxjs/toolkit";

const selectImages = (state) => state.imageBox.images;
const selectTextSearch = (state) => state.filter.textSearch;
const selectAuthorSearch = (state) => state.filter.authorSearch;

export const selectFilteredImages = createSelector(
  [selectImages, selectTextSearch, selectAuthorSearch],
  (images, textSearch, authorSearch) => {
    return images.filter(
      (image) =>
        image.author.toLowerCase().includes(authorSearch.toLowerCase()) &&
        image.url.toLowerCase().includes(textSearch.toLowerCase())
    );
  }
);
