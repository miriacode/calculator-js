// Constants
const OPERATORS = {
    SUM: '+',
    SUB: '-',
    DIV: '÷',
    MUL: 'x',
    EQU: '=',
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
    RESET: 'AC',
    DELETE: '',
}

const MEMORYOPERATORS = {
    MEMORYADD: 'M+',
    MEMORYSUBSTRACT: 'M-',
    MEMORYRECALL: 'MR',
    MEMORYCLEAR: 'MC',
}