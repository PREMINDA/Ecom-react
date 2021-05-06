import { createSelector } from "reselect";

const seledirectory = (state) => state.directory;

export const selectSection = createSelector(
  [seledirectory],
  (directory) => directory.section
);
