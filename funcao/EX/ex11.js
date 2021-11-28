function eBissexto(ano){
    if (ano%4==0 & ano % 100 !=0 || ano%400 ==0) {
        return true
    } else {
        return false
    }
}

console.log(eBissexto(1983))


const bix = y => y%4==0 & y % 100 !=0 || y%400 ==0

console.log(bix(2000))

let anni = [2000, 2004, 2003, 2012, 2016, 2020, 2024, 2028, 2032, 2036, 2040, 2044, 2048, 2052, 2056, 2060]

// for (const i in anni) {
//     console.log(eBissexto(anni[i]))
// }