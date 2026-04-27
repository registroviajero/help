---
title: Data-quality warnings
description: What the yellow warnings during check-in mean, the types, why they don't block submission, and which requirements do block the signature step.
---

::: info Reference translation
This page is a courtesy translation. The [Spanish version](/guia/avisos-calidad-datos) is the authoritative reference.
:::

# Data-quality warnings

While the guest fills in the check-in form, RegistroViajero shows **yellow warnings** when it detects likely typos. These warnings **do not block** completion — they're advisory.

The **only requirements that block the signature step** are those imposed by the Ministry (last name 2, support number, and minimum age).

## Warning types

| Warning | When it shows | Example |
|---|---|---|
| **Too short** | The field has fewer characters than usual for that field. | Street: "C" |
| **Recommended data** | An optional but useful field is empty. | Empty email on a reservation with sparse data |
| **Wrong length for country** | The postal code doesn't match the format of the selected country. | "1" in Spain (should be 5 digits) |
| **Suspicious format** | The field has an anomalous pattern (extra dots, spaces, odd characters). | "juan@@example.com" |

## How they look

They appear as a yellow message under the affected field, with a warning icon. The field is not painted red (that's reserved for blocking errors) and the guest can hit **Next** without fixing it.

## Why they're non-blocking

Royal Decree 933/2021 requires certain data fields. If the Ministry accepts them, so does RegistroViajero. Blocking the guest because of an unusually short street, an abbreviated address, or an oddly formatted email would prevent them from completing check-in when the data is probably correct. Instead, we ask the guest to **review** and move on if they're sure.

## Requirements that DO block the signature step

Only these Ministry requirements block the signature screen:

- **Age 14 or older** — under-14s are exempt from full registration.
- **Last name 2** — required if the document is DNI or NIE.
- **Support number** — required if the document is DNI, NIE, or EU registration certificate.

If any of these are missing, the guest sees the message **A required field is missing for signature** and must fix it before continuing.

## What if the guest ignores the warnings?

When the form lands in your panel, the warnings remain highlighted on the reservation view, so you see them too. If you think a value is wrong:

1. [Unlock guest editing](/en/guide/admin-edit-lock-override) (only in **Validated** or **Error** states).
2. Ask the guest to review the affected field.
3. Validate and submit again.

::: tip How to prevent them
The more time you give the guest before check-in, the less rushed the form and the fewer warnings. Share the link as soon as you create the reservation, not at the last minute.
:::
