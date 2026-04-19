---
title: Frequently asked questions
description: "Answers to the most common questions about RegistroViajero: guest registration, Ministry submission, pricing, privacy, penalties, and more."
---

::: info Reference translation
This page is a courtesy translation. The [Spanish version](/faq) is the authoritative reference.
:::

# Frequently asked questions

## General

### What is Royal Decree 933/2021?

It is the Spanish regulation that requires tourist accommodation establishments to report guest data to the Ministry of the Interior through the SES.HOSPEDAJES platform. RegistroViajero automates this process.

### Do I need to install anything?

No. RegistroViajero is a web application. You only need an up-to-date browser (Chrome, Safari, Firefox, or Edge). Optionally, you can install it as a PWA on your mobile device.

### Do my guests need to create an account?

No. Each guest receives a unique link that opens the check-in form directly. No sign-up, download, or installation required.

## Guest registration

### What languages is check-in available in?

The guest check-in form is available in 9 languages: Spanish, English, French, German, Italian, Portuguese, Galician, Basque, and Catalan.

### Which documents does it accept?

- **Spanish citizens:** DNI or passport
- **Non-Spanish:** passport, NIE, EU registration certificate, foreign national ID, or travel document

### What about minors?

Minors under 14 are exempt from registration under Royal Decree 933/2021. Those aged 14 to 17 must complete the form and declare their kinship with an adult on the same reservation.

### Is guest data saved if they close the browser?

Yes. Data is saved automatically after each step. The guest can resume later by reopening the same link.

## Submission to the Ministry

### How do I get SES credentials?

Credentials are issued by the Spanish Ministry of the Interior. Contact your local immigration office (*oficina de extranjería*) or police station.

### Can I use RegistroViajero without SES credentials?

Yes. You can manage reservations and collect guest data without credentials. Ministry submission is enabled as soon as you configure them.

### How long do I have to submit a guest report?

The regulation requires submission at the moment of check-in or within 24 hours of the start of the stay. Late submissions can still be qualified as non-compliance, even if sent later.

### What happens if the Ministry rejects a submission?

The reservation goes into the **Error** state with the code and message returned by SES.HOSPEDAJES. Fix the flagged fields, re-validate, and resubmit. See [Ministry errors](/en/reference/ses-errors) and [common issues](/en/guide/common-issues) for details.

### Does it work in Catalonia and the Basque Country?

Not yet. These regions use their own systems (Mossos d'Esquadra and Ertzaintza). Integration is planned for future releases.

## Billing

### How much does it cost?

The Pro plan costs **€5 per accommodation per month**, with no minimum. You only pay for active accommodations. It includes a **15-day free trial**, no credit card required.

### Is check-in blocked if my plan lapses?

No. Guests can **always** complete their data through the check-in links, regardless of your subscription status.

### Can I cancel at any time?

Yes. When you cancel, you keep access until the end of the paid period.

### What are the penalties for non-compliance with RD 933/2021?

Failure or inaccuracy in the submission is classified as a minor offense (€100–600) under Organic Law 4/2015 on Public Safety. It can escalate to serious (€601–30,000) or very serious (€30,001–600,000) for repeat offenses, volume, or willful misconduct. See the [full penalty reference](/en/reference/penalties).

## Reservation import

### Which platforms are supported?

Booking.com, Airbnb, VRBO, Expedia, Tripadvisor, Google Calendar, and any platform that exports iCal (.ics).

### How often are reservations synced?

Automatically every 15 minutes. You can also trigger a manual sync at any time.

## Security and privacy

### How is data protected?

- Passwords hashed with argon2id
- SES credentials encrypted with AES-256-GCM
- Communications over HTTPS/TLS
- Agency-isolated storage
- Immutable audit log

### How long is guest data retained?

3 years from the checkout date, as required by Royal Decree 933/2021. After that, data is deleted automatically.

### Can I delete my account?

Yes. From **Settings → Profile → Danger zone**. Personal data is anonymized; audit records are retained for legal compliance.
