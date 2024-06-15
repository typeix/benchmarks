FROM node:20
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN rm -fR node_modules
RUN ls -la
RUN npm install
RUN ls -la
CMD ["node", "benchmark-bench-selected.js"]
