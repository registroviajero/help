---
title: Errores del Ministerio
description: Errores habituales devueltos por SES.HOSPEDAJES al enviar un parte de viajeros y cómo resolver cada uno.
---

# Errores del Ministerio

Cuando el Ministerio del Interior rechaza una comunicación a través de SES.HOSPEDAJES, RegistroViajero muestra el código de error y la descripción. Aquí encontrarás los errores más comunes y cómo resolverlos.

## Errores frecuentes

### Datos del huésped

| Código | Descripción | Solución |
|--------|-------------|----------|
| Documento inválido | El número de documento no es válido | Verifica que el número de documento del huésped sea correcto |
| Fecha de nacimiento | La fecha de nacimiento no es coherente | Comprueba que la fecha esté en el formato correcto y sea una fecha real |
| Nacionalidad | La nacionalidad no coincide con el tipo de documento | Un DNI solo puede pertenecer a un ciudadano español |
| Número de soporte | Falta el número de soporte | Los titulares de DNI deben incluir el número de soporte (3 letras al dorso) |
| Segundo apellido | Falta el segundo apellido | Obligatorio para DNI y NIE |

### Datos de la reserva

| Código | Descripción | Solución |
|--------|-------------|----------|
| Código de establecimiento | Código de establecimiento no válido | Verifica que el código asignado al alojamiento sea correcto |
| Credenciales | Credenciales no válidas | Comprueba el usuario, contraseña y código de arrendador en las [credenciales SES](/guia/credenciales-ses) |
| Fechas | Fechas de la reserva no válidas | La fecha de entrada debe ser anterior a la de salida |
| Lote duplicado | El lote ya fue enviado previamente | RegistroViajero gestiona esta situación automáticamente |

## Cómo corregir un error

1. Desde la reserva con error, revisa el mensaje de error del Ministerio
2. Corrige los datos indicados (puede requerir que el huésped actualice su información)
3. Vuelve a validar la reserva
4. Envía de nuevo al Ministerio

## Errores persistentes

Si un error persiste después de corregir los datos, verifica:

- Que las [credenciales SES](/guia/credenciales-ses) sean correctas y estén activas
- Que el código de establecimiento del alojamiento sea el asignado por el Ministerio
- Que la plataforma SES.HOSPEDAJES esté operativa (a veces hay mantenimientos programados)

Si el problema continúa, contacta con soporte.
