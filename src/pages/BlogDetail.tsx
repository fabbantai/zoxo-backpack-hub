import { useParams } from "react-router-dom";
import blogs from "@/data/blogs";
import { Helmet } from "react-helmet-async";

export default function BlogDetail() {
  const { slug } = useParams();
  const blog = blogs.find(b => b.slug === slug);

  if (!blog) return <div>Not found</div>;

  return (
    <div className="zoxo-section">
      <div className="zoxo-container max-w-3xl">

        <Helmet>
          <title>{blog.title} | ZOXO</title>
          <meta name="description" content={blog.description} />
        </Helmet>

        <h1 className="text-3xl font-extrabold">{blog.title}</h1>
        <p className="mt-4 text-muted-foreground">{blog.content}</p>

      </div>
    </div>
  );
}