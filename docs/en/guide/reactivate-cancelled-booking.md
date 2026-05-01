---
title: Reactivate an archived reservation
description: How to recover a reservation archived by mistake or after an OTA cancellation, and why it auto-detaches from the iCal calendar when you reactivate.
---

::: info Reference translation
This page is a courtesy translation. The [Spanish version](/guia/reactivar-reserva) is the authoritative reference.
:::

# Reactivate an archived reservation

If a reservation is **archived** by mistake — because you archived it, because an iCal sync detected an OTA cancellation, or because you filed a Ministry cancellation — you can **reactivate** it without recreating it from scratch.

## When to use Reactivate

- The OTA marked the reservation as cancelled by accident and the guest is still staying.
- You manually archived a reservation in error and the guest is arriving that night.
- After a cancellation to the Ministry, you're starting over with corrected data.

## How to reactivate

1. Open the archived reservation (in the **Reservations** list, filter by state **Archived**).
2. Hit **Reactivate**.
3. The reservation returns to an active state:
   - **Pending** if guest data is still incomplete.
   - **Guest completed** if all guests had signed before it was archived.

## What happens with the iCal feed

```mermaid
flowchart LR
  OTA[OTA iCal<br/>calendar] -- "Sync<br/>every 15 min" --> RV[RegistroViajero]
  RV -- "Reactivate" --> Det[Reservation<br/>detached]
  OTA -. "Later<br/>sync" .-x Det
```

If the reservation was imported from an iCal calendar (Booking, Airbnb, etc.) and the next sync would still detect it as cancelled at the OTA, RegistroViajero would have to archive it again.

To break that loop, **reactivating detaches the reservation from the source iCal calendar**:

- The reservation keeps a visible note about its origin (Booking, Airbnb, etc.) for your reference.
- But subsequent syncs **no longer affect it** — it won't be archived again, and it won't be updated with date changes.
- From that point on, the reservation is fully manual: if the dates change at the OTA, you'll have to update them by hand.

::: warning
If the reservation was archived after a **Ministry-side cancellation**, reactivating the reservation in RegistroViajero **does not reactivate it with the Ministry**. You'll need to send a new submission with the corrected data.
:::

## After reactivating

Once reactivated:

- The **guest editing** switch returns to its default value based on the [state](/en/reference/states).
- Previous guest signatures are kept if the reservation moves to **Guest completed**.
- If you reactivate it as **Pending**, guests can edit their data again.

More detail in [Reservation states](/en/reference/states).
