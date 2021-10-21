import { Controller, Get, Param, Post, Body, Patch, Delete, Query, Inject, UsePipes, ValidationPipe } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
    constructor(
      private readonly coffeeService: CoffeesService, 
      @Inject(REQUEST) private readonly request: Request) {
      console.log('CoffeesController Created' + request);
    }

    @Get()
    findAll(@Query() paginationQuery: PaginationQueryDto) {
        const { limit, offset } = paginationQuery;
        return this.coffeeService.findAll(paginationQuery);
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
    update(@Param('id') id: string, @Body(ValidationPipe) updateCoffeeDto: UpdateCoffeeDto) {
      return this.coffeeService.update(id, updateCoffeeDto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.coffeeService.remove(id);
    }
}
