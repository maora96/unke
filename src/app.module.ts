import { Module, ValidationPipe } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { APP_PIPE } from '@nestjs/core';
import { User } from './user/user.entity';

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      entities: [User],
      synchronize: true,
      username: process.env.PGUSER,
      password: process.env.PGPASSWORD,
      host: process.env.PGHOST.toString(),
      database: process.env.PGDATABASE,
      port: Number(process.env.PGPORT),
    }),
  ],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    },
  ],
})
export class AppModule {}
