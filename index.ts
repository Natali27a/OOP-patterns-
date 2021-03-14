class Accumulate {
    private total: number = 0;

    add(num: MyNumber){
        this.total += num.getNumber();
    }

    logTotal(){
        console.log(this.total)
    }
}

class MyNumber{
    protected value: number;

    constructor(value: number) {
        this.value = value;
    }

    getNumber(){
        return this.value;
    }
}

class MyString{
    protected value: string;

    constructor(value: string) {
        this.value = value;
    }

    getString(){
        return this.value;
    }
}

class MyStringNumberAdapter extends MyNumber{
    constructor(value: MyString) {
        if(!isNaN(Number(value.getString())))
            super(Number(value.getString()));
        else
            throw new Error("Wrong input value");
    }
}

let calculator = new Accumulate();
let number5 = new MyNumber(5);
let string6 = new MyString("654");
let stringAdapter6 = new MyStringNumberAdapter(string6)
calculator.add(stringAdapter6);
calculator.add(number5);
calculator.logTotal();