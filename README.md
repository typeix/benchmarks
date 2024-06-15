Forked from Fastify

# Benchmarks
* __Machine:__ AMD-3975wx 32c/64t 
* __Docker:__ linux x64 | 2 vCPU | 4GB RAM
* __Node:__ `node:20` // lts
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

## 2024 - node:20 LTS
|                          | Version  | Router | Requests/s | Latency | Throughput/Mb |
| :--                      |:--------:| --:    |:----------:|:-------:|:-------------:|
| fastify                  | ^4.28.0  | ✓      |   56358    |  17.24  |     10.60     |
| @typeix/router           |  ^8.7.0  | ✓      |   50156    |  19.42  |     7.02      |
| @nestjs/platform-fastify | ^10.3.9  | ✓      |   49211    |  19.82  |     9.25      |
| @typeix/resty            |  ^8.7.0  | ✓      |   42208    |  23.17  |     5.91      |
| express                  | ^4.19.2  | ✓      |   13524    |  73.39  |     2.53      |
| @nestjs/platform-express | ^10.3.9  | ✓      |   11550    |  86.01  |     2.91      |


# Test Run
```shell
docker build . -t typeix/benchmarks
docker run --cpus=2 --volume=$(pwd)/results:/usr/src/app/results typeix/benchmarks
```
