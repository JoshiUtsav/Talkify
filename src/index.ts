import { Hono, Context } from "hono";

const app = new Hono();

app.get("/", (c: Context) => {
  return c.text("Hello Hono!");
});

export default app;
