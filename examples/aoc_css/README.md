# Append element

This is a simple bookmarklet. It will append a new stylesheet to the head of the
document.

This bookmarklet was built using the following command:

```bash
deno run -A --reload https://deno.land/x/bmt/main.ts ./examples/aoc_css/main.ts
```

## Usage

Copy and paste the following into your browser's address bar:

```
javascript:(()%3D%3E%7Bvar%20e%3Ddocument.createElement(%22link%22)%3Be.rel%3D%22stylesheet%22%3Be.href%3D%22https%3A%2F%2Fgist.github.com%2Fdiamondburned%2F26a88119a388b9d3c5ad5dc96128c81e%2Fraw%2F49b4b665520bb946c32b1948124f9fcc38555840%2Fstyle.css%22%3Bdocument.head.appendChild(e)%3B%7D)()%3B%0A
```

> Note: For reusability, you may want to add this to your bookmarks bar.
