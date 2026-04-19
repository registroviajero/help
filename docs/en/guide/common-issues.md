---
title: Common issues
description: "Solutions to the most frequent issues when using RegistroViajero: submission errors, expired check-in links, invalid credentials, duplicate reservations, and more."
---

::: info Reference translation
This page is a courtesy translation. The [Spanish version](/guia/problemas-comunes) is the authoritative reference.
:::

# Common issues

A catalogue of frequent issues and how to resolve them. If your problem isn't listed here, contact support.

## Submission to the Ministry

### The Ministry rejects the submission

The reservation goes into the **Error** state. Open it to see the code and description returned by SES.HOSPEDAJES. The most common ones are documented in [Ministry errors](/en/reference/ses-errors).

To fix it:

1. Identify which guest or field caused the rejection.
2. Correct the data (this may require the guest to fill the form again).
3. Re-validate the reservation.
4. Resubmit to the Ministry.

### "Invalid credentials" on submission

It almost always means one of:

- The username, password, or lessor code is mistyped.
- The password has expired or was rotated on the Ministry portal.
- The credentials don't have telematic submission permissions enabled.

Check all three values at **Settings → SES credentials** and try again.

### Submission takes a long time to confirm

The Ministry polls the batch status asynchronously. You'll normally see the result (Confirmed or Error) in **under 5 minutes**. If more than 30 minutes pass without confirmation, refresh the page, and if it persists, contact support.

### "Duplicate batch" error

This happens when a batch is re-submitted that is already in the Ministry's system. RegistroViajero detects it and **handles recovery automatically** — no action needed on your side.

## Guest check-in

### The guest says the link doesn't work

Check:

- **Correct link:** make sure the guest is opening the full link, including the token after `/checkin/`.
- **Already used:** each link is unique per guest. If they already completed check-in, reopening it shows the summary, not the form.
- **Reservation cancelled:** if the reservation has been cancelled, the link is disabled.

### The guest can't upload the document photo

Most common causes:

- **File too large:** the system auto-compresses large photos, but very heavy RAW or PDF files may fail. Ask for a phone photo.
- **Unsupported format:** JPG, PNG, HEIC, and PDF are accepted. Others (TIFF, BMP) are not.
- **Old browser:** iPhones with iOS < 13 have issues with HEIC. Ask the guest to update or use JPG.

### The guest completes the form but it isn't saved

Data is saved at each step transition. If the guest closes the browser mid-step without advancing, that step is not saved. Solutions:

- Ask the guest to complete at least up to the next step before closing.
- If the issue is recurring, a third-party cookie blocker may be interfering (check-in doesn't use third-party cookies, but very strict settings can also block localStorage).

## Reservations

### A reservation imported from Booking has no guest name

This is normal behaviour: Booking.com **does not include** guest data in its iCal feed for privacy reasons. From the reservation, add guests manually and send them the check-in link.

### A reservation appears twice

This usually happens when:

- The same accommodation has **two iCal feeds** pointing to the same portal (e.g., two Booking URLs for the same apartment).
- The reservation was created manually and then also came in via iCal.

Cancel one of the two copies, and if it's a feeds issue, review **Accommodations → Calendar feeds** and remove the duplicate.

### A reservation cancelled in Booking still appears

It may be a sync delay (up to 30 minutes). Force a **manual sync** from the accommodation page. If it persists, check that the reservation is actually cancelled in the Booking extranet.

## Account and team

### I'm not receiving the verification email

Check the spam folder. If it's not there, you can resend the email from the login page. If it persists, verify that the recipient's domain isn't blocking emails from `registroviajero.com`.

### I can't access Billing

Only the **Owner** role can manage billing. Administrator and Member cannot access it. If you need to change ownership, contact support.

### A team member doesn't get push notifications

- On **Brave:** Brave blocks Google's FCM service by default. Push notifications don't work. Use Chrome or Edge.
- On **Safari iOS:** push only works if the app is installed as a PWA from the home screen.
- On other browsers: check that notifications are allowed for the domain in the browser settings.

## iCal

### The feed fails with "404"

The source portal has regenerated the iCal URL (common after a password change). Log in to the portal, copy the new URL, and update the feed in RegistroViajero.

### Reservations appear with wrong dates

Some portals publish the end date as "the day after checkout" and others as "the same day". RegistroViajero normalizes this, but if you see an extra night, check:

- That the accommodation's time zone is correct.
- That the reservation on the source portal is entered correctly.

## Billing

### When am I charged?

The first charge happens at the end of the 15-day trial, unless you cancel before. After that, billing is monthly on the same date. Polar handles the payments.

### I activated or deactivated an accommodation and don't see the amount updated

Changes in the number of active accommodations are prorated automatically and reflected on your next invoice. You can preview the upcoming invoice at **Settings → Billing**.

### I cancelled but I still have access to the account

When you cancel, you **keep access until the end of the paid period**. After that, the account becomes read-only and you won't be able to submit new reports to the Ministry. Guest check-in links keep working.

## Still not working

If your issue isn't in this list or the solutions don't resolve it, contact support. Include in your message:

- Your account **email**.
- The affected **accommodation name** (if applicable).
- A specific **reservation code** (if applicable).
- The approximate **time** when the issue happened.
- The **browser and operating system** you were using.
