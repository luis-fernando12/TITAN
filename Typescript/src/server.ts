import fastify from "fastify"
const app = fastify()

app.get ('/hello', () => 
    {return "Bem vindo ao meu servidor"})
app.listen({
    port: 3333,
}).then(() => {console.log('Servidor funcionando')})
