import axios from 'axios';

axios.defaults.baseURL = 'https://629207f4cd0c91932b6c3fec.mockapi.io';

export async function axiosFetchContacts() {
  const { data } = await axios.get(`/contacts`);
  return data;
}

// export async function axiosAddContacts(contact) {
//   const { data } = await axios.post('/contacts', contact);
//   return data;
// }
