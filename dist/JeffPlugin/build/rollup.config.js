import buble from '@rollup/plugin-buble'

module.exports = [
  {
    input: 'src/JeffPlugin.js',
    output: {
      name: 'JeffPlugin',
    },
    plugins: [
      buble({
        objectAssign: 'Object.assign'
      })
    ]
  }
]
