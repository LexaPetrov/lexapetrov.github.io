export const getAge = () => {
    let now = new Date();
    let birthday = new Date(1997, 1, 24);
    let diff = now.getFullYear() - birthday.getFullYear();
    if (now.getMonth() < 1) {
        if (now.getDay() < 23) {
            (diff -= 1)
        }
    }

    // let date1 = new Date()
    // let date2 = new Date(`2-24-${now.getFullYear()}`);

    // let daysLag = Math.ceil(
    //     Math.abs(date2.getTime() - date1.getTime()) * 1000 // микросекунды / (1000 * 3600 * 24)
    // )

    return `${diff}`
}