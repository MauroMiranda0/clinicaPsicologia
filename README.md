# PsycheCare

Prototipo de una clínica de psicología construido con React y Vite.

## Desarrollo local

```bash
npm install
npm run dev
```

## Despliegue en GitHub Pages

El workflow `Deploy to GitHub Pages` compila y publica automáticamente la rama
`main`. En **Settings → Pages → Build and deployment**, selecciona **GitHub
Actions** como fuente. También puedes ejecutar el workflow manualmente desde la
pestaña **Actions**.

La compilación recibe `BASE_PATH` con el nombre real del repositorio, por lo que
los recursos generados funcionan bajo URLs de proyecto como
`https://usuario.github.io/clinicaPsicologia/`.
