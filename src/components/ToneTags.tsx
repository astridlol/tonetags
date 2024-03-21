import type { IToneTag } from "../types";
import { ToneTag } from "./ToneTag";

export const ToneTags = ({ posts }: { posts: IToneTag[] }) => {
  const sortedPosts = [...posts].sort((a, b) => {
    if (a.frontmatter.popular) return -1; // a comes before b
    else if (b.frontmatter.popular) return 1; // b comes before a
    else return 0; // no change in order
  });

  return (
    <>
      {sortedPosts.map((post) => (
        <ToneTag
          key={post.url}
          url={post.url}
          tag={post.frontmatter.tag}
          fullForm={post.frontmatter.fullForm}
          addedBy={post.frontmatter.addedBy}
        />
      ))}
    </>
  );
};
