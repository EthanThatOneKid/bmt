# External

This is a simple bookmarklet. It will print `"Hello, External!" to the console
signifying that the external module was bundled successfully.

This bookmarklet was built using the following command:

```bash
deno run -A --reload https://deno.land/x/bmt/main.ts ./examples/external/main.ts
```

## Usage

Copy and paste the following into your browser's address bar:

```
javascript:(()%3D%3E%7Bfunction%20e(r)%7Breturn%60Hello%2C%20%24%7Br%7D!%60%7Dconsole.log(e(%22External%22))%3B%7D)()%3B%0A
```

> Note: For reusability, you may want to add this to your bookmarks bar.
