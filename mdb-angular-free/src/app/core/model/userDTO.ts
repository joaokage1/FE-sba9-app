import { Role } from './role';

export class UserDTO {
    id?: string;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    enabled?: boolean;
    roles?: Array<Role>;
}
