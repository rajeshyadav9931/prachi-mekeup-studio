# Prachi Makeup Studio & Academy

A responsive, dependency-free website for a makeup studio and academy in Ranchi, Jharkhand.

## Run

Use `npm.cmd run dev` on Windows, then open http://localhost:3000. `npm.cmd run build` produces the deployable static `dist` directory. `npm.cmd run check` checks JavaScript syntax.

## Business information and launch

Verified listing details and their source are recorded in BUSINESS-DETAILS.md. The site includes the public phone number, address, Instagram, hours, Google Maps link and BeautySalon structured data.

- Confirm service and academy copy with the owner. All website photography and the course poster come from the owner-selected Instagram account @prachimakeupstudioandacedmy. Original post links are recorded in assets/SOURCES.json.
- The enquiry builder creates a WhatsApp message for the listed phone number. The visitor must review and send it in WhatsApp; no submission is stored by this site. Confirm the listed number accepts WhatsApp messages. Direct calling is also available.
- Add the production canonical URL, absolute Open Graph image URL and sitemap.xml using the real domain, then reference the sitemap in robots.txt.
- Verify the deployed domain in Google Search Console and add its URL to the Google Business Profile. Keep contact details consistent and gather genuine client reviews. Search rankings are not guaranteed.
- Build with `npm.cmd run build` and upload the contents of `dist/` to a static hosting provider.

Google references: https://developers.google.com/search/docs/appearance/structured-data/local-business and https://developers.google.com/search/docs/appearance/establish-business-details

## Features

Responsive navigation, service enquiry preselection, filterable studio portfolio, accessible image dialogs, native FAQ accordions, enquiry-message builder, clipboard copy, semantic markup, descriptive metadata, local content and reduced-motion support. Google Fonts is used with local serif/sans-serif fallbacks. Site images are stored locally.
