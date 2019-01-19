// run in browser DevTools
(async () => {

    const debug = true

    const sleep = (ms = 0) => { return new Promise(r => setTimeout(r, ms)) } 
    
    const kernelName = "python3"
    const resp = await fetch('http://0.0.0.0:8888/api/kernels', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",      
        },
        body: JSON.stringify({"name": kernelName})
    })

    const kernel = await resp.json()

    await sleep(1000)

    const ws = new WebSocket(`ws://0.0.0.0:8888/api/kernels/${kernel.id}/channels`)
    ws.onmessage = (evt) => {
        if (debug) {
            console.log(evt)
        }
        const data = JSON.parse(evt.data)
        if (data.msg_type === "execute_result") {
            console.log(data.content.data)
        }
    }

    const exec = {
    'header': {
        'username': '',
        'version': '5.0',
        'session': '',
        'msg_id': '123',
        'msg_type': 'execute_request'
    },
    'parent_header': {},
    'channel': 'shell',
    'content': {
        'code': '1+2',
        'silent': false,
        'store_history': false,
        'user_expressions': {},
        'allow_stdin': false
    },
    'metadata': {},
    'buffers': {}
}

    ws.onopen = () => {
        console.log('open')
        ws.send(JSON.stringify(exec))    
    }

    ws.onerror = (err) => {
        console.log('error', err)
    }

    //await sleep(5000)
    

})()