<div align="center">
<img src="https://github.com/fastify/graphics/raw/master/full-logo.png" width="650" height="auto"/>
</div>

<div align="center">

[![CI](https://github.com/fastify/fastify/workflows/ci/badge.svg)](https://github.com/fastify/fastify/actions/workflows/ci.yml)
[![Coverage Status](https://coveralls.io/repos/github/fastify/fastify/badge.svg?branch=master)](https://coveralls.io/github/fastify/fastify?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
[![NPM version](https://img.shields.io/npm/v/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify)
[![NPM downloads](https://img.shields.io/npm/dm/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify) [![Gitter](https://badges.gitter.im/gitterHQ/gitter.svg)](https://gitter.im/fastify)
</div>
<br />

# TL;DR

* [Fastify](https://github.com/fastify/fastify) is a fast and low overhead web framework for Node.js.
* This package shows how fast it is comparatively.

# Installing

```
npm i -g fastify-benchmarks
```

# Usage

```
benchmark [arguments (optional)]
```

#### Arguments

* `-h`: Help on how to use the tool.
* `compare`: Get comparative data for your benchmarks.

> You may also compare all test results, at once, in a single table; `benchmark compare -t`

> You can also extend the comparison table with percentage values based on fastest result; `benchmark compare -p`
# Benchmarks

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.16.0`
* __Run:__ Thu Apr 01 2021 03:25:07 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 56307.2    | 17.29   | 10.04         |
| bare                     | 10.13.0 | ✗      | 56080.0    | 17.34   | 10.00         |
| fastify                  | 3.14.1  | ✓      | 54954.4    | 17.69   | 9.80          |
| foxify                   | 0.10.20 | ✓      | 54838.4    | 17.74   | 9.00          |
| connect                  | 3.7.0   | ✗      | 54190.4    | 17.96   | 9.66          |
| 0http                    | 3.1.0   | ✓      | 54096.8    | 18.00   | 9.65          |
| polka                    | 0.5.2   | ✓      | 53883.2    | 18.06   | 9.61          |
| server-base-router       | 7.1.23  | ✓      | 53549.6    | 18.17   | 9.55          |
| micro                    | 9.3.4   | ✗      | 52959.2    | 18.39   | 9.44          |
| server-base              | 7.1.23  | ✗      | 52910.4    | 18.40   | 9.44          |
| rayo                     | 1.3.6   | ✓      | 52896.0    | 18.40   | 9.43          |
| restana                  | 4.8.1   | ✓      | 52033.6    | 18.73   | 9.28          |
| yeps                     | 1.1.1   | ✗      | 50727.2    | 19.22   | 9.05          |
| connect-router           | 1.3.5   | ✓      | 50071.2    | 19.48   | 8.93          |
| micro-route              | 2.5.0   | ✓      | 48802.4    | 19.99   | 8.70          |
| trek-engine              | 1.0.5   | ✗      | 47991.2    | 20.35   | 7.87          |
| trek-router              | 1.2.0   | ✓      | 47357.6    | 20.62   | 7.77          |
| vapr                     | 0.6.0   | ✓      | 43812.8    | 22.33   | 7.19          |
| koa                      | 2.13.1  | ✗      | 42143.4    | 23.24   | 7.52          |
| spirit                   | 0.6.1   | ✗      | 41633.6    | 23.53   | 7.42          |
| yeps-router              | 1.2.0   | ✓      | 40825.6    | 24.00   | 7.28          |
| spirit-router            | 0.5.0   | ✓      | 40064.0    | 24.49   | 7.14          |
| total.js                 | 3.4.8   | ✓      | 37519.8    | 26.16   | 11.49         |
| koa-isomorphic-router    | 1.0.1   | ✓      | 36468.2    | 26.92   | 6.50          |
| take-five                | 2.0.0   | ✓      | 35115.8    | 27.97   | 12.63         |
| koa-router               | 10.0.0  | ✓      | 35066.2    | 28.02   | 6.25          |
| restify                  | 8.5.1   | ✓      | 34030.2    | 28.88   | 6.13          |
| hapi                     | 20.1.2  | ✓      | 28517.6    | 34.56   | 5.09          |
| microrouter              | 3.1.3   | ✓      | 27507.6    | 35.85   | 4.91          |
| egg.js                   | 2.29.3  | ✓      | 18106.5    | 54.71   | 6.37          |
| express                  | 4.17.1  | ✓      | 11202.4    | 88.72   | 2.00          |
| express-with-middlewares | 4.17.1  | ✓      | 9654.0     | 102.99  | 3.59          |
| express-route-prefix     | 4.17.1  | ✓      | 9457.1     | 105.23  | 3.50          |
| fastify-big-json         | 3.14.1  | ✓      | 9038.8     | 110.12  | 103.98        |
