export default {
  firstDayOfMonth (date) {
    let [year, month, day] = getYearMonthDate(date)
    return new Date(year, month, 1)
  },
  lastDayOfMonth (date) {
    let [year, month, day] = getYearMonthDate(date)
    return new Date(year, month + 1, 0)
  },
  addMonth(date, n) {
    const [_1, month, _2] = getYearMonthDate(date)
    const newMonth = month + n
    const copy = new Date(date) // date深拷贝
    copy.setMonth(newMonth)
    return copy
  },
  addYear(date, n) {
    const [year, _1, _2] = getYearMonthDate(date)
    const newYear = year + n
    const copy = new Date(date) // date深拷贝
    copy.setFullYear(newYear)
    return copy
  },
  getYearMonthDate,
}

function getYearMonthDate(date) {
  let year = date.getFullYear()
  let month = date.getMonth()
  let day = date.getDate()
  return [year, month, day]
}
