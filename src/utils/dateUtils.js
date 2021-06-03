function unixToISO(timestamp) {
  let date = new Date(timestamp),
    year = date.getFullYear(),
    month = date.getMonth() + 1,
    day = date.getDate()

  if (month.toString().length < 2) {
    month = '0' + month
  }
  if (day.toString().length < 2) {
    day = '0' + day
  }

  return [year, month, day].join('-')
}

function formatDateToLanguage(formatedDate) {
  const date = new Date(`${formatedDate} 00:00:00`)
  const MONTHS = {
    0: 'Enero',
    1: 'Febrero',
    2: 'Marzo',
    3: 'Abril',
    4: 'Mayo',
    5: 'Junio',
    6: 'Julio',
    7: 'Agosto',
    8: 'Septiembre',
    9: 'Octubre',
    10: 'Noviembre',
    11: 'Diciembre',
  }
  const languageDate = date.getDate() + ' de ' + MONTHS[date.getMonth()]
  return languageDate
}

export { unixToISO, formatDateToLanguage }
