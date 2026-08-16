/* ==========================================================================
   MARCELO PORTFOLIO — Interactividad
   ========================================================================== */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    initReveal();
    initClock();
    initUptime();
    initTypewriter();
    initContactForm();
    initScrollSpy();
  });

  /* -----------------------------------------------------------------------
     1. Reveal on scroll (IntersectionObserver)
     ----------------------------------------------------------------------- */
  function initReveal() {
    var items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) {
        el.classList.add("visible");
      });
      return;
    }

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    items.forEach(function (el) {
      io.observe(el);
    });
  }

  /* -----------------------------------------------------------------------
     2. Reloj del sistema (barra lateral y topbar)
     ----------------------------------------------------------------------- */
  function initClock() {
    var clocks = document.querySelectorAll("[data-clock]");
    if (!clocks.length) return;

    function pad(n) {
      return n < 10 ? "0" + n : "" + n;
    }

    function tick() {
      var now = new Date();
      var time =
        pad(now.getHours()) + ":" + pad(now.getMinutes()) + ":" + pad(now.getSeconds());
      clocks.forEach(function (el) {
        el.textContent = time;
      });
    }

    tick();
    setInterval(tick, 1000);
  }

  /* -----------------------------------------------------------------------
     3. Contador de uptime (simulado)
     ----------------------------------------------------------------------- */
  function initUptime() {
    var el = document.querySelector("[data-uptime]");
    if (!el) return;

    var uptime = 10432; // días simulados según el diseño
    el.textContent = uptime.toLocaleString("en-US") + " days";
  }

  /* -----------------------------------------------------------------------
     4. Efecto máquina de escribir (hero del inicio)
     ----------------------------------------------------------------------- */
  function initTypewriter() {
    var target = document.querySelector("[data-type]");
    if (!target) return;

    var text = target.getAttribute("data-type") || "";
    var idx = 0;
    target.textContent = "";

    function step() {
      if (idx <= text.length) {
        target.textContent = text.slice(0, idx);
        idx += 1;
        setTimeout(step, 28);
      }
    }

    setTimeout(step, 600);
  }

  /* -----------------------------------------------------------------------
     6. Scrollspy: marca la sección visible en la navegación (landing)
     ----------------------------------------------------------------------- */
  function initScrollSpy() {
    var sections = document.querySelectorAll("main section[id]");
    var links = document.querySelectorAll(".sidebar-nav .nav-link, .bottombar a");
    if (!sections.length || !links.length) return;

    function onScroll() {
      var currentId = "";
      var threshold = window.innerHeight * 0.4;

      sections.forEach(function (section) {
        var rect = section.getBoundingClientRect();
        if (rect.top <= threshold && rect.bottom >= 0) {
          currentId = section.id;
        }
      });

      links.forEach(function (link) {
        var href = link.getAttribute("href");
        var isActive = href === "#" + currentId;
        link.classList.toggle("active", isActive);
        if (isActive) link.setAttribute("aria-current", "true");
        else link.removeAttribute("aria-current");
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* -----------------------------------------------------------------------
     7. Formulario de contacto: estado en vivo + envío simulado
     ----------------------------------------------------------------------- */
  function initContactForm() {
    var form = document.querySelector("[data-form]");
    if (!form) return;

    var statusText = document.querySelector("[data-status-text]");
    var controls = form.querySelectorAll("input, textarea");

    controls.forEach(function (input) {
      input.addEventListener("focus", function () {
        setStatus("EDITANDO " + input.getAttribute("data-label") + "...");
      });

      input.addEventListener("input", function () {
        if (input.value.length > 0) {
          setStatus("BUFFER: " + input.value.length + " caracteres");
        } else {
          setStatus("EDITANDO " + input.getAttribute("data-label") + "...");
        }
      });

      input.addEventListener("blur", function () {
        setStatus("STATUS: Esperando entrada...");
      });
    });

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        setStatus("STATUS: ERROR_PAYLOAD_INVALIDO");
        return;
      }

      setStatus("TRANSMITIENDO...");
      form.classList.add("is-sending");

      var sendBtn = form.querySelector("[data-send]");
      if (sendBtn) sendBtn.disabled = true;

      // Simulación de latencia de red
      setTimeout(function () {
        setStatus("STATUS: MENSAJE_ENVIADO");
        if (sendBtn) sendBtn.disabled = false;
        form.classList.remove("is-sending");
        form.reset();
      }, 1400);
    });

    function setStatus(text) {
      if (statusText) statusText.textContent = text;
    }
  }
})();
