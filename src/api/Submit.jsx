//Submit data to backend

function CreateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("https://example.com/api/users", { name, email });
    alert("User created!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={name} 
        onChange={e => setName(e.target.value)} 
        placeholder="Name" />
      <input 
        value={email} 
        onChange={e => setEmail(e.target.value)} 
        placeholder="Email" />
      <button type="submit">Add User</button>
    </form>
  );
}
export default CreateUser;