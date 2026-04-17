# Validar y enviar

Una vez que todos los huéspedes de una reserva han completado sus datos, puedes validar y enviar la comunicación al Ministerio del Interior.

## Flujo de envío

1. **Revisar** — comprueba que los datos de todos los huéspedes son correctos
2. **Validar** — marca la reserva como validada. Esto confirma que has revisado los datos
3. **Enviar** — con un clic, RegistroViajero genera los documentos XML, los comprime y los envía a SES.HOSPEDAJES

## Qué se envía

Por cada estancia se generan dos documentos XML:
- **Parte de viajeros** — datos de todos los huéspedes
- **Reserva de hospedaje** — datos del alojamiento y la reserva

Los documentos se comprimen (ZIP) y codifican (Base64) según los requisitos del Ministerio.

## Consulta de resultados

Tras el envío, RegistroViajero consulta automáticamente el resultado:

- **Confirmado** — el Ministerio ha aceptado la comunicación
- **Error** — el Ministerio ha rechazado algún dato. Consulta los [errores del Ministerio](/referencia/errores-ses) para más información

## Anulación

Si necesitas corregir datos después de un envío confirmado, puedes **anular** la comunicación previa y enviar una nueva con los datos corregidos.

## Requisitos previos

Para enviar al Ministerio necesitas:
- [Credenciales SES](/guia/credenciales-ses) configuradas
- Código de establecimiento asignado al alojamiento
- Todos los huéspedes con datos completos y firma

::: warning
Una vez enviada la comunicación al Ministerio, los datos de la reserva quedan bloqueados y no se pueden modificar sin anular el envío.
:::
