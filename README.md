# bmt

[![deno doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https://deno.land/x/bmt/build/mod.ts)

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
git clone https://github.com/EthanThatOneKid/bmt.git
cd bmt
```

### Building

```bash
deno task generate
```

### Conventions

The usage of `deno task fmt` and `deno task lint` is enforced by continuous
integration (CI).

The file responsible for enforcing these conventions is
[.github/workflows/conventions.yaml](.github/workflows/conventions.yaml).

## References

- <https://en.wikipedia.org/wiki/Bookmarklet>

---

Created with 💖 by [**@EthanThatOneKid**](https://etok.codes/)
