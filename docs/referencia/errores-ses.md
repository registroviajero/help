---
title: Errores del Ministerio
description: Errores habituales devueltos por SES.HOSPEDAJES al enviar un parte de viajeros y cómo resolver cada uno sin tener que enviar una anulación.
---

# Errores del Ministerio

Cuando el Ministerio del Interior rechaza una comunicación a través de SES.HOSPEDAJES, RegistroViajero muestra el mensaje devuelto en la reserva (estado **Error**). Aquí están los errores más comunes y cómo resolverlos.

## Errores en datos del huésped

| Mensaje | Causa | Solución |
|--------|-------------|----------|
| **Documento inválido** | El número del documento no pasa la validación. | Revisa el número con el huésped. Letra del DNI, secuencia del NIE, dígitos del pasaporte. |
| **Fecha de nacimiento** | La fecha no es coherente o está fuera de rango. | Comprueba que la fecha esté completa y sea real (no años futuros, etc.). |
| **Nacionalidad incompatible con el documento** | Por ejemplo, un DNI con nacionalidad no española. | Solo los ciudadanos españoles pueden usar DNI. Cambia a pasaporte si la nacionalidad es otra. |
| **Falta el número de soporte** | Obligatorio para DNI, NIE y certificado UE. | Pide al huésped el número impreso al dorso de la tarjeta (junto al CAN en DNI 3.0). |
| **Falta el apellido 2** | Obligatorio para DNI y NIE. | Solicítalo al huésped — la mayoría lo tiene en el documento. |
| **Edad mínima no alcanzada** | Menor de 14 sin acompañante registrado correctamente. | Los menores de 14 están exentos del registro completo, deben constar como acompañantes del adulto responsable. |

## Errores en datos de la reserva

| Mensaje | Causa | Solución |
|--------|-------------|----------|
| **Código de establecimiento no válido** | El código del alojamiento no está reconocido por el Ministerio. | Verifica el código en **Alojamientos → Editar**. Debe coincidir exactamente con el asignado por el Ministerio. |
| **Credenciales no válidas** | Usuario, contraseña o código de arrendador incorrectos. | Comprueba en **Configuración → Credenciales SES** y usa **Probar conexión**. Más detalle en [Probar credenciales](/guia/probar-credenciales-ses). |
| **Fechas no válidas** | Entrada igual o posterior a salida, o fechas pasadas fuera de plazo. | La fecha de entrada debe ser anterior a la de salida y no estar fuera de los plazos del Ministerio. |
| **Lote duplicado** | El envío ya estaba en el sistema del Ministerio. | RegistroViajero lo recupera automáticamente — no requiere acción. |

## Cómo corregir un error sin anular

A diferencia de **Enviado** o **Confirmado**, una reserva en **Error** **no está bloqueada**. Para corregir:

1. Abre la reserva con error.
2. Pulsa **Edición del huésped** para desbloquear la edición (más detalle en [Desbloquear edición del huésped](/guia/desbloquear-edicion-huesped)).
3. Pide al huésped que corrija el dato (o corrígelo tú).
4. Vuelve a validar y reenviar.

No hace falta enviar una anulación previa al Ministerio.

## Errores persistentes

Si un error persiste después de corregir los datos, verifica:

- Las [credenciales SES](/guia/credenciales-ses) usando **Probar conexión** (descarta problemas de credenciales).
- Que el código de establecimiento del alojamiento sea el asignado por el Ministerio.
- Que la plataforma SES.HOSPEDAJES esté operativa (a veces hay mantenimientos programados).

Si el problema continúa, contacta con soporte. Incluye el código y el mensaje exacto que devuelve el Ministerio.
