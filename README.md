# watchExpress

To test the API Gateway server that uses round robin scheduling to assign jobs to either service A or service B:
1. Run `node serverA` and  `node serverB` on the terminal, to set the two servers running.
2. Run `npm run dev` on the terminal.
3. Test multiple get requests using `curl` and the terminal will show time it took for each request to be completed and the overall order of requests.
