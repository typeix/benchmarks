'use strict'

const bench = require('./lib/bench')
const { dependencies } = require('./package')

const packages = {
    express: { hasRouter: true },
    fastify: { checked: false, hasRouter: true },
    'nestjs-fastify.js': { checked: true, hasRouter: true, package: '@nestjs/platform-fastify' },
    'nestjs-express.js': { checked: true, hasRouter: true, package: '@nestjs/platform-express' },
    'typeix-resty.js': { checked: true,  hasRouter: true, package: '@typeix/resty' },
    'typeix-router.js': { checked: true, hasRouter: true, package: '@typeix/router' },
    'express-route-prefix': { extra: true, package: 'express', hasRouter: true },
    'express-with-middlewares': {
        extra: true,
        package: 'express',
        hasRouter: true
    }
}
const choices = [];
Object.keys(packages).forEach(pkg => {
    if (!packages[pkg].version) {
        const module = dependencies[pkg] ? pkg : packages[pkg].package
        const version = require(require.resolve(module + '/package.json')).version
        packages[pkg].version = version
    }
    choices.push(pkg)
})

run().catch(err => {
    console.error(err)
    process.exit(1)
})

async function run() {
    return bench({
        all: 'n',
        connections: 100,
        pipelining: 10,
        duration: 40
    }, choices)
}
