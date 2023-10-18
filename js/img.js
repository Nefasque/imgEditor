// Esperamos a que todo el HTML esté cargado antes de ejecutar Javascrip
document.addEventListener("DOMContentLoaded", () => {
  const inputImage = document.querySelector("#inputFile");
  // Nodo donde estará el editor
  const editor = document.querySelector("#editor");
  let urlImage = undefined;

  // Evento disparado cuando se adjunte una imagen
  inputImage.addEventListener("change", abrirEditor, false);

  /*
   * Método que abre el editor con la imagen seleccionada
   */

  function abrirEditor(e) {
    // Obtiene la imagen
    urlImage = URL.createObjectURL(e.target.files[0]);

    // Borra editor en caso que existiera una imagen previa
    editor.innerHTML = "";
    let cropprImg = document.createElement("img");
    cropprImg.setAttribute("id", "img-prueba");
    editor.appendChild(cropprImg);

    // Envia la imagen al editor para su recorte
    document.querySelector("#img-prueba").setAttribute("src", urlImage);
  }
});
