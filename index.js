class Polygon{
    constructor(arr){
        for(let i = 0; i < arr.length; i++){
            this['side' + (i+1)] = arr[i];
        };
    };

    get countSides(){
        let sideCount = 0;
        for(let i=0; i<Object.keys(this).length; i++){
            sideCount ++
        };
        return sideCount;
    };

    get perimeter(){
        let perimeter = 0;
        for(let side in this){
            perimeter += this[side];
        };
        return perimeter;
    };
};

class Triangle extends Polygon{
    get isValid(){
        let count = this.countSides;

        if (count === 3){
            let side1 = this.side1;
            let side2 = this.side2;
            let side3 = this.side3;
            
            return (side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1);
        };

        return false;
    };
};

class Square extends Polygon{
    get isValid(){
        let count = this.countSides;

        if (count === 4){
            let side1 = this.side1;
            let side2 = this.side2;
            let side3 = this.side3;
            let side4 = this.side4;

            return (side1 + side2 === side3 + side4)
        };

        return false;
    };

    get area(){
        return this.side1 * this.side2;
    };
};




