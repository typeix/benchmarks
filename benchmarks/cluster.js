"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clusterNode = void 0;
const node_os_1 = require("node:os");
const cluster = require("node:cluster");
const numCPUs = (0, node_os_1.availableParallelism)();
function clusterNode(callback, enabled = true) {
    if (cluster.isPrimary && enabled) {
        console.log(`Primary ${process.pid} is running`);
        for (let i = 0; i < numCPUs; i++) {
            cluster.fork();
        }
        cluster.on('exit', (worker, code, signal) => {
            console.log(`worker ${worker.process.pid} died`);
        });
    }
    else {
        callback();
        console.log(`Worker ${process.pid} started`);
    }
}
exports.clusterNode = clusterNode;
//# sourceMappingURL=cluster.js.map