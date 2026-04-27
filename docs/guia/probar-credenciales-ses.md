---
title: Probar credenciales SES
description: Cómo verificar que tus credenciales del Ministerio funcionan antes de un envío real, qué errores devuelve la prueba y cómo resolverlos.
---

# Probar credenciales SES

Antes de enviar una comunicación real, puedes **probar tus credenciales** del Ministerio para confirmar que son correctas. Es la forma más rápida de descartar problemas de credenciales cuando un envío falla.

::: info Solo Propietario y Administrador
La acción de probar conexión está disponible solo para los roles **Propietario** y **Administrador**. Está limitada a 10 intentos por minuto.
:::

## Cómo probar

1. Ve a **Configuración → Credenciales SES**.
2. En la fila de las credenciales que quieras verificar, pulsa **Probar conexión**.
3. RegistroViajero envía una consulta de prueba al Ministerio (no genera ningún parte de viajero — es solo una verificación).
4. Verás el resultado en pocos segundos: **Correctas** o un mensaje de error específico.

## Resultados posibles

| Resultado | Qué significa | Qué hacer |
|---|---|---|
| **Conexión correcta** | El Ministerio acepta las credenciales y la cuenta tiene permisos de envío telemático. | Nada — ya puedes enviar comunicaciones. |
| **Usuario o contraseña incorrectos** | El Ministerio rechaza el inicio de sesión. | Revisa el usuario, la contraseña y el código de arrendador. |
| **Sin permisos de envío telemático** | Las credenciales son válidas pero no tienen el servicio activo. | Contacta con el Ministerio para que active el envío telemático en tu cuenta. |
| **El Ministerio no responde** | Caída temporal del servicio del Ministerio. | Espera unos minutos y vuelve a probar. |
| **Has superado el límite de intentos** | Has lanzado 10 pruebas en menos de un minuto. | Espera 1 minuto antes de volver a probar. |

## Cuándo probar

- **Después de crear** unas credenciales nuevas — para detectar erratas antes de enviar nada.
- **Si un envío falla** con un error de credenciales — para confirmar si el problema es de credenciales o de datos.
- **Tras renovar la contraseña** en el portal del Ministerio — la prueba te confirma que la nueva contraseña ya está activa.

## Si la prueba sale correcta pero el envío real falla

Si la prueba dice **Conexión correcta** pero un envío posterior queda en **Error**, el problema está en los **datos del huésped**, no en las credenciales. Abre la reserva y revisa el mensaje del Ministerio para identificar el campo a corregir. Más detalle en [Errores del Ministerio](/referencia/errores-ses).

## Por qué hay un límite

El Ministerio puede bloquear temporalmente cuentas que envían demasiadas consultas en poco tiempo. RegistroViajero limita a **10 pruebas por minuto** para protegerte de bloqueos accidentales por probar en bucle.
