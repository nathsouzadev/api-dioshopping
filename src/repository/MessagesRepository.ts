import { EntityRepository, Repository } from "typeorm";
import { Message } from "../entities/Messages";

@EntityRepository(Message)
class MessagesRepository extends Repository<Message> {}

export { MessagesRepository }