import moment from 'moment'

export const dateFormat = (date) => { 
    return moment(date).format('dddd DD-MM-yyyy')
}