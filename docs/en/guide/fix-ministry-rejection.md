---
title: Fix a Ministry rejection
description: What to do when SES.HOSPEDAJES rejects a submission, how to read the message, unlock guest editing, and submit again without cancelling.
---

::: info Reference translation
This page is a courtesy translation. The [Spanish version](/guia/corregir-rechazo-ministerio) is the authoritative reference.
:::

# Fix a Ministry rejection

When SES.HOSPEDAJES rejects a submission, the reservation becomes **Error**. This does not usually mean you need to create a new reservation: in most cases you can fix the flagged data, validate again, and submit again.

## Recommended steps

1. Open the reservation in **Error**.
2. Read the message returned by the Ministry.
3. Identify whether the problem is with **guest data**, the **accommodation**, or **SES credentials**.
4. Fix only what is needed.
5. Validate the reservation again.
6. Submit it to the Ministry again.

## If the error is guest data

Use this flow when the message mentions DNI, NIE, surname, support number, date of birth, nationality, or another personal detail:

1. On the reservation, turn on **Guest editing**.
2. Send the affected guest their check-in link again.
3. Ask them to click **Edit my information** on the final screen.
4. When they do, the reservation returns to **Pending** and their previous signature is deleted.
5. The guest fixes the data and signs again.
6. You review, validate, and submit again.

::: warning
In **Error**, guest editing is locked by default. You first need to open it from the reservation so the **Edit my information** button appears on the guest link.
:::

## Fields that often cause rejections

| Message or hint | What to check |
| --- | --- |
| DNI or NIE incorrect | Document number, document type, and nationality. |
| Surname missing | First name, first surname, and for DNI/NIE, **last name 2**. |
| Support number missing | **Support number** for DNI, NIE, or EU registration certificate. |
| Invalid date | Complete and coherent date of birth. |
| Minor | If aged 14–17, they must state kinship with an adult on the reservation. |

For specific codes, see [Ministry errors](/en/reference/ses-errors).

## If the error is SES configuration

If the message mentions credentials, username, password, lessor code, or submission permission:

1. Go to **Settings → SES credentials**.
2. Review username, password, and lessor code.
3. Use **Test connection**.
4. Fix the credential or create a new one.
5. Check that the accommodation uses that credential.
6. Return to the reservation and submit again.

## If the establishment code is missing

The establishment code is configured on the accommodation, not on the reservation:

1. Open the accommodation.
2. Edit its details.
3. Add the **establishment code** assigned by the Ministry.
4. Save and return to the reservation.
5. Validate or submit again.

## When cancellation is required

You do not need to cancel to fix a reservation in **Error**. Cancellation only applies when a reservation is already **Confirmed** and you need to cancel what was reported to the Ministry.

If the reservation is **Sent**, wait for the Ministry response. If it becomes **Confirmed** and the data is wrong, you will need to cancel and start again.

## After submitting again

RegistroViajero automatically checks the result of the new submission. The reservation will end in:

- **Confirmed** if the Ministry accepts the report.
- **Error** if something still needs fixing.

If another error appears, repeat the process with the new message. Do not change fields at random: always use the hint returned by the Ministry.
