// Constants
const OPERATORS = {
    SUM: '+',
    SUB: '-',
    DIV: '÷',
    MUL: 'x',
    EQU: '='
}

// Obtain the right token for every symbol
const operatorsSymbols = new Map();
operatorsSymbols.set('+', '+');
operatorsSymbols.set('-', '-');
operatorsSymbols.set('x', '*');
operatorsSymbols.set('÷', '/');


const EXTRAOPERATORS = {
    PERCENTAGE: '%',
    CHANGESIGN: '+/-',
}

// const extraOperatorsSymbols = new Map();
// extraOperatorsSymbols.set('%', '/100');
// extraOperatorsSymbols.set('+/-', '');