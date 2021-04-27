var Generator = require('yeoman-generator');
var rename = require("gulp-rename");

module.exports = class extends Generator {
    // The name `constructor` is important here
    constructor(args, opts) {
      // Calling the super constructor is important so our generator is correctly set up
      super(args, opts);
  
      // Next, add your custom code
      this.option('babel'); // This method adds support for a `--babel` flag
    }

    async prompting() {
        this.answers = await this.prompt([
            {
                type: "input",
                name: "pluginName",
                message: "Your project name",
              }
        ]);
    }

    paths() {
        console.log('Reading from: ' + this.sourceRoot())
        console.log('Writing to: ' + this.destinationRoot('dist'))
    }
    
    writing() {
        // name of the plugin
        const name = this.answers.pluginName
        
        this.log("Generating plugin with name: ", name);
        
        this.registerTransformStream(rename(function(path) {
            // replace all the #PluginName# for files and directories
            path.basename = path.basename.replace(/#PluginName#/g, name);
            path.dirname = path.dirname.replace(/#PluginName#/g, name);
            return path;
        }));
        
        // use copyTpl for replace variables in templates
        this.fs.copyTpl(
            this.sourceRoot(),
            this.destinationRoot(),
            { pluginName: name }
        );
      }
  };