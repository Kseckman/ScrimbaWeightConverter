const conversions = {
    kg: {
        lb:2.2,
        oz: 35.274,
        st: 0.157
    },
    lb: {
        kg: 0.454
    }
}

const fromInput = document.getElementById('metric-input')
const toInput = document.getElementById('imperial-input')

fromInput.addEventListener('input', convert)
console.log(fromInput.value)


function convert() {
    const amounts = {from: 'kg', to:'lb', amount: fromInput.value};
    const multiplier = conversions[amounts.from][amounts.to];
    toInput.value = amounts.amount * multiplier;
}