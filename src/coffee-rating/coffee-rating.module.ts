import { Module } from '@nestjs/common';
import { CoffeesModule } from 'src/coffees/coffees.module';
import { DatabaseModule } from 'src/database/database.module';
import { CoffeeRatingService } from './coffee-rating.service';

@Module({
  imports: [CoffeesModule,
    DatabaseModule.register({ // 👈 passing in dynamic values
      type: 'postgres',
      host: 'localhost',
      username: 'postgres', // username
      password: 'pass123', // user password
      database: 'postgres', // name of our database,
    })],
  providers: [CoffeeRatingService]
})
export class CoffeeRatingModule {}