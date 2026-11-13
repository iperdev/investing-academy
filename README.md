# Investing Academy

Plataforma independiente de educación financiera sobre diversificación estructural, asignación de activos y gestión cuantitativa. Interfaz responsive en español, **22 módulos / 66 lecciones**, ejercicios con respuesta y un laboratorio interactivo.

**Proyecto educativo original.** No tiene afiliación con Value School ni reproduce sus materiales privados. No constituye asesoramiento financiero.

## Tecnologías

Next.js 15 App Router + React 19 + TypeScript + Tailwind CSS 4 + Lucide. Exportación estática para hosting sin servidor.

## Inicio rápido

Node.js 20 o posterior:

~~~bash
npm install
npm run dev
~~~

Abre http://localhost:3000.

## Comprobaciones

~~~bash
npm run typecheck
npm test
npm run build
~~~

## Estructura

- / — portada y acceso a los cursos
- /modulos — programa completo
- /modulos/1 — descripción y lecciones del primer módulo
- /modulos/1/1 — primera lección con evaluación
- /laboratorio — cartera ficticia de cuatro activos
- src/lib/curriculum.ts — plan de estudios, conceptos y ejemplos
- src/lib/finance.ts — cálculos financieros ilustrativos

El progreso de lecciones se guarda localmente en cada navegador mediante localStorage. No existe backend, cuenta de usuario ni recopilación de datos personales.

## Supuestos del laboratorio

Acciones: rentabilidad 8 %, volatilidad 18 %.
Bonos: rentabilidad 3,5 %, volatilidad 7,5 %.
Oro: rentabilidad 4,5 %, volatilidad 16 %.
Efectivo: rentabilidad 2 %, volatilidad 0,5 %.

Correlaciones: acciones/bonos 0,20; acciones/oro 0,10; bonos/oro 0,05; efectivo/cualquier otro 0. Los pesos se normalizan al 100 %. La línea se genera a partir de shocks deterministas inventados. **No se usan datos reales ni series de precios históricas; no se trata de un backtest ni de un pronóstico**. No se contemplan impuestos, spreads, dividendos, inflación o costes operativos.

## Despliegue

~~~bash
npm run build
~~~

Next.js genera la carpeta \`out/\`. Puede publicarse en Cloudflare Pages como contenido estático. Para Cloudflare Workers con SSR habría que retirar \`output: "export"\` y preparar un adaptador apropiado.

## Alcance de esta entrega

Plataforma navegable, 22 módulos, 66 lecciones, referencias generales, cuestionarios, progreso por lección y laboratorio sencillo de asignación. Las lecciones actuales son una **base didáctica introductoria** y comparten un formato de explicación; no equivalen todavía a 30 horas de enseñanza exhaustiva ni a un programa universitario terminado.

## Trabajo pendiente para profundizar la academia

- Transformar cada lección en una unidad extensa y singular con casos reales verificados, preguntas abiertas y bibliografía específica.
- Backtesting con series punto-en-tiempo, datos licenciados, dividendos, rebalanceo, costes, impuestos y validación fuera de muestra.
- Laboratorios adicionales de correlación dinámica, frontera eficiente, riesgo de cola y return stacking.
- Proyecto final entregable y evaluación con rúbrica.
- Accesibilidad y comprobación visual con navegador.
