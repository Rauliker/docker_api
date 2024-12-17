import { CreateUserDto, UpdateUserDto } from './user.dto';
import { UserService } from './users.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(createUserDto: CreateUserDto): Promise<import("./users.entity").User>;
    updateUser(email: string, updateUserDto: UpdateUserDto): Promise<import("./users.entity").User>;
    findAllUsers(): Promise<import("./users.entity").User[]>;
    findOneUser(email: string): Promise<import("./users.entity").User>;
    login({ email, password }: {
        email: string;
        password: string;
    }): Promise<import("./users.entity").User>;
    delete(email: string): Promise<void>;
}
