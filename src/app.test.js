
const test = require("node:test");
const assert = require("node:assert/strict");
const { createServer } = require("node:http");
const app = require("./app");

test("health endpoint returns OK status", async () => {
  const server = createServer(app);

  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));

  try {
    const address = server.address();
    const response = await fetch(
      `http://127.0.0.1:${address.port}/health`
    );

    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), { status: "OK" });
  } finally {
    await new Promise((resolve, reject) => {
      server.close((error) => error ? reject(error) : resolve());
    });
  }
});

test("root endpoint returns project information", async () => {
  const server = createServer(app);

  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));

  try {
    const address = server.address();
    const response = await fetch(
      `http://127.0.0.1:${address.port}/`
    );

    assert.equal(response.status, 200);

    const data = await response.json();
    assert.equal(data.status, "Healthy");
    assert.equal(data.project, "GitHub Actions + Docker + KIND");
  } finally {
    await new Promise((resolve, reject) => {
      server.close((error) => error ? reject(error) : resolve());
    });
  }
});
