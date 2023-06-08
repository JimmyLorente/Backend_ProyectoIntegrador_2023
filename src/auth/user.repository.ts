import { EntityRepository, Repository } from "typeorm"; 
import { User } from "./user.entity";
import { RegisterUserDto } from "src/dto/register-user.dto";

@EntityRepository()
export class UserRepository extends Repository<User>{ 
    async createUser(registerUserDto: RegisterUserDto): Promise<void> {}
}