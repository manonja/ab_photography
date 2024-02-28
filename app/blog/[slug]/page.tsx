import React, { FC } from "react";
import {useMDXComponent} from "next-contentlayer/hooks";
import {allPosts, Post} from "contentlayer/generated";


const MDXPost: FC<{slug: string}> = ({slug}) => {
    const blogPost = allPosts.find((post) => post?.slug === slug)
    if (!blogPost) {
        return (
            <>
                <div>Post not found</div>
                <div>Page with address {slug} not found</div>
            </>

        )
    }
    const MdxContent = useMDXComponent(blogPost.body.code)
    return (

        <>
            <h1 className="sm:py-8 py-4">{blogPost.title}</h1>
            <MdxContent/>

        </>
)
}
const BlogPage = ({params}: { params: { slug: string } }) => {
    return (
        <div className="flex flex-col mx-auto max-w-2xl items-center sm:pt-32 ">
            <MDXPost slug={params.slug}/>
        </div>
    )

};

export default BlogPage
