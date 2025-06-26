# Dog MCP Server 🐶

This is a simple MCP server built with [FastMCP](https://github.com/punkpeye/fastmcp) that connects to [Goose](https://github.com/block/goose) and fetches random dog images using the [Dog API](https://dog.ceo/dog-api/).

You'll build this project step-by-step in the workshop!

---

## 🛠 Prerequisites

- Node.js v20+
- npm
- [Goose Desktop](https://block.github.io/goose/)

---

## 🚀 Setup

Clone the project and install dependencies:

```bash
git clone https://github.com/EbonyLouis/fastmcp-boilerplate.git dog-mcp
cd dog-mcp
npm install
```

---

## 🧪 Run it with Goose

After building the project, you can connect it to Goose using:

```bash
npm run build
```

Then in Goose Desktop, add the extension with:

```bash
node /Users/[userdirectory]/dog-mcp/dist/server.js
```

This connects your local server to Goose using the compiled version.

---

## 🧑‍💻 During the Workshop

You’ll build and connect the server live by:

1. Writing a tool that fetches a random dog image
2. Connecting it to Goose
3. Prompting Goose to try it out
4. Adding a second tool to fetch dogs by breed

The `server.ts` file starts simple and will be updated live.

---

## 🧼 Scripts

- Build the project (required after each code change if you're using `node dist/server.js`):

```bash
npm run build
```
---

## 👀 Want to explore more?

Check out:
- [Dog API docs](https://dog.ceo/dog-api/)
- [FastMCP GitHub](https://github.com/punkpeye/fastmcp)
- [Goose Open Source Agent](https://github.com/block/goose)

---

🐾 Built with love and dog pics.
