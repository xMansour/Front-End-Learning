export class Point2 {
    constructor(private _x: number, private _y: number) { }
    printCoordinates() {
        console.log("This._x: " + this._x + ", This._y: " + this._y);
    }
    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }


    set x(value: number) {
        this._x = value;
    }

    set y(value: number) {
        this._y = value;
    }
}