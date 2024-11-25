var url = require('url')
var address = 'https://www.novosite.com.br/catalog?produtos=fone'
var parsedUrl = new url.URL (address)


console.log(parsedUrl.host)
console.log(parsedUrl.pathname)
console.log(parsedUrl.search)
console.log(parsedUrl.searchParams)
console.log(parsedUrl.searchParams.get('produto'))