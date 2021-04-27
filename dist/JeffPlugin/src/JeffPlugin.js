class JeffPlugin {
  constructor({ id, isActive, snippetVersion = 6 }) {
    this.hotjarId = id
    this.isActive = isActive
    this.snippetVersion = snippetVersion

    this.initialize()
  }

  initialize () {
    // This is the initialize method
  }

  identify (userId, props) {
    // This is the identify method
  }
}

export default JeffPlugin
