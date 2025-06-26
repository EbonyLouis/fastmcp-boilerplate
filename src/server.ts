import { FastMCP } from "fastmcp"; // Main library to create the MCP server
import { z } from "zod"; // Used to validate inputs
import fetch from "node-fetch"; // Lets us call external APIs like dog.ceo

// Create a new FastMCP server instance
const server = new FastMCP({
  name: "Dog MCP Server", // The name that Goose will display
  version: "1.0.0",        // Version of your server
});

// ✨ Live coding starts here!
// We'll add our tools (functions Goose can call) during the workshop.
























































// 🐕 Tool 1: Get a random dog image
// server.addTool({
//   name: "randomDog",
//   description: "Get a random dog image",
//   annotations: {
//     title: "Get Dog Pic",
//     readOnlyHint: true,
//     openWorldHint: true,
//   },
//   parameters: z.object({}), // No parameters needed for this one
//   execute: async () => {
//     const res = await fetch("https://dog.ceo/api/breeds/image/random");
//     const json = (await res.json()) as { message: string };
//     return json.message; // Just return the image URL
//   } 
// });

// 🐶 Tool 2: Get an image of a specific dog breed
// server.addTool({
//   name: "dogByBreed",
//   description: "Get a random image of a specific dog breed",
//   annotations: {
//     title: "Get Dog by Breed",
//     readOnlyHint: true,
//     openWorldHint: true,
//   },
//   parameters: z.object({
//     breed: z.string().describe("The breed of the dog (e.g., 'husky', 'pug')"),
//   }),
//   execute: async ({ breed }) => {
//     const res = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
//     const json = (await res.json()) as { message: string; status: string };
//     return json.message; // Return the image URL for that breed
//   }
// });

// Start the server so Goose can connect via stdio
server.start({
  transportType: "stdio",
});
