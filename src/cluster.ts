import {availableParallelism} from "node:os";
const cluster = require("node:cluster");

const numCPUs = availableParallelism();

export function clusterNode(callback: () => void, enabled: boolean = true): void {
  if (cluster.isPrimary && enabled) {
    console.log(`Primary ${process.pid} is running`);
    for (let i = 0; i < numCPUs; i++) {
      cluster.fork();
    }
    cluster.on('exit', (worker, code, signal) => {
      console.log(`worker ${worker.process.pid} died`);
    });
  } else {
    callback();
    console.log(`Worker ${process.pid} started`);
  }
}
