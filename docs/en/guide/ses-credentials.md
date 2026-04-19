---
title: SES credentials
description: What SES.HOSPEDAJES credentials are, which fields you need (username, password, lessor code), and how to add them in RegistroViajero.
---

::: info Reference translation
This page is a courtesy translation. The [Spanish version](/guia/credenciales-ses) is the authoritative reference.
:::

# SES credentials

SES credentials are the ones the Spanish Ministry of the Interior issues so you can access the **SES.HOSPEDAJES** platform and submit guest reports.

## Required fields

- **SES username** — issued by the Ministry
- **SES password** — issued by the Ministry
- **Lessor code** (*código de arrendador*) — identifies the natural or legal person who owns the accommodation

## Create credentials

1. Go to **Settings → SES credentials**.
2. Click **New credentials**.
3. Enter the username, password, and lessor code.
4. Save the credentials.

::: tip
If you manage properties for different owners, create one set of credentials per owner. That way you can assign the right credentials to each accommodation.
:::

## Assign to accommodations

When you create or edit an accommodation, pick the SES credentials that apply. If you haven't created credentials yet, you can do it directly from the accommodation form without losing your progress.

## Security

Ministry credentials are stored **encrypted with AES-256-GCM**. They are never displayed in clear text after saving — the UI only shows that credentials have been configured.

## I don't have credentials

If you don't have Ministry credentials yet, you can still use RegistroViajero to manage reservations and collect guest data. Ministry submission will be enabled once you configure your credentials.

To request credentials, contact your local immigration office (*oficina de extranjería*) or police station, or visit the Ministry of the Interior website.
