Forked from Fastify

# Benchmarks
* __Machine:__ AMD-3975wx 32c/64t 
* __Docker:__ linux x64 | 4 vCPU | 4GB RAM
* __Node:__ `node:20` // lts
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

## 2024 - node:20 LTS
All frameworks ware clustered and using 4 vCPU with 4BG of ram in docker environment.

|                          | Version  | Router | Requests/s | Latency | Throughput/Mb |
| :--                      |:--------:| --:    |:----------:|:-------:|:-------------:|
| @typeix/router           |  ^8.7.0  | ✓      |   65185    |  14.99  |     9.13      |
| fastify                  | ^4.28.0  | ✓      |   60755    |  16.18  |     11.42     |
| @nestjs/platform-fastify | ^10.3.9  | ✓      |   55201    |  17.85  |     10.38     |
| @typeix/resty            |  ^8.7.0  | ✓      |   48062    |  20.55  |     6.73      |
| express                  | ^4.19.2  | ✓      |   14285    |  72.28  |     2.67      |
| @nestjs/platform-express | ^10.3.9  | ✓      |   11489    |  89.82  |     2.90      |


# Test Run
```shell
docker build . -t typeix/benchmarks
docker run --cpus=4 --volume=$(pwd)/results:/usr/src/app/results typeix/benchmarks
```
