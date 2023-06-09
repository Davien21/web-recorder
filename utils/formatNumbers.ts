export const parseCurrencyValue = (value: number): string => {
  if (!value && value !== 0) return "";

  const formattedValue = value.toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

  return formattedValue;
};

export const parseCurrencyString = (value: string): number => {
  if (!value) return 0;

  const numberString = value.replace(/,/g, "");
  return parseFloat(numberString);
};
