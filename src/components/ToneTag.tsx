export interface Props {
  tag: string;
  fullForm: string;
  addedBy: string;
  url: string;
}

export const ToneTag = ({ tag, fullForm, addedBy, url }: Props) => {
  const truncateString = (string = '', maxLength = 12) =>
    string.length > maxLength ? `${string.substring(0, maxLength)}…` : string;

  return (
    <a
      href={url}
      rel="prefetch"
      className="flex flex-col gap-y-3 hover:(no-underline bg-neutral-800) p-4 mb-8 transition-colors rounded-xl text-center"
    >
      <h3 className="text-(uwuPink xl) md:text-2xl font-extrabold">{tag}</h3>

      <p className="text-sm md:text-base font-medium">
        {truncateString(fullForm)}
      </p>
    </a>
  );
};
