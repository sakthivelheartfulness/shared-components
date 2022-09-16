module.exports = {
	env: {
	  browser: true,
	  es2021: true,
	  node: true,
	},
	extends: ['plugin:react/recommended', 'prettier'],
	parser: '@babel/eslint-parser',
	parserOptions: {
	  ecmaFeatures: {
		jsx: true,
	  },
	  ecmaVersion: 8,
	  sourceType: 'module',
	  requireConfigFile: false,
	  babelOptions: {
		presets: ['@babel/preset-react'],
	  },
	},
	plugins: ['react'],
  
	rules: {
	  camelcase: 'off',
	  "arrow-body-style": 0,
	  "no-param-reassign": 0,
	  "class-methods-use-this": 0,
	  "no-restricted-exports": 0,
	  "no-unused-react-component-methods": "off",
	  "object-shorthand": ["error", "never"],
	  "no-param-reassign": ["error", { "props": false }],
	  "react/destructuring-assignment": 0,
	  "react/prop-types": "off",
	  "requireReturnForObjectLiteral": 0 ,
	  'react/jsx-props-no-spreading': 'off',
	  'react/jsx-filename-extension': [1, { "extensions": [".js", ".jsx"] }],
  
	  'jsx-a11y/label-has-associated-control': [
		'error',
		{
		  required: {
			some: ['nesting', 'id'],
		  },
		},
	  ],
	  'jsx-a11y/label-has-for': [
		'error',
		{
		  required: {
			some: ['nesting', 'id'],
		  },
		},
	  ],
	  'react/function-component-definition': [
		2,
		{
		  namedComponents: 'arrow-function',
		  unnamedComponents: 'arrow-function',
		},
	  ],
	},
	ignorePatterns: ['src/sharedcomponents/*','src/utils/*'],
	settings: {
	  'import/resolver': {
		node: {
		  paths: ['src'],
		  extensions: ['.js', '.jsx', '.ts', '.d.ts', '.tsx'],
		},
	  },
	},
  };
  