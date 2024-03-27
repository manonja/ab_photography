import React, { FC } from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import { allPosts } from "contentlayer/generated";
import mdxComponents from "../../components/mdxComponents";

const MDXPost: FC<{ slug: string }> = ({ slug }) => {
  const blogPost = allPosts.find((post) => post?.slug === slug);
  const MdxContent = useMDXComponent(blogPost?.body.code || "");

  if (!blogPost) {
    return (
      <div className="flex flex-col mx-auto max-w-2xl items-center sm:pt-32 ">
        <h1 className="sm:py-8 py-4">Article not found</h1>
        <div>Article with address {slug} does not seem to exist</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col mx-auto max-w-2xl items-center sm:pt-32 ">
      <h1 className="sm:py-8 py-4">{blogPost.title}</h1>
      <MdxContent components={mdxComponents} />
    </div>
  );
};
const BlogPage = ({ params }: { params: { slug: string } }) => {
  return <MDXPost slug={params.slug} />;
};

export default BlogPage;
