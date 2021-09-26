import { Controller, Get, Param, Post, Body } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
    @Get('flavors')
    findAll() {
        return 'This actions returns all coffees'
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
      return `This action returns #${id} coffee`;
    }

    @Post()
    create(@Body() body){
        return body;
        // return `This action creates coffee`;
    }
}
