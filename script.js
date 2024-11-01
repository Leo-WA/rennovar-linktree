document.addEventListener('DOMContentLoaded', () => {
    const bgTextAnimation = document.querySelector('.bg-text-animation');
    if (bgTextAnimation) {
        bgTextAnimation.style.zIndex = 9999; // Garante o topo de todos os elementos
    }

    // Seu código existente...
    const actionLink = document.querySelectorAll(".link-card .link-action");

    actionLink.forEach((action) => {
      action.addEventListener("click", (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(action.parentElement.getAttribute("href"));

        document.getElementById("toast").innerHTML = `
            <div class="toast-container">
                <p>✅ Link <strong> ${action.parentElement.innerText} </strong> berhasil disalin!</p>
            </div>
        `;

        
        setTimeout(() => {
          document
            .querySelector("#toast .toast-container")
            .classList.add("toast-gone");
        }, 300);

        setTimeout(() => {
          document.querySelector("#toast .toast-container").remove();
        }, 2000);
      });
    });

    document.querySelectorAll(".sosmed i").forEach((sosmed) => {
      sosmed.addEventListener("mouseenter", () => {
        sosmed.classList.remove("ph");
        sosmed.classList.add("ph-fill");
      });

      sosmed.addEventListener("mouseleave", () => {
        sosmed.classList.remove("ph-fill");
        sosmed.classList.add("ph");
      });
    });

    const textElement = document.querySelector('.bg-text-animation');
    const textToType = "Rennovar";
    let index = 0;

    function typeText() {
      if (index < textToType.length) {
        textElement.textContent += textToType.charAt(index);
        index++;
        setTimeout(typeText, 100); // Ajuste o tempo para controlar a velocidade de digitação
      } else {
        setTimeout(() => {
          textElement.textContent = ''; // Limpa o texto
          index = 0; // Reseta o índice
          typeText(); // Recomeça a digitação
        }, 2000); // Aguarda um pouco antes de recomeçar
      }
    }

    typeText(); // Inicia a função de digitação
});
