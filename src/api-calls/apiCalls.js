export const getCurrencies = async()=>{
    const url = 'http://data.fixer.io/api/symbols?access_key=482c3c65a5c90bde26b3297d67f9eb83';
    return new Promise(function (resolve, reject) {
        fetch(url,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => resolve(response.symbols))
        .then(response => console.table(response))
        .catch(error =>{reject(error)})
    });


}