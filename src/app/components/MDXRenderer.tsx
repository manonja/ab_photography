import {useMDXComponent} from "next-contentlayer/hooks";
import {FC} from "react";
import {Post} from "contentlayer/generated";
import mdxComponents from "./mdxComponents";

const MDXRenderer: FC<{ post: Post}> = ({post}) => {
    const MDXContent = useMDXComponent(post.body.code)

    return <MDXContent components={mdxComponents}/>
}

export default MDXRenderer;