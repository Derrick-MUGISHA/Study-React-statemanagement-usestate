import { useState } from "react";

export default function SignUp() {
    
    const [form, setForm] = useState({ name: "", email: "", track: "", agree: false });
    const [message, setMessage] = useState("");

    function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.includes("@") || !form.agree) {
      setMessage("Please complete all fields and accept the terms.");
      return;
    }
    setMessage(`Welcome, ${form.name}! You joined the ${form.track} track.`);
    setForm({ name: "", email: "", track: "", agree: false });
  }



  return (
    <form onSubmit={handleSubmit} noValidate>
      <label htmlFor="name">Name</label>
      <input id="name" name="name" value={form.name} onChange={handleChange} />
 
      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" value={form.email} onChange={handleChange} />
      <select id="track" name="track" value={form.track} onChange={handleChange}>
        <option value="">Choose…</option>
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
      </select>
 
      <label>
        <input type="checkbox" name="agree" onChange={handleChange} checked={form.agree}    />
        I agree to the terms
      </label>
 
      <button type="submit" disabled={!form.agree} >Sign up</button>
      {message && <p role="status">{message}</p>}
    </form>

  )
}