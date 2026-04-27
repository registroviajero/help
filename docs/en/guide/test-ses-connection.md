---
title: Test SES credentials
description: How to verify your Ministry credentials before a real submission, which errors the test returns, and how to resolve them.
---

::: info Reference translation
This page is a courtesy translation. The [Spanish version](/guia/probar-credenciales-ses) is the authoritative reference.
:::

# Test SES credentials

Before sending a real report, you can **test your credentials** with the Ministry to confirm they're correct. It's the fastest way to rule out credential issues when a submission fails.

::: info Owner and Admin only
The test-connection action is only available to **Owner** and **Administrator** roles. It is rate-limited to 10 attempts per minute.
:::

## How to test

1. Go to **Settings → SES credentials**.
2. On the row of the credentials you want to verify, click **Test connection**.
3. RegistroViajero sends a probe request to the Ministry (no actual guest report is generated — it's only a verification).
4. You'll see the result in a few seconds: **Successful** or a specific error message.

## Possible results

| Result | What it means | What to do |
|---|---|---|
| **Connection successful** | The Ministry accepts the credentials and the account has telematic submission enabled. | Nothing — you can submit reports now. |
| **Invalid username or password** | The Ministry rejects the sign-in. | Review the username, password, and lessor code. |
| **No telematic submission permission** | The credentials are valid but the service is not enabled. | Contact the Ministry to enable telematic submission on your account. |
| **The Ministry is unreachable** | Temporary outage of the Ministry's service. | Wait a few minutes and try again. |
| **Too many attempts** | You have run 10 tests in under a minute. | Wait 1 minute before retrying. |

## When to test

- **After creating** new credentials — to catch typos before submitting anything.
- **If a submission fails** with a credentials error — to confirm whether it's a credentials issue or a data issue.
- **After renewing the password** in the Ministry portal — the test confirms the new password is active.

## If the test passes but a real submission fails

If the test says **Connection successful** but a later submission goes to **Error**, the problem is in the **guest data**, not in the credentials. Open the reservation and check the Ministry message to find the field to fix. More detail in [Ministry errors](/en/reference/ses-errors).

## Why there's a limit

The Ministry can temporarily block accounts that send too many queries in a short time. RegistroViajero caps testing at **10 attempts per minute** to protect you from accidental lockouts caused by repeated retries.
