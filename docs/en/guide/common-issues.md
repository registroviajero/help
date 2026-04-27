---
title: Common issues
description: "Solutions to the most frequent issues when using RegistroViajero: Ministry submission errors, expired check-in links, invalid credentials, duplicate reservations, edit lock, and more."
---

::: info Reference translation
This page is a courtesy translation. The [Spanish version](/guia/problemas-comunes) is the authoritative reference.
:::

# Common issues

Most frequent issues and how to fix them. If your case isn't listed, contact support.

## Ministry submission

### The Ministry rejects the report

The reservation goes into **Error** state. Open it to see the message returned. The most common ones are documented in [Ministry errors](/en/reference/ses-errors).

To fix without filing a cancellation:

1. On the reservation, click **Guest editing** to unlock guest editing.
2. Ask the guest to correct the data (or correct it yourself).
3. Validate again and resubmit.

### "Invalid credentials" when submitting

Almost always means:

- The username, password, or lessor code is wrong.
- The password has expired or has been changed in the Ministry portal.
- The credentials don't have telematic submission enabled.

Check the three values in **Settings → SES credentials** and use **Test connection** to verify before resubmitting.

### Submission takes too long to confirm

The Ministry responds asynchronously. You normally see the result (Confirmed or Error) in **less than 5 minutes**. If more than 30 minutes pass without confirmation, refresh the page and contact support if it persists.

### "Duplicate batch"

Happens when the same submission reaches the Ministry twice (for example, after a network blip). RegistroViajero detects the duplicate and **handles recovery automatically** — no action required.

## Guest check-in

### The guest says the link doesn't work

Check:

- **Correct link:** make sure the guest opens the full link, including the code after `/checkin/`.
- **Already used:** each link is unique per guest. If they have already completed check-in, reopening it shows the summary, not the form.
- **Cancelled reservation:** if the reservation is cancelled, the link is disabled.

### The guest can't find where to upload the document photo

RegistroViajero **does not require photos of the DNI or passport**. Only textual data is collected: document type, number, and support number when applicable. If you need to keep ID copies for internal reasons, do so outside the platform.

### The guest can't sign

A message appears like "**A required field is missing for signature**". Check the following depending on the document type:

- **DNI or NIE** → missing **last name 2** or **support number**.
- **EU registration certificate** → missing **support number**.
- Age under 14 → minors under 14 are exempt and don't sign; add them as accompanied by the responsible adult.

### "Editing locked" or "you cannot edit your data"

The reservation no longer accepts changes from the guest side. Causes:

- The reservation is in **Validated**, **Error**, **Sent**, **Confirmed**, **Cancelled**, or **Blocked**.
- In **Validated** or **Error**, you (admin) can unlock guest editing from the reservation (**Guest editing** button).

More detail in [Admin edit-lock override](/en/guide/admin-edit-lock-override).

### The guest fills in the form but it isn't saved

Data is saved when moving to the next step. If the guest closes the browser **mid-step** without advancing, that step isn't saved (the rest are). Solutions:

- Ask the guest to complete at least to the next step before closing.
- If they reopen the same link, they pick up at the last saved step.

## Reservations

### A reservation imported from Booking has no guest name

This is normal: Booking.com **does not include** guest data in the iCal feed for privacy reasons. From the reservation, add guests manually and send their check-in links.

### A reservation is duplicated

Usually happens when:

- The same accommodation has **two iCal feeds** pointing to the same portal (e.g., two Booking URLs for the same apartment).
- The reservation was created manually and later imported via iCal too.

Cancel one of the two copies. If it's a feed issue, check **Accommodations → Calendar feeds** and remove the duplicate.

### A reservation cancelled on Booking still shows up

The iCal sync runs every **15 minutes**. If a reservation persists, force a manual sync from the accommodation page. If it still shows up, verify the reservation is actually cancelled in the Booking extranet.

## Account and team

### I'm not getting the verification email

Check your spam folder. If it's not there, you can resend the email from the login screen. If it persists, check that the recipient's domain isn't blocking emails from `registroviajero.com`.

### I can't access Billing

Only the **Owner** role can manage billing. Administrator and Member roles don't have access. To transfer ownership, contact support.

### A team member doesn't get push notifications

- In **Brave**: push notifications are blocked by the browser's privacy restrictions. Use Chrome or Edge.
- On **Safari iOS**: only works if the app is installed as a PWA from the home screen (see [Install the app](/en/guide/install-as-app)).
- In other browsers: check that notifications are allowed for the domain in the browser settings.

## iCal

### The feed fails with "404"

The source portal has regenerated the iCal URL (common after a password change). Sign in to the portal, copy the new URL, and update the feed in RegistroViajero.

### Reservations show wrong dates

Some portals publish the end date as "the day after checkout" and others as "the same day". RegistroViajero normalizes this, but if you see an extra night, check:

- That the accommodation's timezone is correct.
- That the reservation in the source portal is correctly entered.

## Billing

### When am I charged?

The first charge happens at the end of the 15-day trial unless you cancel beforehand. After that, you are billed monthly on the same day. Polar handles the payment.

### I activated or deactivated an accommodation and don't see the amount adjusted

Changes in the number of active accommodations are prorated automatically and shown on the next invoice. You can preview the upcoming invoice in **Settings → Billing**.

### I cancelled but I still have access

When you cancel, **you keep access until the end of the paid period**. Once the period ends, the account becomes read-only and you can't submit new Ministry reports. Check-in links keep working for guests.

## Still not working

If your problem isn't listed or the suggestions don't solve it, contact support with:

- Your account **email**.
- The affected **accommodation name** (if applicable).
- A specific **reservation code** (if applicable).
- The **approximate time** of the issue.
- The **browser and operating system** you were using.
