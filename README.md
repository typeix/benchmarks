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
* __Run:__ Mon Mar 29 2021 17:54:28 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| foxify                   | 0.10.20 | ✓      | 67571.2    | 14.30   | 11.08         |
| polka                    | 0.5.2   | ✓      | 67096.0    | 14.44   | 11.96         |
| 0http                    | 3.1.0   | ✓      | 66963.2    | 14.47   | 11.94         |
| bare                     | 10.13.0 | ✗      | 66843.2    | 14.49   | 11.92         |
| rayo                     | 1.3.6   | ✓      | 65789.2    | 14.70   | 11.73         |
| polkadot                 | 1.0.0   | ✗      | 65119.6    | 14.88   | 11.61         |
| connect                  | 3.7.0   | ✗      | 65029.6    | 14.90   | 11.60         |
| micro                    | 9.3.4   | ✗      | 64771.6    | 14.97   | 11.55         |
| restana                  | 4.8.1   | ✓      | 64140.8    | 15.09   | 11.44         |
| fastify                  | 3.14.1  | ✓      | 61516.0    | 15.76   | 10.97         |
| yeps                     | 1.1.1   | ✗      | 59276.0    | 16.39   | 10.57         |
| server-base-router       | 7.1.23  | ✓      | 58543.2    | 16.59   | 10.44         |
| server-base              | 7.1.23  | ✗      | 58374.4    | 16.62   | 10.41         |
| vapr                     | 0.6.0   | ✓      | 56633.6    | 17.17   | 9.29          |
| connect-router           | 1.3.5   | ✓      | 55726.4    | 17.45   | 9.94          |
| trek-router              | 1.2.0   | ✓      | 54404.8    | 17.89   | 8.92          |
| micro-route              | 2.5.0   | ✓      | 53353.6    | 18.25   | 9.51          |
| yeps-router              | 1.2.0   | ✓      | 52503.2    | 18.55   | 9.36          |
| trek-engine              | 1.0.5   | ✗      | 51780.8    | 18.82   | 8.49          |
| total.js                 | 3.4.8   | ✓      | 47213.6    | 20.69   | 14.45         |
| take-five                | 2.0.0   | ✓      | 47052.0    | 20.75   | 16.92         |
| spirit                   | 0.6.1   | ✗      | 45168.0    | 21.66   | 8.06          |
| restify                  | 8.5.1   | ✓      | 44912.0    | 21.77   | 8.10          |
| koa                      | 2.13.1  | ✗      | 44251.2    | 22.09   | 7.89          |
| spirit-router            | 0.5.0   | ✓      | 44140.0    | 22.17   | 7.87          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 43710.4    | 22.38   | 7.80          |
| koa-router               | 10.0.0  | ✓      | 40748.0    | 24.04   | 7.27          |
| hapi                     | 20.1.2  | ✓      | 31733.4    | 31.01   | 5.66          |
| microrouter              | 3.1.3   | ✓      | 30105.6    | 32.70   | 5.37          |
| egg.js                   | 2.29.3  | ✓      | 19993.6    | 49.49   | 7.04          |
| express                  | 4.17.1  | ✓      | 13124.0    | 75.64   | 2.34          |
| express-route-prefix     | 4.17.1  | ✓      | 11061.4    | 89.85   | 4.09          |
| fastify-big-json         | 3.14.1  | ✓      | 10999.8    | 90.43   | 126.55        |
| express-with-middlewares | 4.17.1  | ✓      | 10679.2    | 93.08   | 3.97          |
