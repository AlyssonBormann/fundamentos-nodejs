// ['search=alysson', 'page=2']

export function extractQueryParams(query){
  return query.substr(1).split('&').reduce((queryParams, param)=>{

    // O codigo abaixo ta fazendo isso
    // ['search','alysson']
    // ['page','2']
    const [key, value] =  param.split("=")

    queryParams[key] = value

    return queryParams
  },{})
}