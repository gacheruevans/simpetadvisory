# Website Implementation Plan

## 1. Project brief

Build a professional lead-generation website for a consultancy offering:

- Empowerment talks.
- Corporate training in financial literacy.
- ERP systems consultancy, with a particular focus on Zoho Books.

The client states that they are an Authorized Partner. Use their exact approved partner designation and supplied brand assets once confirmed. The company name, location, contact details, and existing branding have not yet been provided; use [Company Name] in working drafts.

This document defines the proposed template and implementation scope. It does not assume that a website, booking system, or CRM has already been built.

## 2. Recommended template concept

**Template direction: Financial Empowerment & Business Systems Consultancy.**

Use a modern boutique consultancy layout with the warmth of a training brand and the clarity of a business technology services firm. Give visitors three visible service paths, while presenting them under one promise: stronger financial understanding and better business operations.

Recommended positioning:

> Empowering People. Strengthening Businesses.

Supporting homepage copy:

> Practical empowerment talks, financial literacy training, and Zoho Books consultancy to help people build confidence and businesses improve how they work.

Primary call to action: **Discuss Your Needs**.

Service-specific calls to action: **Book a Speaker**, **Request Corporate Training**, and **Discuss Zoho Books**.

Use consultation and quotation requests rather than checkout in the first release. Training and implementation requirements should be discussed before a scope and fee are agreed.

## 3. Audiences and visitor journeys

The following audiences are proposed and must be confirmed with the client.

| Audience | Likely need | Website journey | Conversion |
| --- | --- | --- | --- |
| HR and learning teams | Financial literacy programmes for employees | Home → Financial Literacy Training → enquiry | Request a tailored programme |
| Event and community organisers | An empowerment speaker | Home → Empowerment Talks → enquiry | Request speaker availability |
| Business owners and finance teams | Accounting workflows and systems support | Home → Zoho Books & ERP Consultancy → enquiry | Request a discovery call |

Keep the three paths prominent on mobile and desktop. Each service page should explain who it serves, what the engagement includes, and how to enquire.

## 4. Visual direction

### Proposed style

- Deep navy for headings and primary navigation: `#12243A`.
- Teal for primary actions and selected highlights: `#0F766E`.
- Muted gold for decorative accents: `#C89B3C`.
- Warm off-white for section backgrounds: `#F7F8FA`.
- Dark slate for body copy: `#334155`.
- Generous spacing, restrained borders, readable headings, and modest card rounding.
- Use an accessible sans-serif font with a system-font fallback. Limit font weights and avoid heavy font downloads.

These colours are a proposed starting point; adapt them to the supplied logo. Validate text and interactive-state contrast before approval. Gold should primarily serve as an accent rather than small text on white.

### Imagery

- Prioritise real photos of the lead facilitator, training sessions, and professional engagements.
- Use licensed stock photographs only where client photography is unavailable.
- Use authorised Zoho assets and approved product screenshots with fictional demonstration data.
- Do not display client records, invented endorsements, fabricated impact metrics, or unapproved customer logos.

### Interface behaviour

- Compact sticky header, clear mobile menu, and one prominent primary action.
- Clear focus states, keyboard-accessible controls, and reduced-motion support.
- Subtle transitions only; avoid distracting carousels, autoplay video, and excessive animation.

## 5. Sitemap and page requirements

| Route | Purpose | Required content | Main action |
| --- | --- | --- | --- |
| `/` | Introduce the company and direct visitors | Value proposition, three service cards, approach, genuine credentials, FAQs | Discuss Your Needs |
| `/about` | Establish credibility | Company story, facilitator profiles, relevant experience, approved credentials | Meet With Us |
| `/services/empowerment-talks` | Generate speaking enquiries | Audience types, approved topics, formats, speaker profile, engagement process | Book a Speaker |
| `/services/financial-literacy-training` | Generate corporate training enquiries | Learning objectives, proposed modules, delivery formats, customisation process | Request Corporate Training |
| `/services/zoho-books-erp-consultancy` | Generate systems consulting enquiries | Zoho Books focus, confirmed capabilities, implementation process, support scope, partner designation | Discuss Zoho Books |
| `/contact` | Capture and route enquiries | Service-aware form, verified contact details, availability expectations | Send Enquiry |
| `/privacy` | Explain handling of enquiry data | Information collected, purpose, recipients, retention, contact route | Contact the Company |
| `/thank-you` | Confirm completed enquiries | Submission confirmation and realistic next steps | Return Home |

Use a Services dropdown rather than a separate service overview page for the initial release. Add Insights, Events, Resources, and Case Studies when approved content is available; do not launch empty sections.

## 6. Homepage section order

1. **Header:** logo, Home, About, Services, Contact, and Discuss Your Needs.
2. **Hero:** positioning headline, short supporting copy, primary action, and authentic facilitator or workshop image.
3. **Three service cards:** Empowerment Talks, Financial Literacy Training, and Zoho Books & ERP Consultancy. Each has a distinct description and link.
4. **Who we help:** audience-focused copy for organisations, event organisers, and businesses.
5. **Financial literacy spotlight:** practical learning outcomes and a link to the corporate training page.
6. **Zoho Books spotlight:** explain the offered consultancy and display the client's approved partner designation.
7. **How engagements work:** discovery → tailored proposal → delivery → agreed follow-up.
8. **About the facilitator/team:** short introduction and relevant credentials.
9. **Evidence:** approved testimonials, project examples, or delivery experience. Omit this section if evidence is unavailable.
10. **Frequently asked questions:** customisation, delivery format, quotation process, and consultancy support.
11. **Final enquiry prompt:** invite the visitor to choose a service and discuss their needs.
12. **Footer:** contact details, service links, privacy policy, and verified social links.

## 7. Service content specification

### Empowerment talks

Explain the intended audience, the speaker's experience, available topics, session formats, and enquiry process. Proposed themes may include personal growth, financial confidence, goal setting, and entrepreneurship; the client must confirm which they actually deliver.

Allow enquiries to include event type, audience size, proposed date, location or online format, and the organiser's objectives. An enquiry is a request for availability, not a confirmed booking.

### Corporate financial literacy training

Present proposed programme modules such as budgeting, saving, debt management, financial goal setting, and understanding everyday financial decisions. Confirm the final curriculum, session lengths, and facilitator qualifications before publication.

Show how a programme is tailored: needs assessment, agreed learning objectives, training delivery, and optional feedback or follow-up. Do not promise certification or measured financial outcomes unless these are part of an established offering.

### Zoho Books and ERP consultancy

Lead with the client's confirmed Zoho Books expertise. Present broader ERP advisory only within their actual delivery capability.

Proposed services to validate with the client:

- Business needs assessment and workflow review.
- Zoho Books setup and configuration.
- Data migration planning and validation.
- User onboarding and practical training.
- Reporting and workflow improvement.
- Integration scoping and ongoing support.

Treat these as a proposed service menu, not as confirmed capabilities. Distinguish Zoho Books accounting engagements from broader ERP work in the copy. Do not imply that a Zoho Books engagement automatically includes every ERP function, local tax integration, or other Zoho product.

Use the exact partner category and badge supplied by the client. Do not introduce an unverified tier, certification, or directory listing.

## 8. Features and functional requirements

### Initial release

- Responsive layouts across phone, tablet, and desktop.
- Service-specific enquiry buttons that preselect the relevant service on the contact form.
- Contact form with name, email, service interest, and message as required fields.
- Optional phone number, organisation, preferred contact method, and service-specific details.
- Progressive disclosure: show event fields for talks, participant details for training, and current-system details for consultancy.
- Client-side validation for usability and server-side validation before processing.
- Clearly labelled required fields and readable inline error messages.
- Enquiry delivery to the client's confirmed business inbox; include a reference identifier for follow-up.
- Loading, success, and failure states. Show success only after the enquiry has been accepted by the delivery service.
- On failure, retain entered values and provide the verified email or phone as an alternative.
- Basic spam controls: hidden honeypot, request throttling, and input-length limits.
- Optional WhatsApp link using a client-approved business number and a generic service-specific message.
- FAQs using accessible disclosure controls.
- Social sharing metadata, sitemap, canonical URLs, robots configuration, and a useful 404 page.

Do not request bank statements, financial records, passwords, or ERP credentials through the website form. Detailed discovery and document exchange can happen through an agreed secure channel after initial contact.

### Later enhancements

- Calendar scheduling after availability and ownership are agreed.
- CRM integration, potentially Zoho CRM if the client uses it; Zoho Books partnership does not establish CRM usage.
- Training event listings and registration.
- Downloadable programme brochures and approved case studies.
- A content editor for articles and programme updates.
- Online payments and a learning portal only if there is a defined business need.

## 9. Proposed implementation architecture

Use a lightweight, content-first website with reusable page components and one server-side enquiry endpoint. The exact framework and hosting provider should follow the developer's existing supported environment and the client's editing requirements.

Suggested project organisation:

```text
src/
  pages-or-routes/   # Public pages and enquiry endpoint
  components/       # Header, footer, buttons, cards, FAQ, enquiry form
  content/          # Approved company and service copy
  styles/           # Design tokens and shared styles
  lib/              # Validation, enquiry delivery, configuration
public/
  images/           # Optimised, licensed photography and approved brand assets
```

Implementation decisions:

- Render public content as static HTML where practical.
- Keep approved copy separate from layout so future edits are simple.
- Add a CMS only if the client needs frequent self-service editing; otherwise begin with managed content updates.
- Keep email and integration secrets in server-side environment variables.
- Do not add a database for the first release unless enquiry retention or another approved feature requires one.
- Make enquiry handling replaceable so CRM routing can be added without rebuilding the form.
- Document deployment, content updates, and ownership during handover.

## 10. Content and assets required

- Trading name, logo files, brand colours, and preferred domain.
- Business email, phone, WhatsApp number if used, location, and service regions.
- Founder/facilitator biographies and approved photographs.
- Exact Zoho partner designation and authorised badge or verification link, where available.
- Final talk topics, training modules, delivery formats, and actual consultancy services.
- Approved testimonials and references, with permission to publish.
- Pricing approach: proposal-based, indicative packages, or published rates.
- Responsible person for enquiries and an achievable response-time statement.
- Privacy policy inputs, including retention practice and service providers that process enquiries.

Use neutral placeholders in development. Remove unfilled sections or replace placeholders with approved content before launch.

## 11. Search visibility and measurement

- Give each service its own descriptive title, heading, and metadata.
- Target the client's actual location and service regions once confirmed; do not assume a Nairobi-only audience.
- Use descriptive internal links between related training and systems services.
- Add structured business/service information only where it matches visible, verified content.
- Optimise images and use descriptive alternative text where appropriate.
- Track service enquiries, confirmed form submissions, and optional WhatsApp clicks if analytics are enabled.
- Treat a button click as interest, not as a completed enquiry or confirmed booking.
- Do not include names, emails, phone numbers, or enquiry messages in analytics events.
- Agree analytics and consent requirements before enabling tracking.

## 12. Delivery phases

Indicative effort assumes a small brochure website, timely feedback, and supplied content. Confirm the schedule after reviewing the assets and integration needs.

| Phase | Activities | Output | Indicative effort |
| --- | --- | --- | --- |
| 1. Discovery and content | Confirm audiences, brand, scope, service claims, and enquiry routing | Approved sitemap and content checklist | 1–2 working days |
| 2. Wireframes and design | Define mobile/desktop layouts, visual system, and service journeys | Reviewable homepage and service-page design | 2–3 working days |
| 3. Implementation | Build pages, reusable components, enquiry handling, and metadata | Working staging website | 4–6 working days |
| 4. Content and verification | Populate approved content, test forms, accessibility, responsiveness, and performance | Release candidate | 2–3 working days |
| 5. Launch and handover | Client sign-off, domain setup, production checks, and handover | Live website and maintenance notes | 1 working day |

Estimated total: **10–15 working days**, excluding client review delays and optional integrations. This is a planning estimate, not a fixed quotation.

## 13. Acceptance criteria

- [ ] A first-time visitor can identify all three service areas from the homepage.
- [ ] Each service has a dedicated page and a working enquiry path.
- [ ] Service buttons correctly preselect the enquiry category.
- [ ] The site has no horizontal overflow at common widths from 360 px through desktop.
- [ ] Navigation, FAQs, and forms work by keyboard with visible focus.
- [ ] Headings, form labels, contrast, and image descriptions support accessibility.
- [ ] Empty, malformed, and valid submissions behave correctly; delivery failures never show a success message.
- [ ] A test enquiry reaches the agreed recipient with the correct service and submitted details.
- [ ] Spam controls and server-side validation are active.
- [ ] No secrets or submitted personal data appear in client-side code or analytics.
- [ ] All business claims, photographs, partner assets, and testimonials are approved.
- [ ] No placeholder copy, broken links, or inactive calls to action remain.
- [ ] Page titles, sharing previews, canonical URLs, sitemap, and 404 handling are verified.
- [ ] Production HTTPS, contact links, and enquiry delivery work after deployment.
- [ ] The client receives access ownership, update instructions, and maintenance responsibilities.

## 14. Scope boundaries and open decisions

Initial scope is a public consultancy website that generates qualified enquiries. A student portal, ERP application, payment system, CRM, and automated confirmed bookings require separate scope if requested.

Confirm before implementation:

1. Company name, brand identity, domain, and target geography.
2. Primary commercial priority: talks, corporate training, or consultancy.
3. Actual Zoho partner designation and approved range of services.
4. Available photography, biographies, and evidence of past work.
5. Enquiry owner, preferred channels, and booking process.
6. Content-editing needs, hosting ownership, budget, and desired launch date.

These decisions refine the plan; they do not prevent preparing the proposed layout and content structure.

## 15. Reference used

Zoho's official guide describes the general role of a consulting partner in needs assessment, product selection, implementation, training, and support. It informs the proposed service structure; it does not verify this client's status or capabilities.

- [Work with a Zoho Partner — official guide](https://www.zoho.com/partners/help/working-with-a-partner.html)

