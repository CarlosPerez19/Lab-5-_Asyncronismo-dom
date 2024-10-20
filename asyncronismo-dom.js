// Uso de API's

// Link de la coleccion de API's https://github.com/public-api-lists/public-api-lists.git

// Api usada https://api.jikan.moe/v4/top/anime

// then y catch
fetch("https://api.jikan.moe/v4/top/anime?limit=1") //  Limite a 1
    .then((request) => (request.json()))
    .then((data) => {console.log('Seccion 1:\n',data,'\n')})

    .catch((error) => {console.log(error)})


// async y await
const getAnimeAPI = async () => {
    try {
        let request = await fetch("https://api.jikan.moe/v4/top/anime?limit=1") // Limite a 1
        let data = await request.json()
        console.log('Seccion 2:\n',data,'\n');
    } catch (error) {
        console.log(error);
        
    }
}
getAnimeAPI()