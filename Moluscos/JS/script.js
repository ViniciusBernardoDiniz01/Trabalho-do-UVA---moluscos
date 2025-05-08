const perguntas = [
    { pergunta: "Quanto é 2 + 2?", resposta: "4" },
    { pergunta: "Qual a capital da França?", resposta: "Paris" },
    { pergunta: "Qual é a cor do céu em um dia claro?", resposta: "Azul" },
    { pergunta: "Quanto é 5 x 3?", resposta: "15" },
  ];
  let indicePergunta = 0;
  let progresso = 0;
  const caracol = document.getElementById("caracol");
  
  function carregarPergunta() {
    if (indicePergunta < perguntas.length) {
      document.getElementById("pergunta").innerText =
        perguntas[indicePergunta].pergunta;
    } else {
      document.getElementById("pergunta").innerText =
        "Parabéns! O caracol chegou ao destino!";
      document.getElementById("resposta").style.display = "none";
      document.querySelector("button").style.display = "none";
    }
  }
  
  function verificarResposta() {
    const respostaUsuario = document.getElementById("resposta").value.trim();
    if (
      respostaUsuario.toLowerCase() ===
      perguntas[indicePergunta].resposta.toLowerCase()
    ) {
      progresso += 25;
      caracol.style.left = progresso + "%";
      indicePergunta++;
      document.getElementById("feedback").innerText = "Correto!";
    } else {
      document.getElementById("feedback").innerText = "Tente novamente!";
    }
    document.getElementById("resposta").value = "";
    setTimeout(carregarPergunta, 1000);
  }
  
  carregarPergunta();