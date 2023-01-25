function toggleMode(){
  const html = document.documentElement //document é o objeto e documentElement é uma propriedade que representa o HTML do documento 
  html.classList.toggle("light")
  //if(html.classList.contains("light")){
  //  html.classList.remove("light")
  //}else{
  //  html.classList.add("light")
  // }

  //pegar a tag img
  const img = document.querySelector("#profile img") // declarando a variável imagem, que está sendo "pega" através do queryselector, mais um método do objeto document 

    //substituir a imagem
  if(html.classList.contains("light")){
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Fernanda em um fundo laranja segurando um celular com capa preta, usando camisa cinza e óculos de grau"
      )
  }else{
    img.setAttribute("src", "./assets/avatar-dark.png")
    img.setAttribute(
      "alt",
      "Foto de Fernanda em um fundo roxo segurando um celular com capa preta, usando camisa cinza e óculos de grau"
    )
  }

  }
