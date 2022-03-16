/** Import dependencies */

import Link from 'next/link';
import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styled from 'styled-components';
import useSWR from 'swr';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import style from 'react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus';

/** SWR fetcher */
const fetcher = (...args: any) => fetch(args).then(async res => {
  return await res.text()
});

/** css */
const StyledLink = styled.a`
  color: #428af5;
`


const Post = () => {
  /** Get next/router handler and get the page ID, used to check if page is ready so that the data can be fetched */
  const router = useRouter()
  const { id } = router.query;

  /** Fetch data with SWR from the CMS (really just a github repo) and 
   * return loading or error if an error is encountered 
   * data is the markdown content, a string 
   * */
  const { data, error } = useSWR(id ? `https://raw.githubusercontent.com/Squirrelcoding/SoftsquirrelProps/main/blogposts/newposts/${id}.md` : null, fetcher);
  if (error) return <div>error: {JSON.stringify(error)}</div>
  if (!data) return <div>loading...</div>

  return (
    <>
      {/** React markdown component to render markdown content from the "CMS" */}
      <ReactMarkdown remarkPlugins={[remarkGfm]}

        /** Explicitly define what to replace markdown components (headers, blockquotes, etc)
         *  with custom components.
         */
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')!;
            return !inline && match ? (
              <SyntaxHighlighter
                language={match[1]}
                preTag="code"
                style={style}
                showLineNumbers
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          },
          blockquote: ({ ...props }: any) => {
            return <div style={{
              borderLeft: "5px solid #9898a3  ",
              padding: "0.5em 10px",
              margin: "1.5em px",
              color: "#9898a3"
            }}>

              <i  {...props} />
            </div>
          }
        }}
      >{data}</ReactMarkdown>
      <br />
      <Link href="/updates" passHref>
        <StyledLink>See more posts</StyledLink>
      </Link>
    </>

  )
}

export default Post