import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/pt-br';

export const useFormatData = (data: string): string => {
  dayjs.extend(relativeTime);
  dayjs.locale('pt-br');

  function customRelativeTime(date: any) {
    const now = dayjs();
    const diffInHours = now.diff(date, 'hour');
    const diffInDays = now.diff(date, 'day');

    if (diffInHours < 24 && now.date() === date.date()) {
      return 'hoje';
    } else if (diffInHours < 48) {
      return '1 dia atrás';
    } else if (diffInDays < 7) {
      return `${diffInDays} dias atrás`;
    } else if (diffInDays < 14) {
      return '1 semana atrás';
    } else if (diffInDays < 30) {
      return `${Math.floor(diffInDays / 7)} semanas atrás`;
    } else if (diffInDays < 60) {
      return '1 mês atrás';
    } else if (diffInDays < 365) {
      return `${Math.floor(diffInDays / 30)} meses atrás`;
    } else {
      return `${Math.floor(diffInDays / 365)} anos atrás`;
    }
  }

  return customRelativeTime(data);
}

// export const useFormatData = (date: string): string => {
//   dayjs.locale('pt-br');
//   return dayjs(date).format('DD [de] MMMM [de] YYYY');
// }
