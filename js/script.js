function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img

  const img = document.querySelector("#profile img")

  //  substitução da img

  if (html.classList.contains("light")) {
    
    // se tiver sem light mode, adicionar a img normal

    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se tiver sem light modelight manter a imagem

    img.setAttribute("src", "./assets/avatar.png")
  }
}
