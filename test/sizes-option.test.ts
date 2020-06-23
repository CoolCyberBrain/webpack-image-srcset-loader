import webpack from "webpack";

import compile from "./helpers/compile";
import execute from "./helpers/execute";
import getCompiler from "./helpers/getCompiler";
import readAsset from "./helpers/readAsset";

describe('"sizes" option', () => {
  test("should work with empty array", async () => {
    const compiler = getCompiler({
      sizes: [],
    });
    const stats = await compile(compiler);

    expect(
      execute(readAsset("main.bundle.js", compiler, stats as webpack.Stats))
    ).toMatchSnapshot("result");
  });

  test("should work with [null]", async () => {
    const compiler = getCompiler({
      sizes: [null],
    });
    const stats = await compile(compiler);

    expect(
      execute(readAsset("main.bundle.js", compiler, stats as webpack.Stats))
    ).toMatchSnapshot("result");
  });

  test('should work with ["300w"]', async () => {
    const compiler = getCompiler({
      sizes: ["300w"],
    });
    const stats = await compile(compiler);

    expect(
      execute(readAsset("main.bundle.js", compiler, stats as webpack.Stats))
    ).toMatchSnapshot("result");
  });

  test('should work with ["2x"]', async () => {
    const compiler = getCompiler({
      sizes: ["2x"],
    });
    const stats = await compile(compiler);

    expect(
      execute(readAsset("main.bundle.js", compiler, stats as webpack.Stats))
    ).toMatchSnapshot("result");
  });

  test('should work with ["1x", "2x"]', async () => {
    const compiler = getCompiler({
      sizes: ["1x", "2x"],
    });
    const stats = await compile(compiler);

    expect(
      execute(readAsset("main.bundle.js", compiler, stats as webpack.Stats))
    ).toMatchSnapshot("result");
  });

  test('should work with ["1x", "300w", null, "2x"]', async () => {
    const compiler = getCompiler({
      sizes: ["1x", "300w", null, "2x"],
    });
    const stats = await compile(compiler);

    expect(
      execute(readAsset("main.bundle.js", compiler, stats as webpack.Stats))
    ).toMatchSnapshot("result");
  });
});