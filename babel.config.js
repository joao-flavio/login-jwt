module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@models': './src/app/models',
        '@controllers': './src/app/controllers',
        '@middlewares': './src/app/middlewares'
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}