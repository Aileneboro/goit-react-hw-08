import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts;
export const selectFilter = (state) => state.filters;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const { items } = contacts;
    const { name } = filter;

    if (items.length > 0 && name.trim() !== "") {
      return items.filter((contact) =>
        contact.name.toLowerCase().includes(name.trim().toLowerCase())
      );
    }
    return items;
  }
);
