/**
 * build takes content from a JS file and converts it to a bookmarklet.
 */
export function build(js: string) {
  return `javascript:${encodeURIComponent(js)}`;
}
