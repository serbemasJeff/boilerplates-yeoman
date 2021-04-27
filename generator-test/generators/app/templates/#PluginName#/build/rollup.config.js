import buble from '@rollup/plugin-buble'

module.exports = [
  {
    input: 'src/<%= pluginName %>.js',
    output: {
      name: '<%= pluginName %>',
    },
    plugins: [
      buble({
        objectAssign: 'Object.assign'
      })
    ]
  }
]
