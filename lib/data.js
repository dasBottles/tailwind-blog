import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), '_content');

export function getAllPosts() {
    const allPost = fs.readdirSync(contentDirectory);
    
    console.log(allPost)
    return allPost.map(fileName => {
        const tako = fileName.replace('.md', '')
        const fileContents = fs.readFileSync(
            path.join(contentDirectory, fileName), 'utf-8'
        );
        const { data, content } = matter(fileContents);
        return {
            data,
            content,
            tako
        };
    })

}
