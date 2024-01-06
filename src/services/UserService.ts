import UserRepository from "@src/repositories/UserRepository";

class UserService {
    private userRepository:UserRepository;

    constructor(){
        this.userRepository = new UserRepository()
    }

    getUser({ phoneNumber }: any, callback: any) {
        this.userRepository.getUserAccount({phoneNumber}, (res: any) => {
            callback(res)
        });
    }

    getAllUser(callback: any) {
        this.userRepository.getAllUserAccount((res: any) => {
            callback(res)
        })
    }
}

export default UserService;