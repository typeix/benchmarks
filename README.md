Forked from Fastify

# Benchmarks

* __Machine:__ I7-6820HQ 2.7Ghz 4c/8t | docker linux x64 | 2 vCPU | 4GB RAM
* __Node:__ `node:14`
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| fastify                  | ^3.0.0  | ✓      | 42312      | 23.21   | 7.91          |
| @nestjs/platform-fastify | ^7.6.15 | ✓      | 37491      | 26.19   | 7.00          |
| @typeix/router           | ^7.4.0  | ✓      | 35417.4    | 27.74   | 5.10          |
| @typeix/resty            | ^7.4.0  | ✓      | 29979.6    | 32.86   | 4.20          |
| express                  | ^4.16.4 | ✓      | 10391.8    | 95.65   | 1.95          |
| @nestjs/platform-express | ^7.6.15 | ✓      | 8116.15    | 122.56  | 2             |


# Test Run
```shell
docker build . -t typeix/benchmarks
docker run --cpus=4 --volume=$(pwd)/results:/usr/src/app/results typeix/benchmarks
```
