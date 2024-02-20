import BlogUser from "./BlogUser";
import ResponseButtons from "./ResponseButton";

const blogs = [
  {
    id: "1",
    title: "Basic Redux-Toolkit",
    body:
      "The Redux Toolkit package is intended to be the standard way to write Redux logic. It was originally created to help address three common concerns about Redux",
    response: {
      like: 0,
      unlike: 0,
    },
  },
  {
    id: "2",
    title: "React Redux",
    body:
      "React Redux is maintained by the Redux team, and kept up-to-date with the latest APIs from Redux and React.",
    response: {
      like: 0,
      unlike: 0,
    },
  },
];

const BlogsList = () => {
  const renderedBlogs = blogs.map((blog) => (
    <div key={blog.id} className="card">
      <div className="card-body">
        <h3>{blog.title}</h3>
        <p>{blog.body.substring(0, 100)}</p>
        <p className="lead">
          <BlogUser userId={blog.userId} />
        </p>
        <ResponseButtons />
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