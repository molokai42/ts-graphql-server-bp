import { createConfirmEmailLink } from "./createConfirmEmailLink";
import { createTypeOrmConn } from "./createTypeOrmConn";
import { User } from "../entity/User";
import * as Redis from "ioredis";
import fetch from "node-fetch";

let userId = " ";

beforeAll(async () => {
  await createTypeOrmConn();
  const user = await User.create({
    email: "bobwq5@bob.com",
    password: "lkajdf"
  }).save();
  userId = user.id;
});
test("Make sure createConfirmEmailLink works", async () => {
  const url = await createConfirmEmailLink(
    process.env.TEST_HOST as string,
    userId,
    new Redis()
  );

  const response = await fetch(url);
  const text = await response.text();
  console.log(text);
});
