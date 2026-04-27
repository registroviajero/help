---
title: Credenciales SES
description: Qué son las credenciales SES.HOSPEDAJES, cómo añadirlas en RegistroViajero, asignarlas a alojamientos y probar la conexión con el Ministerio.
---

# Credenciales SES

Las credenciales SES son las que te proporciona el Ministerio del Interior para acceder a la plataforma **SES.HOSPEDAJES** y enviar las comunicaciones de viajeros.

::: warning
Las credenciales del **servicio telemático** (`hospedajes.ses.mir.es`) **no son las del portal web** del Ministerio. El Ministerio te las entrega tras dar de alta tu establecimiento como prestador del servicio de hospedaje.
:::

## Datos necesarios

- **Usuario SES** — proporcionado por el Ministerio.
- **Contraseña SES** — proporcionada por el Ministerio.
- **Código de arrendador** — identifica a la persona física o jurídica titular del alojamiento. Es independiente del **código de establecimiento**, que se asigna por alojamiento.

## Crear credenciales

1. Ve a **Configuración → Credenciales SES**.
2. Haz clic en **Nuevas credenciales**.
3. Introduce el usuario, la contraseña y el código de arrendador.
4. Guarda las credenciales.

::: tip
Si gestionas propiedades de diferentes propietarios, crea un juego de credenciales por cada propietario. Así podrás asignar las credenciales correctas a cada alojamiento.
:::

## Asignar a alojamientos

Al crear o editar un alojamiento, selecciona las credenciales SES que correspondan. Si aún no has creado las credenciales, puedes hacerlo directamente desde el formulario del alojamiento sin perder el progreso.

## Probar la conexión

Desde la lista de credenciales, el botón **Probar conexión** envía una consulta de prueba al Ministerio. RegistroViajero te confirma si las credenciales son correctas — y si no, te indica el motivo (usuario o contraseña incorrectos, código bloqueado, etc.).

::: info Solo Propietario y Administrador
La acción de probar conexión está disponible solo para los roles **Propietario** y **Administrador**. Está limitada a 10 intentos por minuto para evitar bloqueos del Ministerio.
:::

Más detalle en [Probar credenciales SES](/guia/probar-credenciales-ses).

## Seguridad

Las credenciales del Ministerio se almacenan **cifradas en nuestra base de datos** y nunca se muestran en texto plano después de guardarlas — solo se indica que existen credenciales configuradas. Si necesitas cambiarlas, edítalas y se sobreescriben.

## ¿No tengo credenciales?

Si aún no dispones de credenciales del Ministerio, puedes usar RegistroViajero para gestionar reservas y recopilar datos de huéspedes. El envío al Ministerio se activará cuando configures las credenciales.

Para obtener tus credenciales, contacta con la oficina de extranjería o la comisaría de policía de tu zona, o consulta la web del Ministerio del Interior.
