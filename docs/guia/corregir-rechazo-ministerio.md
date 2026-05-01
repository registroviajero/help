---
title: Corregir un rechazo del Ministerio
description: Qué hacer cuando SES.HOSPEDAJES rechaza una comunicación, cómo interpretar el mensaje, desbloquear la edición del huésped y reenviar sin anular.
---

# Corregir un rechazo del Ministerio

Cuando SES.HOSPEDAJES rechaza una comunicación, la reserva queda en **Error**. No significa que tengas que crear otra reserva: normalmente puedes corregir el dato señalado, validar de nuevo y reenviar.

## Pasos recomendados

1. Abre la reserva en **Error**.
2. Lee el mensaje devuelto por el Ministerio.
3. Identifica si el problema es de **datos del huésped**, **alojamiento** o **credenciales SES**.
4. Corrige solo lo necesario.
5. Valida otra vez la reserva.
6. Reenvía al Ministerio.

## Si el error es de datos del huésped

Usa este flujo cuando el mensaje habla de DNI, NIE, apellido, número de soporte, fecha de nacimiento, nacionalidad u otro dato personal:

1. En la reserva, activa **Edición del huésped**.
2. Envía de nuevo el enlace de check-in al huésped afectado.
3. Pídele que pulse **Editar mis datos** en la pantalla final.
4. Cuando lo haga, la reserva volverá a **Pendiente** y su firma anterior se borrará.
5. El huésped corrige el dato y firma de nuevo.
6. Tú revisas, validas y reenvías.

::: warning
En **Error**, la edición del huésped está bloqueada por defecto. Primero tienes que abrirla desde la reserva para que el botón **Editar mis datos** aparezca en el enlace del huésped.
:::

## Campos que suelen causar rechazos

| Mensaje o pista | Qué revisar |
| --- | --- |
| DNI o NIE incorrecto | Número de documento, tipo de documento y nacionalidad. |
| Falta apellido | Nombre, primer apellido y, para DNI/NIE, **apellido 2**. |
| Falta número de soporte | **Número de soporte** para DNI, NIE o certificado de registro UE. |
| Fecha inválida | Fecha de nacimiento completa y coherente. |
| Menor de edad | Si tiene 14–17 años, debe indicar parentesco con un adulto de la reserva. |

Para códigos concretos, consulta [Errores del Ministerio](/referencia/errores-ses).

## Si el error es de configuración SES

Si el mensaje habla de credenciales, usuario, contraseña, código de arrendador o permiso de envío:

1. Ve a **Configuración → Credenciales SES**.
2. Revisa usuario, contraseña y código de arrendador.
3. Usa **Probar conexión**.
4. Corrige la credencial o crea una nueva.
5. Comprueba que el alojamiento usa esa credencial.
6. Vuelve a la reserva y reenvía.

## Si falta el código de establecimiento

El código de establecimiento se configura en el alojamiento, no en la reserva:

1. Abre el alojamiento.
2. Edita sus datos.
3. Añade el **código de establecimiento** asignado por el Ministerio.
4. Guarda y vuelve a la reserva.
5. Valida o reenvía.

## Cuándo hace falta anular

No hace falta anular para corregir una reserva en **Error**. La anulación solo entra en juego cuando una reserva ya está **Confirmada** y necesitas cancelar lo comunicado al Ministerio.

Si la reserva está **Enviada**, espera a que el Ministerio responda. Si pasa a **Confirmado** y los datos son incorrectos, tendrás que cancelar y empezar de nuevo.

## Después de reenviar

RegistroViajero consulta automáticamente el resultado del nuevo envío. La reserva terminará en:

- **Confirmado** si el Ministerio acepta la comunicación.
- **Error** si todavía hay algo que corregir.

Si aparece otro error, repite el proceso con el nuevo mensaje. No corrijas campos al azar: usa siempre la pista que devuelve el Ministerio.
