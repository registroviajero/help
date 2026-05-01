---
title: Review a reservation before submitting
description: Checklist to know whether a reservation is ready to validate and submit to the Ministry, which blockers can appear, and what action to take.
---

::: info Reference translation
This page is a courtesy translation. The [Spanish version](/guia/revisar-reserva) is the authoritative reference.
:::

# Review a reservation before submitting

Before submitting a report to the Ministry, review the reservation from the panel. The goal is to check two things: guests have finished, and the accommodation has the required SES.HOSPEDAJES setup.

## Quick checklist

A reservation is ready to move forward when:

- Every guest appears as **Completed**.
- Every guest has signed.
- No Ministry-required fields are missing.
- The accommodation has an **establishment code**.
- The accommodation has SES credentials assigned.
- Your trial or Pro subscription is active.

If something is missing, RegistroViajero shows the reason before you validate or submit.

## What to do based on what you see

| What you see on the reservation | What it means | What to do |
| --- | --- | --- |
| A guest still needs to complete | The guest has not finished check-in. | Send their check-in link again. |
| Signature missing | The guest entered data but did not sign. | Ask them to reopen their link and reach the **Signature** step. |
| Last name 2 or support number missing | That document requires the field before signing or submission. | Ask the guest to correct their form. |
| Establishment code missing | The accommodation does not have the code assigned by the Ministry. | Edit the accommodation and add the code. |
| SES credential missing | The accommodation has no credentials assigned. | Assign credentials on the accommodation or create them from Settings. |
| Reservation is in Error | The Ministry rejected a previous attempt. | Review the message, unlock editing if needed, and submit again. |
| Reservation is Sent | RegistroViajero is waiting for the Ministry response. | Wait; do not submit again. |

## Recommended order

1. Open the reservation.
2. Check guests and signatures.
3. Review the warnings shown on the reservation.
4. If everything is correct, click **Validate**.
5. After validation, click **Submit to Ministry**.
6. Wait until the reservation becomes **Confirmed** or **Error**.

::: tip
If you manage many reservations, start with those in **Guest completed**: they usually need your review.
:::

## If a guest must correct data

If the reservation is **Validated** or **Error**, use **Guest editing** to let the guest return to their link. When they click **Edit my information**, the reservation returns to **Pending** and their previous signature is deleted. They must then correct the data, sign again, and you must validate again.

Do not ask the guest to change data the Ministry has not flagged. The smaller the correction, the easier it is to review afterwards.

## If the problem is configuration

Configuration blockers cannot be fixed by the guest:

- **Establishment code**: edit it on the accommodation.
- **SES credentials**: create them in **Settings → SES credentials** and assign them to the accommodation.
- **Subscription**: the **Owner** manages it from **Settings → Billing**.

After fixing the configuration, return to the reservation and validate or submit again.
