console.log("SCRIPT CARREGOU OK");

// PUBLICAR POST
document.getElementById("btnPublicar").addEventListener("click", function () {

    const nome = document.getElementById("nome").value;
    const categoria = document.getElementById("categoria").value;
    const mensagem = document.getElementById("mensagem").value;

    if (!nome || !mensagem) {
        alert("Preencha seu nome e mensagem!");
        return;
    }

    const post = document.createElement("div");
    post.classList.add("post-card");

    post.innerHTML = `
        <h3>${categoria}</h3>
        <span>${nome} • Agora</span>
        <p>${mensagem}</p>

        <button class="responder" type="button">Responder</button>

        <div class="resposta-box" style="display:none; margin-top:15px;">
            <textarea class="input-resposta" placeholder="Escreva sua resposta..."></textarea>
            <button class="enviar-resposta" type="button">Enviar resposta</button>
        </div>
    `;

    document.getElementById("posts").prepend(post);

    document.getElementById("feedback").innerText =
        "Muito bem agricultor! Sua dúvida ou sugestão vai ser ouvida por outros companheiros!";

    document.getElementById("nome").value = "";
    document.getElementById("mensagem").value = "";
});


// EVENTOS (RESPONDER + ENVIAR)
document.addEventListener("click", function (e) {

    // abrir caixa de resposta
    if (e.target.classList.contains("responder")) {

        const post = e.target.closest(".post-card");
        const box = post.querySelector(".resposta-box");

        box.style.display = box.style.display === "block" ? "none" : "block";
    }

    // enviar resposta
    if (e.target.classList.contains("enviar-resposta")) {

        const post = e.target.closest(".post-card");
        const input = post.querySelector(".input-resposta");
        const box = post.querySelector(".resposta-box");

        const texto = input.value.trim();

        if (!texto) {
            alert("Escreva uma resposta!");
            return;
        }

        const resposta = document.createElement("p");
        resposta.innerHTML = "🌾 Resposta: " + texto;

        resposta.style.marginTop = "10px";
        resposta.style.padding = "10px";
        resposta.style.background = "#f5f5f5";
        resposta.style.borderRadius = "10px";

        post.appendChild(resposta);

        input.value = "";
        box.style.display = "none";
    }
});