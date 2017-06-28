// 获取文件夹的日期
function formatFullDate() {
    const date = new Date()
    const year = date.getFullYear()
    const month = addZero(date.getMonth() + 1)
    const day = addZero(date.getDate())
    const hour = addZero(date.getHours())
    const min = addZero(date.getMinutes())
    const sec = addZero(date.getSeconds())
    return year + month + day + hour + min + sec
}

// 把不足2位的日期前加0
function addZero(val) {
    if (typeof val === 'number') {
        return val < 10 ? '0' + val : val
    } else {
        throw new Error('arguments is not number')
    }
}
module.exports = {
    formatFullDate
}