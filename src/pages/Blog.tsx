import blogs from "@/data/blogs";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Blog() {
  return (
    <div className="zoxo-section">
      <div className="zoxo-container">

        <Helmet>
          <title>Backpack Guides & Tips | ZOXO Blog</title>
          <meta name="description" content="Explore backpack buying guides, tips and best recommendations." />
        </Helmet>

        <h1 className="text-3xl font-extrabold mb-8">
          Backpack Guides & Tips
        </h1>

        <div className="space-y-6">
          {blogs.map(blog => (
            <Link key={blog.slug} to={`/blog/${blog.slug}`} className="block p-6 bg-muted rounded-xl">
              <h2 className="text-xl font-bold">{blog.title}</h2>
              <p className="text-muted-foreground mt-2">{blog.description}</p>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}