fetch('./Jailbreak.js').then(res => {
    res.arrayBuffer().then(arr => {
        window.pld = new Uint32Array(arr);

    })
})