/** Life-area chip styles — synced with tailwind.config.js chip.* tokens */
export const LIFE_AREA_CHIP = {
  money: { wrap: 'bg-chip-money-bg text-chip-money-fg' },
  home: { wrap: 'bg-chip-home-bg text-chip-home-fg' },
  family: { wrap: 'bg-chip-family-bg text-chip-family-fg' },
  vehicle: { wrap: 'bg-chip-vehicle-bg text-chip-vehicle-fg' },
  grocery: { wrap: 'bg-chip-grocery-bg text-chip-grocery-fg' },
  travel: { wrap: 'bg-chip-travel-bg text-chip-travel-fg' },
  daily: { wrap: 'bg-chip-daily-bg text-chip-daily-fg' },
};

export function chipWrap(chipKey) {
  return LIFE_AREA_CHIP[chipKey]?.wrap ?? 'bg-primary-soft text-primary';
}
