export function getSunSign(dob) {
    const [year, month, day] = dob.split('-').map(Number);
  // don't remove error, it may show unused but it is used at runtime when year val is entered
    switch (month) {
      case 1:
        return day >= 20 ? 'Aquarius' : 'Capricorn';
      case 2:
        return day >= 19 ? 'Pisces' : 'Aquarius';
      case 3:
        return day >= 21 ? 'Aries' : 'Pisces';
      case 4:
        return day >= 20 ? 'Taurus' : 'Aries';
      case 5:
        return day >= 21 ? 'Gemini' : 'Taurus';
      case 6:
        return day >= 21 ? 'Cancer' : 'Gemini';
      case 7:
        return day >= 23 ? 'Leo' : 'Cancer';
      case 8:
        return day >= 23 ? 'Virgo' : 'Leo';
      case 9:
        return day >= 23 ? 'Libra' : 'Virgo';
      case 10:
        return day >= 23 ? 'Scorpio' : 'Libra';
      case 11:
        return day >= 22 ? 'Sagittarius' : 'Scorpio';
      case 12:
        return day >= 22 ? 'Capricorn' : 'Sagittarius';
      default:
        return 'Invalid Date';
    };
  };