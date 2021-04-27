# Jeff Labs - Hotjar Plugin

### Install the package:

```
yarn add @jeff-labs/hotjar-plugin
```

## Using Jeff Hotjar Plugin
### Initialize the plugin

In the main entry point of your application:

```
const hotjarPlugin = new HotjarPlugin({
  id: process.env.VUE_APP_APM_HOST,
  isActive: process.env.NODE_ENV === 'production'
})
```

Options: 

| Property | Type | Default | Description |
| -------------------- | ---------- |----------- |--------------------------------- |
| id | Number | (Required) | The Hotjar site id |
| isActive | Boolean | (Required)  | Disable or enable the plugin |
| snippetVersion | Number | 6  | The snippet version of the Hotjar script. |

### Identify users

Execute the `identify()` method

```
hotjarPlugin.identify(this.user.providerId, {
  language: this.user.locale,
  country_code: this.user.countryCode,
  roles: this.user.roles.toString(),
  vertical: 'BEAUTY'
})
```
