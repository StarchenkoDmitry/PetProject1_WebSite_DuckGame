const http =require('http')

const server =http.createServer((req,res)=>{
    console.log('Server request.')
    console.log(req.url,req.method)

    res.setHeader('Content-Type','text/html')

    res.write('<h1>Hello wrold!</h1>')
    res.end()
})

server.listen(3000,'localhost',(error)=>{
    error? console.log(error) : console.log('Server started on port 3000')
})