import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

export default defineConfig({
  basePath: "/studio",
  name: "medium",
  title: "medium-clone",
  projectId: "7umex568",
  dataset: "production",
  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
