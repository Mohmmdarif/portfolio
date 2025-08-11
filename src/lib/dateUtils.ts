/**
 * Menghitung durasi antara dua tanggal dalam format bulan dan tahun
 * @param startDate - Tanggal mulai dalam format "MMM YYYY" (contoh: "Apr 2025")
 * @param endDate - Tanggal berakhir dalam format "MMM YYYY" atau "Now"
 * @returns String durasi dalam format "X Month" atau "X Year Y Month"
 */
export function calculateDuration(startDate: string, endDate: string): string {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Parse start date
  const [startMonth, startYear] = startDate.split(" ");
  const startMonthIndex = monthNames.indexOf(startMonth);
  const startYearNum = parseInt(startYear);

  // Parse end date
  let endMonthIndex: number;
  let endYearNum: number;

  if (endDate.toLowerCase() === "now") {
    const now = new Date();
    endMonthIndex = now.getMonth();
    endYearNum = now.getFullYear();
  } else {
    const [endMonth, endYear] = endDate.split(" ");
    endMonthIndex = monthNames.indexOf(endMonth);
    endYearNum = parseInt(endYear);
  }

  // Calculate total months
  let totalMonths =
    (endYearNum - startYearNum) * 12 + (endMonthIndex - startMonthIndex);

  // Adjust for current month (add 1 to include current month)
  if (endDate.toLowerCase() === "now") {
    totalMonths += 1;
  } else {
    // For fixed end dates, ensure minimum 1 month if same month
    totalMonths += 1;
  }

  // Convert to years and months
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  // Format output
  if (years === 0) {
    return `${months} Month${months !== 1 ? "s" : ""}`;
  } else if (months === 0) {
    return `${years} Year${years !== 1 ? "s" : ""}`;
  } else {
    return `${years} Year${years !== 1 ? "s" : ""} ${months} Month${
      months !== 1 ? "s" : ""
    }`;
  }
}

/**
 * Memparse string durasi menjadi tanggal mulai dan berakhir
 * @param duration - String durasi dalam format "MMM YYYY - MMM YYYY" atau "MMM YYYY - Now"
 * @returns Object dengan startDate dan endDate
 */
export function parseDurationString(duration: string): {
  startDate: string;
  endDate: string;
} {
  const parts = duration.split(" - ");
  return {
    startDate: parts[0].trim(),
    endDate: parts[1].trim(),
  };
}

/**
 * Menghitung durasi otomatis dari string durasi
 * @param duration - String durasi dalam format "MMM YYYY - MMM YYYY" atau "MMM YYYY - Now"
 * @returns String durasi yang sudah dihitung
 */
export function getAutoDuration(duration: string): string {
  const { startDate, endDate } = parseDurationString(duration);
  return calculateDuration(startDate, endDate);
}
