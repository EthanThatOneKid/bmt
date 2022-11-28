/**
 * build takes a bookmarklet and converts it to a MD file.
 */
export function build(
  bookmarklet: string,
  heading = "Usage",
  depth: 1 | 2 | 3 | 4 | 5 | 6 = 2,
) {
  return `${"#".repeat(depth)} ${heading}

Copy and paste the following into your browser's address bar:

\`\`\`
${bookmarklet}
\`\`\`

> Note: For reusability, you may want to add this to your bookmarks bar.`;
}
