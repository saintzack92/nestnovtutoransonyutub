import { IsEmail, IsNumber, IsNotEmpty, MinLength, MaxLength, ValidateNested, IsNotEmptyObject } from "class-validator"
import { CustomerAddressDto } from "./CustomerAddress.dto"
import { Type } from "class-transformer"

export class CreateCustomerDto {

    @IsEmail()
    email: string

    @IsNotEmpty()
    @IsNumber()
    id: number

    @IsNotEmpty()
    @MinLength(10)
    @MaxLength  (50)
    name: string

    @IsNotEmptyObject()
    @ValidateNested()
    @Type(()=>CustomerAddressDto)
    address:CustomerAddressDto
}