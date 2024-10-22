class snake {
    constructor(size) {
        if(isNaN(size)){
            throw new Error("Given Snake size is not a number! *confused* Sssss *confused*");
        }
        size = Math.round(size)
        if (size < 10 || size > 30){
            throw new Error("Given Snake size is just not right!");
        }
        this._snakeSize=size;
    }

    get snakeSize(){
        return this._snakeSize;
    }

    set snakeSize(ssize){
        if(isNaN(ssize)){
            throw new Error("Given Snake size is not a number! *confused* Sssss *confused*");
        }
        ssize = round(ssize)
        if (ssize < 10 || ssize > 30){
            throw new Error("Given Snake size is just not right!");
        }
        this._snakeSize=ssize;
    }
}


export {snake};