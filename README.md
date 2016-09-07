# eslint-plugin-promise

...

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-promise`:

```
$ npm install eslint-plugin-promise --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-promise` globally.

## Usage

Add `promise` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "promise"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "promise/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





