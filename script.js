function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //    EXEMPLO DA LOGICA A CIMA ^^^^///

  ///const html= document.html

  //  if(html.classList.contains('light')){
  //      html.classList.remove('light')
  //   } else {
  ///       html.classlist.add('light')
  /// }


  ///TROCA DE IMAGEM E BACKGROUND QUANDO APERTA O BOTÃO
const img = document.querySelector("#profile img")

if(html.classList.contains("light")){
    img.setAttribute("src", "./assets/avatar-on.jpg")

}else{
    img.setAttribute("src", "./assets/avatar-off.jpg")
}


const alt = document.querySelector("#profile img")

if(html.classList.contains("light")){
    alt.setAttribute("alt", "Foto do criador do site Cayo Duarte, expressão de sorriso apertado,Usando uma camisa preta,com um fundo gradiente azul e branco.")

}else{
    alt.setAttribute("alt", "Foto do criador do site Cayo Duarte, com metade do rosto coberto pelo celular, usando uma camisa branca com símbolos japoneses, com uma faixa da Nike no peito e um fundo gradiente roxo e azul.")
}

  
}


