/**
 * The sample financing terms quoted across the site (home page table and the
 * ad landing). Every page's copy reads these numbers, so a rate change is one
 * edit here.
 */
export const FINANCING_EXAMPLE = {
  contract: "$15,000",
  terms: [
    { years: 10, monthly: "$211", rate: "7.46%" },
    { years: 20, monthly: "$143", rate: "7.51%" },
  ],
} as const;

/** The lowest monthly payment in the example ("From $143/month"). */
export const LOWEST_FINANCING_TERM = FINANCING_EXAMPLE.terms[1];
