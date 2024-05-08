// Se declara la constante URL
const url = "https://jsonplaceholder.typicode.com/posts";

// Definimos una función asincrónica para obtener publicaciones desde una API
const getPosts = async () => {
  try {
    // Realizamos una solicitud a la API usando fetch
    let response = await fetch(url);
    // Esperamos la respuesta y la convertimos en formato JSON
    let data = await response.json();

    // Guardar en la variable el elemento <ul>
        const posts = document.querySelector("#post-data");

    // Verificamos si los datos obtenidos no son nulos
    if (data !== null) {
      // Recorre los datos para crear elementos HTML
      data.forEach((elemento) => {
        posts.innerHTML +=
        `<p><strong>${elemento.title}</strong></p>
        <p>${elemento.body}</p>
        </br>`;
      });
    }
  } catch (error) {
    // Capturamos y mostramos errores en la consola
    console.log(error);
  }
};