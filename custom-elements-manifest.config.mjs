export default {
  /** Globs to analyze */
  globs: ['src/components/**/*.{js,ts}'],
  /** Exclude files */
  exclude: ['src/components/**/*.{stories,spec}.{js,ts}'],
  /** Output directory */
  outdir: './',
  /** Run in watch mode */
  watch: false,
  /** Enable support for litelement */
  litelement: true,
};
