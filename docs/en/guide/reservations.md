---
title: Create reservations
description: How to create reservations manually, import them from iCal calendars, handle overbooking, reactivate cancelled ones, and search or export reservations in RegistroViajero.
---

::: info Reference translation
This page is a courtesy translation. The [Spanish version](/guia/reservas) is the authoritative reference.
:::

# Create reservations

## Create a manual reservation

1. Go to **Reservations** or the **Dashboard**.
2. Click **New reservation**.
3. Pick the accommodation and the check-in / check-out dates.
4. If the dates overlap with another reservation on the same accommodation, RegistroViajero shows an **overbooking** warning but still lets you create the reservation — useful for legitimate conflicts between OTAs.

The reservation is created in **Pending** state. Next, [add guests](/en/guide/check-in) and send their check-in links.

## Calendar view

The **Dashboard** provides a monthly view of every reservation, colour-coded by state and accommodation. Click any cell to open the reservation.

## Import reservations

You can auto-import reservations from booking platforms using [iCal calendars](/en/guide/ical). Imported reservations show a visual indicator of their origin (Booking.com, Airbnb, VRBO, etc.).

Imported reservations that don't include guest data are created **with no guests** — you decide whether to add guests or [block the dates](#date-blocks). Some platforms (like Airbnb) do include the guest's first name and use it as the reference.

### Automatic cancellations

If the OTA cancels a reservation, RegistroViajero marks it as **Cancelled** on the next iCal sync (every 15 minutes).

### Reactivate a cancelled reservation

If you need to recover a reservation that was cancelled by mistake, open it and hit **Reactivate**. RegistroViajero:

- Reopens the reservation (state **Pending** or **Guest completed**, depending on existing data).
- **Unlinks it from the iCal feed** that cancelled it so it won't be re-cancelled on the next sync.

More detail in [Reactivate a reservation](/en/guide/reactivate-cancelled-booking).

## Date blocks

When a reservation has no guests, you can mark it as **Blocked** to signal that those dates are not available (maintenance, personal use, etc.). You can unblock at any time.

## Search reservations

Use the search bar (shortcut `⌘K` or `Ctrl+K`) to find reservations by:

- Guest name.
- Document number.
- Reservation reference.
- Accommodation name.

## Export

- **PDF** — download a single reservation with all guest data.
- **CSV** — export all reservations with filters by state, accommodation, and dates.

## Reservation states

See the [states reference](/en/reference/states) for every possible state and its transitions.
