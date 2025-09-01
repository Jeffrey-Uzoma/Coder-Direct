import { useEffect, useState } from "react";
import axios from "axios";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Fetch users from Laravel API
  const fetchUsers = async () => {
    try {
      const res = await axios.get("https://example.com/api/users");
      setUsers(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  // Load users on mount
  useEffect(() => {
    fetchUsers();
  }, []);

  // Handle adding new user
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://example.com/api/users", { name, email });
      setName("");
      setEmail("");
      fetchUsers(); // Refresh list
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h1>User List</h1>

      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.name} - {u.email}
          </li>
        ))}
      </ul>

      <h2>Add New User</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
