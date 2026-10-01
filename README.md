# Yara App

This package contains the downloaded Yara prototype and the initial Supabase connection setup.

## Run
1. Install Node.js.
2. Run `npm install`.
3. Copy `.env.example` to `.env`.
4. Put your Supabase publishable key in `.env`.
5. Run `npm run dev`.

The downloaded HTML is preserved as `public-yara-mobile.html`. The original export did not include editable React source files, so the UI must be rebuilt into `src` before production use.
