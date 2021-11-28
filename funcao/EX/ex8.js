function pont(reg) {
    let r = 0
    let pior = regNumber[0]
    let jogoPior

    regNumber = reg.split(" ").map(function (x) {
        return parseInt(x)
    })

    for (const y in regNumber) {
        if (regNumber[y] > regNumber[y - 1]) {
            r++
        } if (regNumber[y] < pior) {
            pior = regNumber[y]
            jogoPior = parseInt(y) + 1
        }

    }

    return [r, jogoPior]
}

console.log(pont("10 20 20 8 25 3 0 30 1 40 50 60"))