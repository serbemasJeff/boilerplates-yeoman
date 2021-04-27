import buble from '@rollup/plugin-buble'

module.exports = [
  {
    input: 'src/Testing.js',
    output: {
      name: 'Testing',
    },
    plugins: [
      buble({
        objectAssign: 'Object.assign'
      })
    ]
  }
]
