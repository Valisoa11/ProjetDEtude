
export function getWorkingDaysInMonth(year: number, month: number, holidays: string[]): string[] {
  const dates: string[] = [];
  const date = new Date(year, month, 1);
  const monthIndex = date.getMonth();

  while (date.getMonth() === monthIndex) {
    const day = date.getDay(); // 0 = Sunday, 6 = Saturday
    const dateStr = date.toISOString().split('T')[0]; // format 'YYYY-MM-DD'

    if (day !== 0 && day !== 6 && !holidays.includes(dateStr)) {
      dates.push(dateStr);
    }

    date.setDate(date.getDate() + 1);
  }

  return dates;
}
