# Notificaciones

RegistroViajero te mantiene informado sobre la actividad de tus reservas y tu equipo.

## Tipos de notificación

- **Huésped completó check-in** (`guest_completed`) — un huésped ha terminado de rellenar sus datos
- **Confirmación del Ministerio** (`submission_confirmed`) — la comunicación ha sido aceptada por SES.HOSPEDAJES
- **Error del Ministerio** (`submission_error`) — la comunicación ha sido rechazada
- **Nuevo miembro** (`team_member_joined`) — alguien ha aceptado una invitación a tu equipo
- **Reserva creada** (`registration_created`) — se ha creado una nueva reserva (manual o importada)

## Canales

### Notificaciones en la app

Las notificaciones aparecen en el icono de campana del panel de administración. Se agrupan por reserva para facilitar la lectura.

### Notificaciones push

Si instalas la aplicación como PWA (Progressive Web App) en tu dispositivo, puedes recibir notificaciones push del sistema operativo incluso cuando no tienes la app abierta.

::: warning
Las notificaciones push no funcionan en el navegador Brave debido a restricciones del navegador. Usa Chrome o Edge para recibirlas.
:::

## Preferencias

Desde **Configuración → Notificaciones** puedes activar o desactivar cada tipo de notificación de forma individual. Los tipos nuevos están activados por defecto.
