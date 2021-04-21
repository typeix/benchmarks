Forked from Fastify

# Benchmarks

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.16.0`
* __Run:__ Thu Apr 01 2021 03:25:07 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| fastify                  | 3.14.1  | ✓      | 54954.4    | 17.69   | 9.80          |
| express                  | 4.17.1  | ✓      | 11202.4    | 88.72   | 2.00          |
| express-with-middlewares | 4.17.1  | ✓      | 9654.0     | 102.99  | 3.59          |
| express-route-prefix     | 4.17.1  | ✓      | 9457.1     | 105.23  | 3.50          |
| fastify-big-json         | 3.14.1  | ✓      | 9038.8     | 110.12  | 103.98        |


# K8s 
```shell
docker build . -t typeix/benchmarks
kubectl create -f local-pod.yml
kubectl delete -f local-pod.yml
```