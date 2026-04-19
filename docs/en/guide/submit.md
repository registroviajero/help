---
title: Validate and submit to the Ministry
description: Step-by-step flow to validate a reservation, generate the guest report and lodging reservation XMLs, and submit them to SES.HOSPEDAJES.
---

::: info Reference translation
This page is a courtesy translation. The [Spanish version](/guia/enviar) is the authoritative reference.
:::

# Validate and submit

Once every guest on a reservation has completed their data, you can validate and submit the report to the Ministry of the Interior.

## Submission flow

1. **Review** — check that every guest's data is correct.
2. **Validate** — mark the reservation as validated. This confirms you've reviewed the data.
3. **Submit** — with one click, RegistroViajero generates the XML documents, compresses them, and submits them to SES.HOSPEDAJES.

## What is submitted

For each stay, two XML documents are generated:

- **Guest report** (*parte de viajeros*) — data for every guest
- **Lodging reservation** (*reserva de hospedaje*) — accommodation and reservation data

The documents are compressed (ZIP) and encoded (Base64) per the Ministry's requirements.

## Result polling

After submission, RegistroViajero automatically polls the result:

- **Confirmed** — the Ministry accepted the report.
- **Error** — the Ministry rejected some data. See [Ministry errors](/en/reference/ses-errors) for details.

## Cancellation

If you need to correct data after a confirmed submission, you can **cancel** the previous report and submit a new one with the corrected data.

## Prerequisites

To submit to the Ministry you need:

- [SES credentials](/en/guide/ses-credentials) configured
- An establishment code assigned to the accommodation
- Every guest with complete data and a signed declaration

::: warning
Once a report has been submitted to the Ministry, the reservation's data is locked and cannot be modified without cancelling the submission first.
:::
