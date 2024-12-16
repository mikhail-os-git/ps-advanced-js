function dice(dnum) {
    const supportedDice = [4, 6, 8, 10, 12, 16, 20];

    if (!dnum.startsWith('d')) {
        return 'У цифры должен быть префикс "d" в начале';
    }

    const num = Number(dnum.replace('d', ''));

    if (!supportedDice.includes(num)) {
        return 'Поддерживаются только D4, D6, D8, D10, D12, D16 и D20';
    }

    return Math.floor(Math.random() * num) + 1;
}

console.log(dice('d12'));
console.log(dice('d20')); 