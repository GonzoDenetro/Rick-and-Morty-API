const xmlhttp = new XMLHttpRequest();

function fetchData(URL_API, callback){
    xmlhttp.open('GET', URL_API, true)
    xmlhttp.onreadystatechange = (event) => {
        if(xmlhttp.readyState === 4){
            if(xmlhttp.status === 200){
                callback(null, JSON.parse(xmlhttp.responseText))                
            }
            else {
                const error = new Error(`Error ${URL_API}`)
                return callback(error, null)
            }           
        }
    }
    xmlhttp.send()
}

let str = 'AAAABBBCCDAABBB';
function transformar(iterable){
    let arr = iterable.split('')
    console.log(arr)
    let arreglo = arr.map(()=> {
        
    })
}
transformar(str)

let iterable = 'AAAABBBCCDAABBB'

var uniqueInOrder = function(iterable){
  let arr = []
  for(var i; i < iterable.length; i++){
    let valor_actual = iterable[i];
    let siguiente_valor = iterable[i + 1];
    
    if(valor_actual !== siguiente_valor){
      arr.push(valor_actual)
    }
  }
  return arr
}
uniqueInOrder(iterable)