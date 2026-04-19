---
title: Reservation states
description: Reference for every possible state of a reservation and a guest in RegistroViajero, from Pending to Confirmed or Error.
---

::: info Reference translation
This page is a courtesy translation. The [Spanish version](/referencia/estados) is the authoritative reference.
:::

# Reservation states

Every reservation in RegistroViajero goes through a series of states that reflect its progress from creation to Ministry confirmation.

## State diagram

```
PENDING → GUESTS COMPLETED → VALIDATED → SUBMITTED → CONFIRMED
                                                   ↘ ERROR
```

## Reservation states

| State | Description |
|-------|-------------|
| **Pending** | Reservation created. Waiting for guests to fill in their data. |
| **Guests completed** | Every guest has filled in and signed their data. Ready for review. |
| **Validated** | The administrator has reviewed the data and marked the reservation as correct. |
| **Submitted** | The report has been sent to SES.HOSPEDAJES and is pending confirmation. |
| **Confirmed** | The Ministry accepted the report. |
| **Error** | The Ministry rejected the report. Review the [errors](/en/reference/ses-errors) to correct the data. |
| **Cancelled** | The reservation was cancelled manually. |
| **Blocked** | Date block with no guests (maintenance, personal use, etc.). |

## Guest states

Each individual guest also has their own state:

| State | Description |
|-------|-------------|
| **Pending** | Link generated, not yet opened. |
| **Link opened** | The guest has opened the link. |
| **In progress** | The guest has started filling in data. |
| **Completed** | The guest has completed every step and signed. |

The reservation moves to "Guests completed" when **every** guest reaches the "Completed" state.

## Locked reservations

A reservation in **Submitted**, **Confirmed**, or **Error** state is locked — you can't modify guest data without cancelling the submission first.
