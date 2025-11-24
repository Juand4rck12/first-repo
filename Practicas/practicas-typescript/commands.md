# Iniciar proyecto TypeScript

Comandos básicos para inicializar y compilar un proyecto TypeScript.

## Inicializar
```bash
# Crea un tsconfig.json con la configuración por defecto
tsc --init
```

## Compilar en modo observador
```bash
# Observador general: recompila todos los archivos cuando hay cambios
tsc -w

# Observador para un archivo concreto
tsc -w <archivo>.ts
```

> Consejo: guarda los archivos para que el observador detecte los cambios. Revisa `tsconfig.json` para ajustar destino de salida, módulos y otras opciones.

## Ejemplo rápido
- Estructura sugerida:
    - src/
        - index.ts
    - tsconfig.json
- Ejecuta desde la raíz del proyecto:
```bash
tsc --init
tsc -w
```