import React, { FC } from "react";


const BlogPage = ({ params }: { params: { slug: string } }) => {

    return <div className="flex flex-col w-full items-center sm:pt-32 ">My Post: {params.slug}</div>

};

export default BlogPage
