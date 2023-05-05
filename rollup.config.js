import nodeResolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";

const dev = process.env.ROLLUP_WATCH;

export default {
  input: "src/fan-percent-button-row.js",
  output: {
    file: "fan-percent-button-row.js",
    format: "es",
  },
  plugins: [
    nodeResolve(),
    babel({
      exclude: "node_modules/**",
    })
  ],
};
