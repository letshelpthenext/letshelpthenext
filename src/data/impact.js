// Single source of truth for every impact figure shown on the site.
//
// UNRESOLVED — needs confirmation from Mishma before the site goes live:
//   1. The 2023 amount is unknown. The 2026 board deck states a lifetime total of
//      $26,435, which only reconciles if 2023 was ~$5,000 AND the total excludes
//      2026. But its "26 students" figure DOES include 2026 (1+6+12+7 = 26). The
//      two totals are counted over different periods.
//   2. Because 2023 is unknown, `totalRaised` below sums only the confirmed years
//      and is therefore an UNDERSTATEMENT. Fill in `raised` for 2023 to fix it.
//   3. The 2024 deck text lists a DR Congo recipient, but the 2024 cohort poster
//      shows two Cote d'Ivoire recipients and no DR Congo one.
//   4. The 2025 cohort poster names "Fiorela Hoxhaj" twice (once under the
//      Albanian flag, once under the Ghanaian) and shows 11 faces for 12 students.

export const cohorts = [
  {
    year: 2023,
    studentsHelped: 1,
    raised: null, // UNCONFIRMED — see note 1 above
    countries: ['Malawi'],
    note: 'Our first recipient.',
  },
  {
    year: 2024,
    studentsHelped: 6,
    raised: 8985,
    countries: [
      'Brazil',
      'Haiti',
      "Cote d'Ivoire",
      'Zambia',
      'Cape Verde',
      'DR Congo',
    ],
  },
  {
    year: 2025,
    studentsHelped: 12,
    raised: 12450,
    countries: [
      'Zambia',
      'Mexico',
      'Albania',
      'Haiti',
      'Burundi',
      'Ghana',
      "Cote d'Ivoire",
      'Nigeria',
      'Madagascar',
      'Taiwan',
      'Brazil',
    ],
  },
  {
    year: 2026,
    studentsHelped: 7,
    raised: 9100,
    inProgress: true,
    countries: [
      'Burundi',
      'India',
      'Guyana',
      'Zimbabwe',
      'Nigeria',
      'Philippines',
      'Taiwan',
    ],
  },
];

export const FOUNDED_YEAR = 2023; // Registered as a 501(c)(3) in 2023.

export const totals = {
  studentsHelped: cohorts.reduce((sum, c) => sum + c.studentsHelped, 0),
  totalRaised: cohorts.reduce((sum, c) => sum + (c.raised || 0), 0),
  countriesRepresented: new Set(cohorts.flatMap((c) => c.countries)).size,
  yearsActive: new Date().getFullYear() - FOUNDED_YEAR + 1,
};

export const formatCurrency = (amount) =>
  amount == null
    ? '—'
    : `$${amount.toLocaleString('en-US', { maximumFractionDigits: 0 })}`;

export const currentCohort = cohorts[cohorts.length - 1];

// The four numbers shown in the hero band and on the Home impact strip.
export const headlineStats = [
  {
    number: `${totals.studentsHelped}`,
    label: 'Students Helped',
    description: `Since we became a 501(c)(3) in ${FOUNDED_YEAR}`,
  },
  {
    number: formatCurrency(totals.totalRaised),
    label: 'Awarded in Scholarships',
    description: 'Given directly to students in need',
  },
  {
    number: `${totals.countriesRepresented}`,
    label: 'Countries Represented',
    description: 'Across Africa, Asia, Europe and Latin America',
  },
  {
    number: '100%',
    label: 'Goes to Students',
    description: 'We are entirely volunteer-run',
  },
];
