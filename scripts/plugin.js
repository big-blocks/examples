const markedPenrose = require('marked-penrose')

console.log('i am so cool')

hexo.extend.filter.register('marked:extensions', (/** @type {unknown[]} */ extensions) => {
    console.log('pushing')
    extensions.push(markedPenrose());
});
