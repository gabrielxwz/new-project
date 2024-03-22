import { Body, Controller, Get, Patch, Post, Put } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-users.dto";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {}
    // Criamos o CRUD
    @Post()
    create(@Body() data: CreateUserDTO) {
        return this.usersService.create(data)
    }

    @Get()
    async read() {
       return this.usersService.list()
   }

   @Get(':id')
   async readOne(@Param('id, ParseIntPipe) id: number) ') {
    return this.usersService.show(id)

   }

    // @Put()
    // update() 

    // @Patch()
    // updatePartial()

    // @Delete()
    // delete()

}