---
title: Notifications
description: Notification types emitted by RegistroViajero, available channels (in-app and push), and how to configure your preferences.
---

::: info Reference translation
This page is a courtesy translation. The [Spanish version](/guia/notificaciones) is the authoritative reference.
:::

# Notifications

RegistroViajero keeps you informed about activity on your reservations and your team.

## Notification types

- **Guest completed check-in** (`guest_completed`) — a guest has finished filling in their data
- **Ministry confirmation** (`submission_confirmed`) — the report was accepted by SES.HOSPEDAJES
- **Ministry error** (`submission_error`) — the report was rejected
- **New team member** (`team_member_joined`) — someone accepted an invitation to your team
- **Reservation created** (`registration_created`) — a new reservation was created (manual or imported)

## Channels

### In-app notifications

Notifications appear in the bell icon on the admin panel. They are grouped by reservation to make reading easier.

### Push notifications

If you install the app as a PWA (Progressive Web App) on your device, you can receive OS-level push notifications even when the app isn't open.

::: warning
Push notifications don't work in the Brave browser due to its restrictions on Google's FCM service. Use Chrome or Edge to receive them.
:::

## Preferences

From **Settings → Notifications** you can enable or disable each notification type individually. New types are enabled by default.
