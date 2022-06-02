// export const getContactsSelector = state => state.contacts.items;

const getFilterSelector = state => state.filter.value;

// const getVisibleContacts = (contacts, state) => {
//   const normalizeFilter = filter.toLowerCase();
//   return contacts?.filter(({ name }) =>
//     name.toLowerCase().includes(normalizeFilter)
//   );
// };

const itemsSelectors = { getFilterSelector };
export default itemsSelectors; 

 
