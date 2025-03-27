import { exec } from "child_process";
import { input, select } from "@inquirer/prompts";

async function create() {
  console.log("create 命令执行中...");
}

async function createComp(params: { name: string }) {
  exec(`mkdir ${params.name}`);
  exec(`cd ${params.name}`);
  exec(`npm init -y`);
}

export { create, createComp };
