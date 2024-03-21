export interface IToneTag {
  url: string;
  frontmatter: {
    tag: string;
    fullForm: string;
    addedBy: string;
    popular: boolean;
    draft?: boolean;
  };
}