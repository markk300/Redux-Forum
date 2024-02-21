import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBlog } from "./blogSlice";
import { selectAllUsers } from "../users/userSlice";


const initialState = {
  title: "",
  body: "",
  userId: "",
};

const AddBlogForm = () => {
  const users = useSelector(selectAllUsers)
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialState);

  const { title, body, userId } = form;
  const userOptions = users.map((user)=>(
    <option value={user.id} key={user.id}>{user.name}</option>
      ))
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleUser = (e) => {
    const { value } = e.target;
    setForm({ ...form, userId: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (title && body) {
      dispatch(addBlog(title,body,userId));
      setForm({title:'',body:'', userId:''})
    }
  };
  const isFill = Boolean(title) && Boolean(body) 

  return (
    <section>
      <h2>Add Blog</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="userId">User:</label>
        <select id="userId" value={userId} onChange={handleUser}>
          {userOptions}
        </select>
        
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleChange}
        />
        <label htmlFor="body">Body:</label>
        <textarea id="body" name="body" value={body} onChange={handleChange} />
        <button type="submit" className="btn btn-primary" disabled={!isFill}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default AddBlogForm;
