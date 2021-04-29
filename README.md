Forked from Fastify

# Benchmarks

* __Machine:__ AMD-3800x 8c/16t | docker linux x64 | 2 vCPU | 4GB RAM
* __Node:__ `node:14`
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| fastify                  | ^3.0.0  | ✓      | 81185.61   | 11.82   | 15.18         |
| @nestjs/platform-fastify | ^7.6.15 | ✓      | 68189.2    | 14.17   | 12.75         |
| @typeix/router           | ^7.4.1  | ✓      | 65384.4    | 14.8    | 9.15          |
| @typeix/resty            | ^7.4.1  | ✓      | 55476.8    | 17.53   | 7.77          |
| express                  | ^4.16.4 | ✓      | 17665.6    | 56.1    | 3.30          |
| @nestjs/platform-express | ^7.6.15 | ✓      | 14079      | 70.47   | 3.55          |



# Test Run
```shell
docker build . -t typeix/benchmarks
docker run --cpus=4 --volume=$(pwd)/results:/usr/src/app/results typeix/benchmarks
```
