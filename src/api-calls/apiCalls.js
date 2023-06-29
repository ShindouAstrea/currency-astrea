export const getCurrencies = async()=>{
    const url = 'http://data.fixer.io/api/symbols?access_key=482c3c65a5c90bde26b3297d67f9eb83';
    const response = await fetch(url) ;
    return response.json() ;

}