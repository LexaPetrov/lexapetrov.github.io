export const getAge = () => {
    let bday = new Date(1997, 1, 24);

    let now = new Date();
    let diff = now - bday;

    let milliseconds = diff;
    let seconds = milliseconds / 1000;
    let minutes = seconds / 60;
    let hours = minutes / 60;
    let days = hours / 24;
    let years = days / 365.25

    return `${years}`
}