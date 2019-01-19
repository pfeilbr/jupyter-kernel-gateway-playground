# jupyter-kernel-gateway-playground

learn [Jupyter Kernel Gateway](https://jupyter-kernel-gateway.readthedocs.io/en/latest/index.html)

### Development

```sh
# build image
docker build -t pfeilbr/jupyter-kernel-gateway .

# run
docker run -it --rm -p 8888:8888 pfeilbr/jupyter-kernel-gateway

# view swagger json
open http://0.0.0.0:8888/api/swagger.json

# expose to public internet
ngrok http 8888

# view in swagger ui
open https://petstore.swagger.io

# enter https://NGROK_HOST/api/swagger.json in explore
# e.g.
#   https://0278ef82.ngrok.io/api/swagger.json

# needed to add CORS params in `docker-stacks-image/Dockerfile` `CMD` statement

# running `browser-client-example.js` in chrome DevTools
open http://0.0.0.0:8888/api/swagger.json
# open DevTools and run code in Sources | Snippets
```

### Screenshots

![](https://www.evernote.com/l/AAHBAoPzt9NOyLDDhg90a4FkOcrCBAs7vz4B/image.png)