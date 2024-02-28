import {MDXComponents} from "mdx/types";
import Link from "next/link";

const MdxComponents: MDXComponents =  {

    a: ({ href, children}) => <Link href={href as string}>{children}</Link>,
    // Add a custom component
    MyComponent:() => <div>Hello!</div>
}

export default MdxComponents;