import BlogUser from "./BlogUser";
import ResponseButtons from "./ResponseButton";
import blogSlice from "./blogSlice";
import {useSelector } from "react-redux/es/hooks/useSelector";
import { selectAllBlogs } from "./blogSlice";



const BlogsList = () => {
    const blogs = useSelector(selectAllBlogs)
  const renderedBlogs = blogs.map((blog) => (
    <div key={blog.id} className="card">
      <div className="card-body">
        <h3>{blog.title}</h3>
        <p>{blog.body.substring(0, 100)}</p>
        <p className="lead">
          <BlogUser userId={blog.userId} />
        </p>
        <ResponseButtons blog={blog} />
      </div>
    </div>
  ));

  return (
    <section>
      <h2>Blogs</h2>
      {renderedBlogs}
    </section>
  );
};

export default BlogsList;