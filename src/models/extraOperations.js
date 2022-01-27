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
        this.onlyOperand = this.onlyOperand /100;
    }

    changeTheSign(){
        if(this.onlyOperand<0){
            this.onlyOperand = Math.abs(this.onlyOperand)
        }else{
            this.onlyOperand = -this.onlyOperand
        }
    }
}