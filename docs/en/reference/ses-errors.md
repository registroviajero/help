---
title: Ministry errors
description: Common errors returned by SES.HOSPEDAJES when submitting a guest report, and how to resolve each one.
---

::: info Reference translation
This page is a courtesy translation. The [Spanish version](/referencia/errores-ses) is the authoritative reference.
:::

# Ministry errors

When the Ministry of the Interior rejects a submission through SES.HOSPEDAJES, RegistroViajero surfaces the error code and description. Here are the most common errors and how to resolve them.

## Frequent errors

### Guest data

| Code | Description | Fix |
|------|-------------|-----|
| Invalid document | The document number is not valid | Verify the guest's document number |
| Date of birth | The date of birth is not consistent | Check the format and that it's a real date |
| Nationality | Nationality doesn't match the document type | A DNI can only belong to a Spanish citizen |
| Support number | Missing support number | DNI holders must include the support number (3 letters on the back) |
| Second surname | Missing second surname | Required for DNI and NIE |

### Reservation data

| Code | Description | Fix |
|------|-------------|-----|
| Establishment code | Establishment code not valid | Verify that the code assigned to the accommodation is correct |
| Credentials | Invalid credentials | Check the username, password, and lessor code in [SES credentials](/en/guide/ses-credentials) |
| Dates | Invalid reservation dates | Check-in must be before check-out |
| Duplicate batch | The batch was already submitted | RegistroViajero handles this automatically |

## How to fix an error

1. From the errored reservation, review the Ministry's error message.
2. Correct the flagged data (may require the guest to update their info).
3. Re-validate the reservation.
4. Resubmit to the Ministry.

## Persistent errors

If an error persists after correcting the data, check:

- That the [SES credentials](/en/guide/ses-credentials) are correct and active.
- That the accommodation's establishment code is the one assigned by the Ministry.
- That the SES.HOSPEDAJES platform is operational (occasional scheduled maintenance).

If the issue continues, contact support.
