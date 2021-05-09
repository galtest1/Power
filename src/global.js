export const heavyCalculation = (num = 10) => {
    for (let i = 0; i < num; i++) {
        heavyCalculation(num - 1);
    }
};
