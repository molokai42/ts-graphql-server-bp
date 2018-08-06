import { generateNamespace } from "@gql2ts/from-schema";
import { genSchema } from "../utils/generateSchema";
import * as fs from "fs";
import * as path from "path";

const typeScriptTypes = generateNamespace("GQL", genSchema());

fs.writeFile(
  path.join(__dirname, "../types/schema.d.ts"),
  typeScriptTypes,
  err => {
    console.log(err);
  }
);
