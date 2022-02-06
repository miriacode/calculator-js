class MemoryOperations{
    constructor(){
        this.storedNumber = 0;
    }

    update(storedNumberr){
        this.storedNumber = storedNumberr;
    }

    addToMemory(number){
        //M+
        if(this.storedNumber==0){
            this.storedNumber = parseFloat(number);
            console.log('s')
        }else{
            this.storedNumber += parseFloat(number);
        }
        console.log(this.storedNumber)
    }

    substractFromMemory(number){
        //M-
        this.storedNumber -= number;
    }

    recallMemory(){
        //MR
        console.log(this.storedNumber)
        return this.storedNumber;
    }

    clearMemory(){
        //MC
        this.storedNumber = 0;
        return this.storedNumber;
    }


}