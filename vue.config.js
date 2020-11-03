const path = require('path')
const resolve = dir => path.join(__dirname, dir) // 设置绝对路径

module.exports = {
  chainWebpack: config => {
    // 设置快捷路径， @ 默认表示 'src' ，components 表示 'src/components'
    // set(别名, 路径)
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('views', resolve('src/views'))
      .set('common', resolve('src/common'))
      .set('network', resolve('src/network'))
  },
}