console.log('我是js里面的内容');
fetch('/test').then((res)=>{
    return res.json()
}).then((res)=>{
    console.log('🍌后台数据',res);   // ssr 
    document.getElementById('app').innerHTML = res.data;  //  csr,普通的拿到数据，来操作dom
})