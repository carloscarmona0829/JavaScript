export function ContactForm() {
  const d = document,
    $form = d.createElement("form"),
    $styles = d.getElementById("dynamic-styles");

  $form.classList.add("contact-form");
  $form.action = "https://formsubmit.co/carloscarmona0829@gmail.com";
  $form.method = "post";
  $form.target = "_blank";
  $form.rel = "noopener";

  $styles.innerHTML = `
  
/* **********     ContactForm Validations     ********** */
.contact-form {
  --form-ok-color: #4caf50;
  --form-error-color: #ee4747;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}

.contact-form > *{ /*El * significa todos los hijos directos del elemento*/
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 100%;
}

.contact-form textarea{/*Evita que manualmente redimensionen ese control*/
  resize: none;
}

.contact-form legend,
.contact-form-response {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
}

.contact-form input,
.contact-form textarea {
  font-size: 1rem;
  font-family: sans-serif;
}

.contact-form input[type="submit"] {
  width: 50%;
  font-weight: bold;
  cursor: pointer;
}

.contact-form *::placeholder {
  color: #000;
}

.contact-form [required]:valid {
  border:thin solid var(--form-ok-color);
}

.contact-form [required]:invalid {
  border:thin solid var(--form-error-color);
}

.contact-form-error {
  margin-top: -1rem; /* Para que el div aparezca pegado a la caja de texto*/
  font-size: 80%;
  background-color: var(--form-error-color);
  color: antiquewhite;
  transition: all 800ms ease;
}

.contact-form-error.is-active {
  display: block;
  animation: show-message 1s 1 normal 0s ease-out both; /*nombre de la animación dura 1s se ejecutará 1 sola vez de forma normal que va a tener un retardo de 0s el efecto de animación es ease-out y both porque va a conservar los estilos con los que la animación finalizó*/
}

.none {
  display: none;
}

@keyframes show-message { /*La animación anterior hace esto, inicia en cero y se va mostrando hasta llegar a 1 para hacer el efecto de aparecer*/
  0% {
    visibility: hidden;
    opacity: 0;
  }

  100% {
    visibility: visible;
    opacity: 1;
  }
  `;

  $form.innerHTML = `
    <legend>Envíanos tus comentarios</legend>
                <input type="text" name="name" placeholder="Escribe tu nombre"
                    title="Nombre solo acepta letras y espacios en blanco" required
                    pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+$">
                <input type="email" name="email" placeholder="Escribe tu correo" title="Email incorrecto"
                    pattern="^[a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,15})$" required>
                <input type="text" name="subject" placeholder="Asunto a tratar" title="Escribe un asunto" required>
                <textarea name="comments" cols="50" rows="5" placeholder="Escribe tus comentarios"
                    title="Tu comentario no debe exceder los 250 caracteres" data-pattern="^[\\s\\S]{1,255}$"
                    required></textarea>
                <input type="submit" value="Enviar">
                <div class="contact-form-loader none">
                    <img src="app/assets/loader.svg" alt="Cargando">
                </div>
                <div class="contact-form-response none">
                    <p>Los datos han sido enviados</p>
                </div>
    `;

  function ValidationsForm() {
    const $form = d.querySelector(".contact-form"),
      $inputs = d.querySelectorAll(".contact-form [required]");

    //console.log($inputs);

    $inputs.forEach((input) => {
      const $span = d.createElement("span");
      $span.id = input.name;
      $span.textContent = input.title;
      $span.classList.add("contact-form-error", "none");
      input.insertAdjacentElement("afterend", $span);
    });

    d.addEventListener("keyup", (e) => {
      if (e.target.matches(".contact-form [required]")) {
        let $input = e.target,
          pattern = $input.pattern || $input.dataset.pattern;

        //console.log($input, pattern);

        if (pattern && $input.value !== "") {
          //console.log("El input tiene patrón");

          let regex = new RegExp(pattern);
          return !regex.exec($input.value)
            ? d.getElementById($input.name).classList.add("is-active")
            : d.getElementById($input.name).classList.remove("is-active");
        }

        if (!pattern) {
          //console.log("El input NO tiene patrón");

          return $input.value === ""
            ? d.getElementById($input.name).classList.add("is-active")
            : d.getElementById($input.name).classList.remove("is-active");
        }
      }
    });

    d.addEventListener("submit", (e) => {
      //e.preventDefault(); //Evita que se autoprocese el fromulario para que realice una petición asincrona a un servidor o a alguna otra parte luego de validar (Lo pusimos solo para pruebas)
      alert("Enviando Formulario");

      const $loader = d.querySelector(".contact-form-loader"),
        $response = d.querySelector(".contact-form-response");

      $loader.classList.remove("none");

      setTimeout(() => {
        $loader.classList.add("none");
        $response.classList.remove("none");
        $form.reset();

        setTimeout(() => {
          $response.classList.add("none");
        }, 3000);
      }, 3000);
    });
  }

  setTimeout(() => ValidationsForm(), 100);

  return $form;
}
