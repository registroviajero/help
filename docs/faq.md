# Preguntas frecuentes

## General

### ¿Qué es el Real Decreto 933/2021?

Es la normativa española que obliga a los establecimientos de alojamiento turístico a comunicar los datos de sus huéspedes al Ministerio del Interior a través de la plataforma SES.HOSPEDAJES. RegistroViajero automatiza este proceso.

### ¿Necesito instalar algo?

No. RegistroViajero es una aplicación web. Solo necesitas un navegador actualizado (Chrome, Safari, Firefox o Edge). Opcionalmente puedes instalarla como PWA en tu dispositivo móvil.

### ¿Mis huéspedes necesitan crear una cuenta?

No. Cada huésped recibe un enlace único que abre directamente el formulario de check-in. No requiere registro, descarga ni instalación.

## Registro de huéspedes

### ¿En qué idiomas está el check-in?

El formulario de check-in está disponible en 9 idiomas: español, inglés, francés, alemán, italiano, portugués, gallego, euskera y catalán.

### ¿Qué documentos acepta?

- **Españoles:** DNI o pasaporte
- **No españoles:** pasaporte, NIE, certificado de registro UE, documento de identidad extranjero o documento de viaje

### ¿Qué pasa con los menores de edad?

Los menores de 14 años están exentos de registro según el RD 933/2021. Los menores de 14 a 17 años deben completar el formulario e indicar su parentesco con un adulto de la misma reserva.

### ¿Los datos del huésped se guardan si cierra el navegador?

Sí. Los datos se guardan automáticamente en cada paso. El huésped puede continuar más tarde abriendo el mismo enlace.

## Envío al Ministerio

### ¿Cómo consigo las credenciales SES?

Las credenciales las proporciona el Ministerio del Interior. Contacta con la oficina de extranjería o comisaría de policía de tu zona.

### ¿Puedo usar RegistroViajero sin credenciales SES?

Sí. Puedes gestionar reservas y recopilar datos de huéspedes sin credenciales. El envío al Ministerio se activa cuando las configures.

### ¿Cuánto tiempo tengo para enviar el parte?

La normativa exige la comunicación en el momento del check-in o en las 24 horas siguientes al inicio del hospedaje. Enviar fuera de plazo puede calificarse como incumplimiento, incluso si se envía más tarde.

### ¿Qué pasa si el Ministerio rechaza un envío?

La reserva queda en estado **Error** con el código y mensaje devueltos por SES.HOSPEDAJES. Corrige los datos indicados, vuelve a validar y reenvía. Consulta los [errores comunes](/referencia/errores-ses) y [problemas comunes](/guia/problemas-comunes) para más detalle.

### ¿Funciona en Cataluña y País Vasco?

Actualmente no. Estas comunidades utilizan sistemas propios (Mossos d'Esquadra y Ertzaintza). La integración está prevista para futuras versiones.

## Facturación

### ¿Cuánto cuesta?

El plan Pro cuesta 5 €/puesto/mes (mínimo 2 puestos). Hay un periodo de prueba de 15 días con acceso ilimitado, sin tarjeta de crédito.

### ¿Se bloquea el check-in si caduca mi plan?

No. Los huéspedes **siempre** pueden completar sus datos a través de los enlaces de check-in, independientemente del estado de tu suscripción.

### ¿Puedo cancelar en cualquier momento?

Sí. Al cancelar, mantienes el acceso hasta el final del período pagado.

### ¿Qué sanciones hay si no cumplo el RD 933/2021?

La omisión o inexactitud de la comunicación se tipifica como infracción leve (100–600 €) por la Ley Orgánica 4/2015 de Seguridad Ciudadana. Puede escalar a grave (601–30.000 €) o muy grave (30.001–600.000 €) por reiteración, volumen o conducta dolosa. Consulta la [referencia completa de sanciones](/referencia/sanciones) para detalle.

## Importación de reservas

### ¿Qué plataformas son compatibles?

Booking.com, Airbnb, VRBO, Expedia, Tripadvisor, Google Calendar y cualquier plataforma que exporte iCal (.ics).

### ¿Cada cuánto se sincronizan las reservas?

Automáticamente cada 15 minutos. También puedes forzar una sincronización manual en cualquier momento.

## Seguridad y privacidad

### ¿Cómo se protegen los datos?

- Contraseñas cifradas con argon2id
- Credenciales SES cifradas con AES-256-GCM
- Comunicaciones por HTTPS/TLS
- Almacenamiento aislado por agencia
- Registro de auditoría inmutable

### ¿Cuánto tiempo se conservan los datos de huéspedes?

3 años desde la fecha de salida, conforme al RD 933/2021. Transcurrido ese plazo, se eliminan automáticamente.

### ¿Puedo eliminar mi cuenta?

Sí. Desde **Configuración → Perfil → Zona de peligro**. Los datos personales se anonimizan y los registros de auditoría se conservan por cumplimiento legal.
