---
title: Crear reservas
description: Cómo crear reservas manualmente, importarlas desde calendarios iCal, gestionar overbooking, reactivar archivadas y buscar o exportar reservas en RegistroViajero.
---

# Crear reservas

## Crear una reserva manual

1. Ve a **Reservas** o al **Panel de control**.
2. Haz clic en **Nueva reserva**.
3. Selecciona el alojamiento y las fechas de entrada y salida.
4. Si las fechas se solapan con otra reserva del mismo alojamiento, RegistroViajero te avisa con un indicador de **overbooking**, pero te deja crear la reserva igualmente — útil para conflictos legítimos entre OTAs.

La reserva se crea en estado **Pendiente**. A continuación, [añade huéspedes](/guia/check-in) y envía los enlaces de check-in.

## Vista de calendario

Desde el **Panel de control** tienes una vista mensual de todas las reservas, con colores por estado y por alojamiento. Pulsa cualquier celda para abrir la reserva.

## Importar reservas

Puedes importar reservas automáticamente desde plataformas de reservas mediante [calendarios iCal](/guia/ical). Las reservas importadas aparecen con el indicador visual de su origen (Booking.com, Airbnb, VRBO, etc.).

Las reservas importadas que no incluyen datos de huéspedes se crean **sin huéspedes** — tú decides si añadir huéspedes o [bloquear las fechas](#bloqueo-de-fechas). Algunas plataformas (como Airbnb) sí incluyen el nombre de pila del huésped y se usa como referencia.

### Cancelaciones automáticas

Si la OTA cancela una reserva, RegistroViajero la marca como **Archivada** en el siguiente sync iCal (cada 15 minutos).

### Reactivar una reserva archivada

Si necesitas recuperar una reserva archivada por error, ábrela y pulsa **Reactivar**. RegistroViajero:

- Vuelve a abrir la reserva (estado **Pendiente** o **Completado por huéspedes** según los datos existentes).
- La **desvincula del feed iCal** que la archivaba para que no vuelva a archivarse en el próximo sync.

Más detalle en [Reactivar una reserva](/guia/reactivar-reserva).

## Bloqueo de fechas

Cuando una reserva no tiene huéspedes puedes marcarla como **Bloqueada** para indicar que esas fechas no están disponibles (mantenimiento, uso personal, etc.). Puedes desbloquearla en cualquier momento.

## Buscar reservas

Usa la barra de búsqueda (atajo `⌘K` o `Ctrl+K`) para encontrar reservas por:

- Nombre del huésped.
- Número de documento.
- Referencia de reserva.
- Nombre del alojamiento.

## Exportar

- **PDF** — descarga una reserva individual con todos los datos de huéspedes.
- **CSV** — exporta todas las reservas con filtros por estado, alojamiento y fechas.

## Estados de reserva

Consulta la [referencia de estados](/referencia/estados) para conocer todos los estados posibles y sus transiciones.
