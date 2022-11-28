# bmt

Tool for bundling bookmarklets in Deno.

## Usage

### CLI

```bash
deno run -A --reload https://deno.land/x/bmt/main.ts ./examples/hello_world/main.ts
```

<details>
<summary>Local (for contributors)</summary>

```bash
deno run -A --reload ./main.ts ./examples/hello_world/main.ts
```

</details>

## Contributing

### Setup

```bash
git clone
cd bmt
```

### Testing

```bash
deno test
```

### Building

```bash
deno run --reload -A examples_gen.ts
```

## References

- [Bookmarklets](https://en.wikipedia.org/wiki/Bookmarklet)

---

Created with 💖 by [**@EthanThatOneKid**](https://etok.codes/)
