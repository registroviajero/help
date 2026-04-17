# Estados de reserva

Cada reserva en RegistroViajero pasa por una serie de estados que reflejan su progreso desde la creación hasta la confirmación por el Ministerio.

## Diagrama de estados

```
PENDIENTE → COMPLETADO POR HUÉSPEDES → VALIDADO → ENVIADO → CONFIRMADO
                                                          ↘ ERROR
```

## Estados

| Estado | Descripción |
|--------|-------------|
| **Pendiente** | Reserva creada. Esperando a que los huéspedes completen sus datos. |
| **Completado por huéspedes** | Todos los huéspedes han rellenado y firmado sus datos. Lista para revisión. |
| **Validado** | El administrador ha revisado los datos y ha marcado la reserva como correcta. |
| **Enviado** | La comunicación se ha enviado a SES.HOSPEDAJES y está pendiente de confirmación. |
| **Confirmado** | El Ministerio ha aceptado la comunicación. |
| **Error** | El Ministerio ha rechazado la comunicación. Revisa los [errores](/referencia/errores-ses) para corregir los datos. |
| **Cancelado** | La reserva ha sido cancelada manualmente. |
| **Bloqueado** | Bloqueo de fechas sin huéspedes (mantenimiento, uso personal, etc.). |

## Estados del huésped

Cada huésped individual también tiene su propio estado:

| Estado | Descripción |
|--------|-------------|
| **Pendiente** | Enlace generado, aún no abierto. |
| **Enlace abierto** | El huésped ha abierto el enlace. |
| **En progreso** | El huésped ha empezado a rellenar datos. |
| **Completado** | El huésped ha completado todos los pasos y firmado. |

El estado de la reserva cambia a "Completado por huéspedes" cuando **todos** los huéspedes alcanzan el estado "Completado".

## Reservas bloqueadas

Una reserva en estado **Enviado**, **Confirmado** o **Error** está bloqueada — no se pueden modificar los datos de los huéspedes sin anular primero el envío.
