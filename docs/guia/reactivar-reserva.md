---
title: Reactivar una reserva archivada
description: Cómo recuperar una reserva archivada por error o por una cancelación de la OTA, y por qué se desvincula automáticamente del calendario iCal al reactivarla.
---

# Reactivar una reserva archivada

Si una reserva queda **archivada** por error — porque la archivaste, porque una sincronización iCal detectó una cancelación de la OTA o porque enviaste una anulación al Ministerio — puedes **reactivarla** sin tener que crearla de nuevo.

## Cuándo usar Reactivar

- La OTA marcó la reserva como cancelada por un fallo y el huésped sí va a alojarse.
- Archivaste manualmente una reserva por error y el huésped llega esa noche.
- Tras una anulación al Ministerio, vas a empezar de cero con datos corregidos.

## Cómo reactivar

1. Abre la reserva archivada (en el listado de **Reservas** filtra por estado **Archivada**).
2. Pulsa **Reactivar**.
3. La reserva vuelve a un estado activo:
   - **Pendiente** si aún faltan datos de huéspedes.
   - **Completado por huéspedes** si los huéspedes ya habían firmado todo antes de que se archivara.

## Qué pasa con el feed iCal

```mermaid
flowchart LR
  OTA[Calendario iCal<br/>de la OTA] -- "Sincronización<br/>cada 15 min" --> RV[RegistroViajero]
  RV -- "Reactivar" --> Desv[Reserva<br/>desvinculada]
  OTA -. "Sincronización<br/>posterior" .-x Desv
```

Si la reserva venía importada de un calendario iCal (Booking, Airbnb, etc.) y la siguiente sincronización detectara que sigue cancelada en la OTA, RegistroViajero tendría que archivarla otra vez.

Para evitar ese círculo, **al reactivar se rompe el vínculo** con el calendario iCal de origen:

- La reserva mantiene una nota visible de su origen (Booking, Airbnb, etc.) para tu referencia.
- Pero las siguientes sincronizaciones **ya no la afectan** — ni se vuelve a archivar ni se actualiza con cambios de fechas.
- A partir de ese momento la reserva es completamente manual: si cambian las fechas en la OTA, tienes que actualizarlas tú a mano.

::: warning
Si la reserva se archivó por una **anulación enviada al Ministerio**, reactivar la reserva en RegistroViajero **no la reactiva en el Ministerio**. Tendrás que enviar una nueva comunicación con los datos corregidos.
:::

## Después de reactivar

Una vez reactivada:

- El interruptor de **edición del huésped** vuelve a su valor por defecto según el [estado](/referencia/estados).
- Las firmas previas de los huéspedes se conservan si la reserva pasó a **Completado por huéspedes**.
- Si la reactivas en **Pendiente**, los huéspedes pueden volver a editar sus datos.

Más detalle en [Estados de reserva](/referencia/estados).
