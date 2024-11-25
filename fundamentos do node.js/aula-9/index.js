function a() {
    console.log('executando a()')
    c()
}

function b() {
    console.log('executando b()')
}


function c() {
    console.log('executando c()')
}


function d() {
    console.log('executando d()')
    
a()
b()
}


d()
