function toggleMode() {
  var html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  var img = document.querySelector("#profile img")

  //substituir imagem
  if (html.classList.contains("light")) {
    //se tiver o light mode, adicionar imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Arthur Rocha, moreno, usando óculos e moletom preto."
    )
  } else {
    //se tiver sem light mode, manter imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Arthur Rocha, moreno, usando óculos e moletom preto."
    )
  }
}
