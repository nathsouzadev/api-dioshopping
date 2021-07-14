import { getCustomRepository } from "typeorm";
import { MessagesRepository } from "../repository/MessagesRepository";

class ListMessageService{
    async execute(){
        const messageRepository = getCustomRepository(MessagesRepository);

        const allMessages = await messageRepository.find();

        return allMessages
    }
}

export { ListMessageService }
