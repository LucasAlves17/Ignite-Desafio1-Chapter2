import { User } from '../../model/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      const error = {
        code: '400',
        message: 'User not found!',
      };

      throw error;
    }

    if (!user.admin) {
      const error = {
        code: '400',
        message: 'Access denied, the informed user is not admin!',
      };

      throw error;
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
