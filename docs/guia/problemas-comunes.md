---
title: Problemas comunes
description: "Soluciones a las incidencias más habituales al usar RegistroViajero: errores de envío, enlaces de check-in caducados, credenciales inválidas, reservas duplicadas y más."
---

# Problemas comunes

Listado de incidencias frecuentes y cómo resolverlas. Si tu problema no aparece aquí, contacta con soporte.

## Envío al Ministerio

### El Ministerio rechaza la comunicación

La reserva queda en estado **Error**. Abre la reserva para ver el código y la descripción devueltos por SES.HOSPEDAJES. Los más habituales están documentados en [Errores del Ministerio](/referencia/errores-ses).

Para corregir:

1. Identifica qué huésped o campo ha causado el rechazo.
2. Corrige los datos (puede requerir que el huésped rellene de nuevo el formulario).
3. Vuelve a validar la reserva.
4. Reenvía al Ministerio.

### "Credenciales no válidas" al enviar

Casi siempre significa que:

- El usuario, contraseña o código de arrendador están mal escritos.
- La contraseña ha caducado o ha sido rotada en el portal del Ministerio.
- Las credenciales no tienen permisos de envío telemático habilitados.

Comprueba los tres valores en **Configuración → Credenciales SES** y vuelve a intentarlo.

### El envío tarda en confirmarse

El Ministerio consulta el estado del lote de forma asíncrona. Lo normal es ver el resultado (Confirmado o Error) en **menos de 5 minutos**. Si pasan más de 30 minutos sin confirmación, refresca la página y, si persiste, contacta con soporte.

### Error "lote duplicado"

Ocurre cuando se reenvía un lote que ya estaba en el sistema del Ministerio. RegistroViajero lo detecta y **gestiona la recuperación automáticamente** — no requiere acción por tu parte.

## Check-in del huésped

### El huésped dice que el enlace no funciona

Comprueba:

- **Enlace correcto**: asegúrate de que el huésped está abriendo el enlace completo, incluido el token después de `/checkin/`.
- **Enlace ya usado**: cada enlace es único por huésped. Si ya completó el check-in, volver a abrirlo muestra el resumen, no el formulario.
- **Reserva cancelada**: si la reserva ha sido cancelada, el enlace se deshabilita.

### El huésped no puede subir la foto del documento

Las causas más comunes:

- **Tamaño excesivo**: el sistema comprime automáticamente fotos grandes, pero archivos RAW o PDF muy pesados pueden fallar. Pide una foto desde el móvil.
- **Formato no soportado**: se aceptan JPG, PNG, HEIC y PDF. Otros formatos (TIFF, BMP) no.
- **Navegador antiguo**: los iPhones con iOS < 13 tienen problemas con HEIC. Pide al huésped que actualice o use JPG.

### El huésped completa el formulario pero no se guarda

Los datos se guardan en cada transición de paso. Si el huésped cierra el navegador a mitad de un paso sin avanzar, ese paso no queda guardado. Soluciones:

- Pide al huésped que complete al menos hasta el siguiente paso antes de cerrar.
- Si el problema es recurrente, puede haber un bloqueador de cookies de terceros (el check-in no usa cookies de terceros, pero algunos ajustes muy restrictivos bloquean también el localStorage).

## Reservas

### Una reserva importada desde Booking no tiene nombre de huésped

Es comportamiento normal: Booking.com **no incluye** datos de huéspedes en el feed iCal por privacidad. Desde la reserva, añade huéspedes manualmente y envíales el enlace de check-in.

### Una reserva se ha duplicado

Suele pasar cuando:

- El mismo alojamiento tiene **dos feeds iCal** apuntando al mismo portal (p. ej., dos URLs de Booking para el mismo apartamento).
- La reserva se creó manualmente y después entró también por iCal.

Cancela una de las dos copias y, si es un problema de feeds, revisa **Alojamientos → Feeds de calendario** y elimina el duplicado.

### Una reserva cancelada en Booking sigue apareciendo

Puede deberse al retraso de sincronización (hasta 30 minutos). Fuerza un **sync manual** desde la página del alojamiento. Si persiste, comprueba que la reserva está realmente cancelada en el extranet de Booking.

## Cuenta y equipo

### No recibo el email de verificación

Revisa la carpeta de spam. Si no está, desde el propio login puedes reenviar el email. Si persiste, verifica que el dominio del destinatario no está bloqueando correos de `registroviajero.com`.

### No puedo acceder a Facturación

Solo el rol **Propietario** puede gestionar la facturación. Administrador y Miembro no tienen acceso. Si necesitas cambiar de propietario, contacta con soporte.

### Un miembro del equipo no recibe notificaciones push

- En **Brave**: Brave bloquea el servicio FCM de Google por defecto. Las notificaciones push no funcionan. Usa Chrome o Edge.
- En **Safari iOS**: solo funcionan si la app está instalada como PWA desde la pantalla de inicio.
- En otros navegadores: comprueba que las notificaciones están permitidas para el dominio en la configuración del navegador.

## iCal

### El feed falla con "404"

El portal de origen ha regenerado la URL del iCal (habitual tras un cambio de contraseña). Entra al portal, copia la nueva URL y actualiza el feed en RegistroViajero.

### Aparecen reservas con fechas incorrectas

Algunos portales publican la fecha de fin como "el día siguiente al checkout" y otros como "el mismo día". RegistroViajero normaliza esto, pero si ves una noche de más, verifica:

- Que la zona horaria del alojamiento es correcta.
- Que la reserva en el portal de origen está bien introducida.

## Facturación

### ¿Cuándo se me cobra?

El primer cobro se produce al finalizar el periodo de prueba de 15 días, salvo que canceles antes. A partir de ahí, se cobra mensualmente el mismo día. La gestión la realiza Polar.

### Activé o desactivé un alojamiento y no veo el importe ajustado

Los cambios en el número de alojamientos activos se prorratean automáticamente y aparecen reflejados en la siguiente factura. Puedes consultar el borrador de la próxima factura en **Configuración → Facturación**.

### Cancelé pero sigo teniendo acceso a la cuenta

Al cancelar, **mantienes el acceso hasta el final del periodo pagado**. Una vez cumplido ese plazo, la cuenta pasa a solo lectura y no podrás enviar nuevas comunicaciones al Ministerio. Los enlaces de check-in siguen funcionando para los huéspedes.

## Sigue sin funcionar

Si tu problema no aparece en esta lista o las soluciones no lo resuelven, contacta con soporte. Incluye en tu mensaje:

- Tu **email** de cuenta.
- El **nombre del alojamiento** afectado (si aplica).
- Un **código de reserva** concreto (si aplica).
- La **hora aproximada** en la que ocurrió el problema.
- El **navegador y sistema operativo** que estabas usando.
