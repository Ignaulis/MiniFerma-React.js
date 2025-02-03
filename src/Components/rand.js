export const randNum = () => {
    return Math.floor(Math.random() * 21) + 5;
}
export const randId = (type) => {
    const prefix = type === 'Karves' ? 'K' : 'A';
    const random = Math.floor(Math.random() * 1000000);
    return prefix + random.toString().padStart(7, '0');
}