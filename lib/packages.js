'use strict'

const { dependencies } = require('../package')

const packages = {
  express: { hasRouter: true },
  'express-route-prefix': { extra: true, package: 'express', hasRouter: true },
  'express-with-middlewares': {
    extra: true,
    package: 'express',
    hasRouter: true
  },
  fastify: { checked: false, hasRouter: true },
  'nestjs-fastify.js': { checked: true, hasRouter: true, package: '@nestjs/platform-fastify' },
  'nestjs-express.js': { checked: true, hasRouter: true, package: '@nestjs/platform-express' },
  'typeix-resty.js': { checked: true,  hasRouter: true, package: '@typeix/resty' },
  'typeix-router.js': { checked: true, hasRouter: true, package: '@typeix/router' }
}

let choices = []
Object.keys(packages).forEach(pkg => {
  if (!packages[pkg].version) {
    const module = dependencies[pkg] ? pkg : packages[pkg].package
    const version = require(require.resolve(module + '/package.json')).version
    packages[pkg].version = version
  }
  choices.push(pkg)
})

module.exports = {
  choices: choices.sort(),

  list: (extra = false) => {
    return choices
      .map(c => {
        return extra === !!packages[c].extra
          ? Object.assign({}, packages[c], { name: c })
          : null
      })
      .filter(c => c)
  },

  info: module => {
    return packages[module]
  }
}
