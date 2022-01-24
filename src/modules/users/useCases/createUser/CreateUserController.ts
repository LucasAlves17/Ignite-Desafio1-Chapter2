import { Response, Request } from 'express';

import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, email } = request.body;

    try {
      const newUser = this.createUserUseCase.execute({ name, email });

      return response.status(201).send(newUser);
    } catch (error) {
      return response.status(500).json({ message: error.message });
    }
  }
}

export { CreateUserController };
