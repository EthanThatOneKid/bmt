# Append element

This is a simple bookmarklet. It will append a new element to the body of the
page.

This bookmarklet was built using the following command:

```bash
deno run -A --reload https://deno.land/x/bmt/main.ts ./examples/append_element/main.ts
```

## Usage

Copy and paste the following into your browser's address bar:

```
javascript:(()%3D%3E%7Bt(n())%3Bfunction%20n()%7Blet%20e%3Ddocument.createElement(%22div%22)%3Breturn%20e.innerHTML%3D%22Hello%2C%20World!%22%2Ce%7Dfunction%20t(e)%7Bdocument.body.insertBefore(e%2Cdocument.body.firstChild)%7D%7D)()%3B%0A
```

> Note: For reusability, you may want to add this to your bookmarks bar.
