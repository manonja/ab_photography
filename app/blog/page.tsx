import {allPosts, Post} from "contentlayer/generated";
import {FC} from "react";
import Link from "next/link";
import {format, parseISO} from "date-fns";


const PostCard: FC<{post: Post}> = ({post}) => {
    const previewBody = post.body.raw.split(' ').slice(0, 20).join(' ')
    return (
        <div className="mb-6">
            <time dateTime={post.date} className="block text-sm text-slate-600">
                {format(parseISO(post.date), 'LLLL d, yyyy')}
            </time>
            <h2 className="text-lg ">
                <Link href={`/blog/${post.slug}`}>
                    {post.title}
                </Link>
                <div className="text-sm">
                    {previewBody}

                </div>
            </h2>
        </div>

    )
}
export default async function BlogPage() {

    return (
        <div className="flex flex-col mx-auto max-w-2xl items-center sm:py-32 ">
            <h1 className="mb-8">Latest posts</h1>
            {allPosts.map((post, idx) => (
                <PostCard key={idx} post={post}/>
            ))}
        </div>

    );
}
