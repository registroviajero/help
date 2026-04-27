---
title: Ministry errors
description: Common errors returned by SES.HOSPEDAJES when submitting a guest report and how to resolve each one without filing a cancellation.
---

::: info Reference translation
This page is a courtesy translation. The [Spanish version](/referencia/errores-ses) is the authoritative reference.
:::

# Ministry errors

When the Ministry of the Interior rejects a submission through SES.HOSPEDAJES, RegistroViajero surfaces the message on the reservation (state **Error**). Here are the most common errors and how to resolve them.

## Errors in guest data

| Message | Cause | Fix |
|--------|-------------|-----|
| **Invalid document** | The document number doesn't pass validation. | Review the number with the guest — DNI letter, NIE sequence, passport digits. |
| **Date of birth** | The date is inconsistent or out of range. | Check that the date is complete and real (no future years, etc.). |
| **Nationality incompatible with document** | For example, a DNI with a non-Spanish nationality. | Only Spanish citizens can use DNI. Switch to passport if the nationality is different. |
| **Missing support number** | Required for DNI, NIE, and EU certificate. | Ask the guest for the number printed on the back of the card (next to the CAN on DNI 3.0). |
| **Missing last name 2** | Required for DNI and NIE. | Ask the guest — most carry it on the document. |
| **Minimum age not met** | A minor under 14 is not properly registered as accompanied. | Under-14s are exempt from full registration; they must appear as accompanied by the responsible adult. |

## Errors in reservation data

| Message | Cause | Fix |
|--------|-------------|-----|
| **Establishment code not valid** | The accommodation code is not recognized by the Ministry. | Verify the code in **Accommodations → Edit**. It must match exactly the code assigned by the Ministry. |
| **Invalid credentials** | Wrong username, password, or lessor code. | Check **Settings → SES credentials** and use **Test connection**. More detail in [Test credentials](/en/guide/test-ses-connection). |
| **Invalid dates** | Check-in equal to or after check-out, or past dates outside the deadline. | Check-in must be before check-out and within the Ministry's deadlines. |
| **Duplicate batch** | The submission was already in the Ministry system. | RegistroViajero recovers it automatically — no action needed. |

## How to fix an error without cancelling

Unlike **Sent** or **Confirmed**, a reservation in **Error** is **not locked**. To fix:

1. Open the errored reservation.
2. Click **Guest editing** to unlock guest editing (more detail in [Admin edit-lock override](/en/guide/admin-edit-lock-override)).
3. Ask the guest to fix the data (or fix it yourself).
4. Validate and resubmit.

No prior Ministry cancellation is needed.

## Persistent errors

If an error persists after correcting the data, check:

- The [SES credentials](/en/guide/ses-credentials) using **Test connection** (rules out credential issues).
- That the accommodation's establishment code is the one assigned by the Ministry.
- That the SES.HOSPEDAJES platform is operational (occasional scheduled maintenance).

If the issue continues, contact support. Include the exact code and message returned by the Ministry.
