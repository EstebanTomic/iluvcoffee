import { Module, Scope } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { Event } from '../events/entities/event.entity';
import { COFFEE_BRANDS } from './coffees.constants';
import { Connection } from 'typeorm';
import { ConfigModule } from '@nestjs/config';
import coffeesConfig from './config/coffees.config';

//export class MockCoffeesService { }

//class ConfigService {}
//class DevelopmentConfigService {}
//class ProductionConfigService {}

@Module({
    imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event]), ConfigModule.forFeature(coffeesConfig)],
    controllers: [CoffeesController],
    //providers: [CoffeesService],
    //providers:  [ { provide: CoffeesService, useValue: new MockCoffeesService() }],
    providers: [
        CoffeesService,
        {
            provide: COFFEE_BRANDS,
            useFactory: () => ['buddy brew', 'nescafe'],
            scope: Scope.TRANSIENT // 👈
        },
        //{ provide: ConfigService, useClass: process.env.NODE_ENV === 'development' ? DevelopmentConfigService : ProductionConfigService,} 
    ],
    exports: [CoffeesService],
})
export class CoffeesModule { }
