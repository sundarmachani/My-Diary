import { useEffect, useState } from "react";
import { useAuth } from "./security/AuthContext";
import { useNavigate } from "react-router-dom";
import { deleteEntryApi, getAllEntriesFromApi } from "./api/DiaryApiService";

export default function ListEntriesComponent() {
//   const currentDate = new Date();
//   const tarDate = new Date(
//     currentDate.getFullYear() + 12,
//     currentDate.getMonth(),
//     currentDate.getDay()
//   );
  const [entries, setentries] = useState([]);
  const [message, setMessage] = useState(null);
  useEffect(() => refreshEntries(), []);
  const authContext = useAuth();
  const username = authContext.username;
  const navigate = useNavigate();
  function refreshEntries() {
    getAllEntriesFromApi(username)
      .then((res) => setentries(res.data))
      .catch((err) => console.log(err));
  }

  function deleteEntry(id) {
    deleteEntryApi(username, id)
      .then(() => {
        setMessage(`Deleted Entry with ID : ${id}`);
        refreshEntries();
      })
      .catch((err) => console.log(err));
  }

  function updateEntry(id) {
    navigate(`/entry/${id}`);
  }

  function createEntry() {
    navigate(`/entry/-1`);
  }

  return (
    <div className="container">
      <h1>Your Stories 🫣</h1>
      {message && <div className="alert alert-warning">{message}</div>}
      <table className="table">
        <thead>
          <tr>
            <th>Day</th>
            <th>Description</th>
            <th>Date</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => (
            <tr key={entry.id}>
                <td>{entry.day}</td>
              <td>{entry.description}</td>
              <td>{entry.entryDate}</td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => deleteEntry(entry.id)}
                >
                  Delete
                </button>
              </td>
              <td>
                <button
                  className="btn btn-success"
                  onClick={() => updateEntry(entry.id)}
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-success" onClick={createEntry}>
        Add Story
      </button>
    </div>
  );
}
