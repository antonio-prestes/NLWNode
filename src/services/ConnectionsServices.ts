
import {getCustomRepository, Repository} from "typeorm";
import { ConnectionsRepository} from "../repositories/ConnectionsRepository";
import {Connection} from "../entities/Connection";

interface IConnectionCreate{
    socket_id: string;
    user_id: string;
    admin_id?: string;
    id?: string
}

class ConnectionsServices {
    private connectionsRepository: ConnectionsRepository;

    constructor() {
        this.connectionsRepository = getCustomRepository(ConnectionsRepository)
    }

    async create({ socket_id, user_id, admin_id, id}: IConnectionCreate){
        const connection = this.connectionsRepository.create({
            socket_id,
            user_id,
            admin_id,
            id
        })
        await this.connectionsRepository.save(connection);
    }
}


export { ConnectionsServices }