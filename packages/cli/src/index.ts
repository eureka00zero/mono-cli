#!/usr/bin/env node
import create from "@erueka/create";
import { Command } from "commander";
import fse from "fs-extra";
import path from "node:path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pkgJson = fse.readJSONSync(path.join(__dirname, "../package.json"));

const program = new Command();

program.name("erueka").description("脚手架 cli").version(pkgJson.version);

program
  .command("create")
  .description("创建项目")
  .action(async () => {
    create();
  });

program.parse();
