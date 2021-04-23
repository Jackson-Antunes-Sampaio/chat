import {Request, Response} from "express";
import { SettingService } from "../services/SettingsService";




class SettingsController {

    async create(request: Request, response: Response){

        const {chat, username} = request.body;
        const settingsService = new SettingService();

        try{

            const settings = await settingsService.create({chat, username});
            return response.json(settings);

        }catch(e){
            return response.status(400).json({
                message : e.message
                
            })
        }
    

    
    }

    async findByUserName(request: Request, response: Response){
        const {username} = request.params;

        const settingsService = new SettingService();

        const settings = await settingsService.findByUserName(username);

        return response.json(settings);

    }


    async update(request: Request, response: Response){
        const {username} = request.params;
        const {chat} = request.body;

        const settingsService = new SettingService();

        const settings = await settingsService.update(username, chat);

        return response.json(settings);

    }

}

export {SettingsController}