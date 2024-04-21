import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreateStaffDto } from "../staff/dto/create-staff.dto";

@ApiTags("Authorization")
@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("signup")
  async sinUp(@Body() createstuffDto: CreateStaffDto) {
    return this.authService.singUp(createstuffDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post("signin")
  async signin(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}
