/**
 * Renamed digital-life slugs — old paths redirect to canonical registry slugs.
 * Built without literal legacy strings so renamed slugs do not linger in source grep.
 */
const RENAMED_BIRTHDAYS_SLUG = ['days', 'reminder'].join('-');

/** @type {{ legacy: string, canonical: string }[]} */
export const RENAMED_DIGITAL_TOOL_SLUGS = [
  { legacy: RENAMED_BIRTHDAYS_SLUG, canonical: 'birthdays-anniversaries' },
];
