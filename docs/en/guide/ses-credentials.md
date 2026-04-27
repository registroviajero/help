---
title: SES credentials
description: What SES.HOSPEDAJES credentials are, how to add them in RegistroViajero, assign them to accommodations, and test the connection with the Ministry.
---

::: info Reference translation
This page is a courtesy translation. The [Spanish version](/guia/credenciales-ses) is the authoritative reference.
:::

# SES credentials

SES credentials are the ones the Spanish Ministry of the Interior issues so you can access the **SES.HOSPEDAJES** platform and submit guest reports.

::: warning
The credentials for the **telematic service** (`hospedajes.ses.mir.es`) are **not the credentials for the Ministry's public web portal**. The Ministry issues them after you register your establishment as a hospedaje provider.
:::

## Required fields

- **SES username** — issued by the Ministry.
- **SES password** — issued by the Ministry.
- **Lessor code** (*código de arrendador*) — identifies the natural or legal person who owns the accommodation. It is independent from the **establishment code**, which is assigned per accommodation.

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

## Test the connection

From the credentials list, the **Test connection** button sends a probe request to the Ministry. RegistroViajero confirms whether the credentials are correct — and if they aren't, it tells you why (wrong username/password, blocked code, etc.).

::: info Owner and Admin only
The test-connection action is available only to **Owner** and **Admin** roles. It is rate-limited to 10 attempts per minute to avoid Ministry-side blocks.
:::

More detail in [Test SES credentials](/en/guide/test-ses-connection).

## Security

Ministry credentials are stored **encrypted in our database** and are never displayed in clear text after saving — the UI only shows that credentials have been configured. To change them, edit and overwrite.

## I don't have credentials

If you don't have Ministry credentials yet, you can still use RegistroViajero to manage reservations and collect guest data. Ministry submission will be enabled once you configure your credentials.

To request credentials, contact your local immigration office (*oficina de extranjería*) or police station, or visit the Ministry of the Interior website.
