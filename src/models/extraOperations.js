class ExtraOperations{
    constructor(){
        this.onlyOperand = 0;
    }

    setOnlyOperand(operand){
        this.onlyOperand = operand;
    }

    getOnlyOperand(){
        return this.onlyOperand;
    }

    applyPercentage(){
        return this.onlyOperand /100;
    }

    changeTheSign(){
        if(this.onlyOperand<0){
            this.onlyOperand = this.onlyOperand.abs()
        }else{
            this.onlyOperand = -this.onlyOperand
        }
    }
}