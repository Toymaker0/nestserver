import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() postData:any ){
    try {
      this.authService.login(postData)
    } catch (error) {
      throw error
    }
  }

  @Post('createUser')
  async createUser(@Body() PostData:any){
    try {
        this.authService.CreateUser(PostData)
    } catch (error) {
      throw error
    }
  }
}
