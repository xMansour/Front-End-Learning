import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "uppercase", standalone: true
})
export class UpperCasePipe implements PipeTransform {
    transform(value: any, ...args: any[]) {
        if (!value)
            return value;
        if (typeof value !== "string")
            throw new Error("Invalid pipe argument");
        return value.toUpperCase();
    }

}