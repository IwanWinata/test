export const formatNumber = (num: number): string => {
    return new Intl.NumberFormat('de-DE', { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(num);
}