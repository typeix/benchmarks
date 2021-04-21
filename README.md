Forked from Fastify

# Benchmarks

* __Machine:__ linux x64 | 2 CPUs 
* __Node:__ `node:14`
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| fastify                  | 3.14.1  | ✓      | 82750.4    | 11.58   | 15.4          |
| @nestjs/fastify          | 7.6.15  | ✓      | 69679.2    | 13.86   | 13.03         |
| @typeix/router           | 7.1.10  | ✓      | 61805.2    | 15.68   | 8.65          |
| @typeix/resty            | 7.1.10  | ✓      | 52518.2    | 18.54   | 7.54          |
| express                  | 4.17.1  | ✓      | 17543.5    | 56.47   | 3.2           |
| @nestjs/express          | 7.6.15  | ✓      | 14775.2    | 67.13   | 3.72          |

# K8s 
```shell
docker build . -t typeix/benchmarks
docker run -it --cpus=2 typeix/benchmarks /bin/bash
kubectl create -f local-pod.yml
kubectl delete -f local-pod.yml
```