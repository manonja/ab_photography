
import { defineDocumentType, makeSource } from 'contentlayer/source-files'

// Define schema for posts
export const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: `**/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: {
            type: 'string',
            description: 'The title of the post',
            required: true,
        },
        date: {
            type: 'date',
            description: 'The date of the post',
            required: true,
        },
        slug: {
            type: 'string',
            description: 'The slug of the post',
            required: true
        },
        image: {
            type: 'string', description: 'The image of the post', required: false
        },
        abstract: {type: 'string', description: 'The description of the post', required: false}
    },
    computedFields: {
        url: {
            type: 'string',
            resolve: (post) => `/posts/${post.slug}`,
        },
    },
}))

export default makeSource({
    contentDirPath: 'posts',
    documentTypes: [Post],
})