import { IsNotEmpty } from "class-validator"

export class CustomerAddressDto {
    @IsNotEmpty()
    line1:string

    line2?:string

    @IsNotEmpty()
    zipCode:number

    @IsNotEmpty()
    city:string

    @IsNotEmpty()
    state:string

}