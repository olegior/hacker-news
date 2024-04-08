import moment from 'moment';
import 'moment/locale/ru';

moment.locale()

export const toDate = (time: number, small?: boolean): string => {
    const format = small ? 'lll' : 'llll'
    return moment(time * 1000).format(format)
}