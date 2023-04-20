import axios from "axios";

const API_URL = "/api/tickets/";

// Create a new ticket
const addNote = async (noteData, tickedId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(
    `${API_URL}/${tickedId}/notes`,
    noteData,
    config
  );

  return response.data;
};

// Get an existing ticket
const getNotes = async (ticketId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(`${API_URL}/${ticketId}/notes`, config);

  return response.data;
};

const noteService = {
  addNote,
  getNotes,
};

export default noteService;
