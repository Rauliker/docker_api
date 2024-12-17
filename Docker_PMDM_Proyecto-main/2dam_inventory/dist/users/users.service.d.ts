import { FirebaseService } from 'src/firebase/firebase_service';
import { Localidad } from 'src/localidad/localidad.entity';
import { Provincia } from 'src/provincia/provinvia.entity';
import { Repository } from 'typeorm';
import { CreateUserDto, UpdateUserDto } from './user.dto';
import { User } from './users.entity';
export declare class UserService {
    private userRepository;
    private readonly localidadRepository;
    private readonly provinciaRepository;
    private readonly firebaseService;
    constructor(userRepository: Repository<User>, localidadRepository: Repository<Localidad>, provinciaRepository: Repository<Provincia>, firebaseService: FirebaseService);
    createUser(createUserDto: CreateUserDto): Promise<User>;
    updateUser(email: string, updateUserDto: UpdateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(email: string): Promise<User>;
    login(email: string, password: string): Promise<User>;
    deleteUser(email: string): Promise<void>;
}
