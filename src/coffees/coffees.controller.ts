import { Controller, Get, Param, Post, Body, Patch, Delete, Query } from '@nestjs/common';
import { type } from 'os';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
    constructor(private readonly coffeeService: CoffeesService) {}

    @Get()
    findAll(@Query() paginationQuery) {
        const { limit, offset } = paginationQuery;
        return this.coffeeService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        console.log(typeof id);
        return this.coffeeService.findOne('' + id);
      //return `This action returns #${id} coffee`;
    }

    @Post()
    create(@Body() createCoffeeDto: CreateCoffeeDto){
        console.log(createCoffeeDto instanceof CreateCoffeeDto);
        return this.coffeeService.create(createCoffeeDto);
        // return `This action returns #${id} coffee`;
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
      return this.coffeeService.update(id, updateCoffeeDto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.coffeeService.remove(id);
    }
}
