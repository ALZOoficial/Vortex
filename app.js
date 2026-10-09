(function () {
  "use strict";

  const RESET_CSS = ':root{color-scheme:light;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;font-size:14px}img{max-width:100%}[hidden]{display:none!important}';

  function esc(v) {
    return String(v == null ? '' : v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function val(state, path) {
    return path.split('.').reduce((o, k) => (o ? o[k] : undefined), state);
  }

  function setVal(state, path, v) {
    const parts = path.split('.');
    let o = state;
    for (let i = 0; i < parts.length - 1; i++) o = o[parts[i]];
    o[parts[parts.length - 1]] = v;
  }

  function ed(state, key) {
    return `data-key="${key}">${esc(val(state, key))}`;
  }

  const CONTENT_TAGS = ['Quiénes somos', 'Historia de Vortex', 'Tour de las instalaciones', 'Antes y después', 'Unboxings', 'Comparativas de producto', '¿Merece la pena?', 'Ideas de regalo', 'Lo más vendido de la semana', 'Día a día en tienda', 'Mitos tech'];

  function renderMarkup(state) {
    return `
      <div class="page">
        <header class="hero">
          <span class="eyebrow"><span class="led-dot"></span>Propuesta comercial</span>
          <h1>Vortex</h1>
          <p>Presencia web y redes sociales pensadas para que cada búsqueda de un portátil, unos AirPods o un altavoz en Ceuta termine en vuestra tienda, no en otra.</p>
        </header>

        <section class="block">
          <h2>Presencia web</h2>
          <p>Dos niveles, misma base: pago online, recogida en tienda y reparto en Ceuta, y stock sincronizado con la caja. La diferencia es cuánto hace la web por vosotros sin tocar nada.</p>
          <div class="card-grid">
            <article class="plan-card">
              <div><span class="plan-card__code">VTX-WEB-PRO</span><h3 class="plan-card__name">Catálogo Pro</h3></div>
              <div class="plan-card__price"><span class="plan-card__amount" ${ed(state, 'webPro.price')}</span><span class="plan-card__unit">€ pago único</span></div>
              <div class="plan-card__maint">Mantenimiento: <span ${ed(state, 'webPro.maint')}</span> €/mes</div>
              <ul class="plan-card__features">
                <li>Diseño a medida, adaptado a móvil</li>
                <li>Pago online: tarjeta, Bizum, Apple Pay y Google Pay</li>
                <li>Recogida en tienda y reparto en Ceuta</li>
                <li>Hasta 150 productos cargados por nosotros</li>
                <li>Filtros por categoría, marca y precio</li>
                <li>Comparador de productos lado a lado</li>
              </ul>
            </article>
            <article class="plan-card is-featured">
              <div><span class="plan-card__code">VTX-WEB-XP</span><h3 class="plan-card__name">Experience</h3></div>
              <div class="plan-card__price"><span class="plan-card__amount" ${ed(state, 'webXP.price')}</span><span class="plan-card__unit">€ pago único</span></div>
              <div class="plan-card__maint">Mantenimiento: <span ${ed(state, 'webXP.maint')}</span> €/mes</div>
              <ul class="plan-card__features">
                <li>Todo lo de Catálogo Pro</li>
                <li>Stock y caja sincronizados en tiempo real</li>
                <li>Hasta 400 productos cargados por nosotros</li>
                <li>Cuentas de cliente con lista de deseos y aviso de reposición</li>
                <li>Vista 360° de los productos estrella</li>
              </ul>
              <p class="plan-card__note">Pensado para artículos de ticket alto: quien no compra a la primera vuelve a por su producto guardado, y puede girarlo en 360° antes de decidirse.</p>
            </article>
          </div>
        </section>

        <section class="block">
          <h2>Redes sociales</h2>
          <p>Contenido grabado con cámara profesional, editado y publicado de forma constante.</p>
          <div class="card-grid">
            <article class="plan-card">
              <div><span class="plan-card__code">VTX-SOC-BAS</span><h3 class="plan-card__name">Básico</h3></div>
              <div class="plan-card__price"><span class="plan-card__amount" ${ed(state, 'socBasic.price')}</span><span class="plan-card__unit">€/mes</span></div>
              <ul class="plan-card__features">
                <li>1 sesión de grabación profesional al mes</li>
                <li>10 reels/TikToks editados y publicados</li>
                <li>12 fotos de producto y tienda</li>
                <li>4 stories semanales</li>
              </ul>
            </article>
            <article class="plan-card is-featured">
              <div><span class="plan-card__code">VTX-SOC-ADV</span><h3 class="plan-card__name">Avanzado</h3></div>
              <div class="plan-card__price"><span class="plan-card__amount" ${ed(state, 'socAdv.price')}</span><span class="plan-card__unit">€/mes</span></div>
              <ul class="plan-card__features">
                <li>2 sesiones de grabación profesional al mes</li>
                <li>16 reels/TikToks editados y publicados</li>
                <li>20 fotos de producto y tienda</li>
                <li>8 stories semanales</li>
                <li>1 reto o mini-concurso en tienda al mes</li>
                <li>Promoción de pago en 2 publicaciones clave al mes</li>
                <li>Informe mensual de resultados</li>
              </ul>
              <p class="plan-card__note">Alcance que no depende solo del algoritmo, más un informe claro cada mes de qué contenido está convirtiendo visitas en ventas.</p>
            </article>
          </div>
          <div class="tag-strip">
            ${CONTENT_TAGS.map(t => `<span class="tag">${esc(t)}</span>`).join('')}
          </div>
        </section>

        <section class="block">
          <div class="panel">
            <div class="panel__head"><h2>Campaña Black Friday y Navidad</h2><span class="badge-extra">Extra</span><span class="panel__code">VTX-BF26</span></div>
            <div class="panel__price"><span ${ed(state, 'bf.price')}</span> € — pago único, añadido a cualquier plan de redes</div>
            <ul>
              <li>Calendario de contenido específico de ofertas, con countdown en stories</li>
              <li>Reels de "regalo ideal según presupuesto"</li>
              <li>Prioridad de agenda en las semanas clave de la campaña</li>
            </ul>
            <p class="urgency">Black Friday y Navidad concentran más ventas de informática y móviles que cualquier otro mes del año. Sin contenido activo justo en esas semanas, el cliente compara precios en el perfil que sí está publicando ofertas a diario, no en el que calla. Reservarlo ahora deja el calendario listo antes de que empiece la campaña, no a mitad de ella.</p>
          </div>
        </section>

        <div class="bundle-banner">Si combináis redes sociales con la Web Experience, aplicamos un <span ${ed(state, 'bundleDiscount')}</span>% de descuento sobre el primer pago.</div>

        <footer class="cta">
          <div class="contact"><span ${ed(state, 'contactName')}</span> · <span ${ed(state, 'contactEmail')}</span></div>
        </footer>

        <div class="save-status" id="save-status" hidden></div>
      </div>
    `;
  }

  function buildFullDocument(state) {
    const stateJson = JSON.stringify(state);
    const body = `<title>Propuesta Vortex</title>`
      + `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wght@600;700;800&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@500;600&display=swap">`
      + `<link rel="stylesheet" href="style.css">`
      + `<div id="app">${renderMarkup(state)}</div>`
      + `<script type="application/json" id="state-data">${stateJson}</` + `script>`
      + `<script src="app.js"></` + `script>`;
    return `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><style>${RESET_CSS}</style></head><body>${body}</body></html>`;
  }

  function currentState() {
    const el = document.getElementById('state-data');
    try { return JSON.parse(el.textContent); } catch (e) { return null; }
  }

  function paint(state) {
    const app = document.getElementById('app');
    if (app) app.innerHTML = renderMarkup(state);
  }

  let saveTimer = null;
  function scheduleSave(state) {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(() => doSave(state), 900);
  }

  function doSave(state) {
    const status = document.getElementById('save-status');
    if (!window.claude || !window.claude.use) return;
    window.claude.use('artifact').then(artifact => {
      if (!artifact) return;
      if (status) { status.hidden = false; status.textContent = 'Guardando…'; }
      return artifact.publish(buildFullDocument(state)).then(() => {
        if (status) { status.textContent = 'Guardado'; setTimeout(() => { status.hidden = true; }, 1400); }
      });
    }).catch(() => {
      if (status) status.hidden = true;
    });
  }

  function applyEditable(state, canEdit) {
    const nodes = document.querySelectorAll('#app [data-key]');
    nodes.forEach(el => {
      if (!canEdit) { el.removeAttribute('contenteditable'); return; }
      el.setAttribute('contenteditable', 'true');
      el.addEventListener('input', () => {
        setVal(state, el.getAttribute('data-key'), el.textContent.trim());
        scheduleSave(state);
      });
      el.addEventListener('keydown', e => {
        if (e.key === 'Enter') { e.preventDefault(); el.blur(); }
      });
    });
  }

  function init() {
    const state = currentState();
    if (!state) return;
    paint(state);
    if (window.claude && window.claude.use) {
      window.claude.use('user').then(user => {
        const canEdit = !!(user && user.canEdit && user.canEdit());
        applyEditable(state, canEdit);
      }).catch(() => applyEditable(state, false));
    } else {
      applyEditable(state, false);
    }
  }

  init();
})();
