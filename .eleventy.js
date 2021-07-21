module.exports = (eleventyConfig) => {

  eleventyConfig.addPassthroughCopy('src/assets/img/icon.png')

  return {
    passthroughFileCopy: true,
    markdownTemplateEngine: 'njk',
    templateFormats: ['html', 'njk', 'md', 'js'],
    dir: {
      input: 'src',
      output: '_public'
    }
  }
}