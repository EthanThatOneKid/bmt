# Hello World

This is a simple bookmarklet. It will display a prompt in the browser.

This bookmarklet was built using the following command:

```bash
deno run -A --reload https://deno.land/x/bmt/main.ts ./examples/hello_world/main.ts
```

## Usage

Copy and paste the following into your browser's address bar:

```
javascript:(()%3D%3E%7Bfunction%20r(e)%7Breturn%60Hello%2C%20%24%7Be%7D!%60%7Dvar%20t%3Dprompt(%22What%20is%20your%20name%3F%22)%3Bt%26%26alert(r(t))%3B%7D)()%3B%0A
```

> Note: For reusability, you may want to add this to your bookmarks bar.
