const THOUSANDS_SEPARATORS = /\B(?=(\d{3})+(?!\d))/g;

export const formatThousandSeparator = (amount: string): string => {
  return amount.toString().replace(THOUSANDS_SEPARATORS, ',');
};
