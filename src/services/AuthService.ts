import AuthRepository from "@src/repositories/AuthRepository";

class AuthService {
    private authRepository:AuthRepository;

    constructor(){
        this.authRepository = new AuthRepository()
    }

    createUser(payload: any) {
        this.authRepository.createUserAccount(payload)
    }
}

export default AuthService;