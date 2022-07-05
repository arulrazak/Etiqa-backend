import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    username:string;

    @IsNotEmpty()
    email:string;

    @IsNotEmpty()
    phone:string;

    @IsNotEmpty()
    skills:[];

    @IsNotEmpty()
    hobbies:[];

}
