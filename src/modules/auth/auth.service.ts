import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { McrudService } from 'src/helpers/mcrud/mcrud.service';
@Injectable()
export class AuthService {
    constructor(public mcrud: McrudService,
            public jwtService:JwtService
    ) { }

    async login(postdata: any) {
        try {
            const { userName, password } = postdata
            const user = await this.mcrud.get(null, 'Users')
            console.log(user);

            await this.sigin(password, user)
            return {
                  access_token: this.jwtService.sign(user),
            };
        } catch (error) {
            throw error
        }
    }

    async CreateUser(postData:any){
        try {
            let password;
            const {firstName,lastName,usrName,pass,repPass,role}=postData
            if(pass===repPass){
                 password=this.encryptPass(pass)
            }
            await this.mcrud.create('Users',{firstName,lastName,usrName,password,role})
        } catch (error) {
            throw error
        }
    }

    private async sigin(password, user) {
        try {
            const match = await bcrypt.compare(password, user.password);
            return match ? user : null;
        } catch (error) {
            throw error
        }
    }

    private async encryptPass(password) {
        try {
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(password, saltRounds);
            return hashedPassword
        } catch (error) {
            throw error
        }
    }
}
