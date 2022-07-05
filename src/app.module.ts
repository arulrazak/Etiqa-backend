import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [UserModule,ConfigModule.forRoot({
    isGlobal: true, // no need to import into other modules
  }),
  MongooseModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (config: ConfigService) => ({
      uri: config.get('DB_URL'),
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    }),
  }), ],
controllers: [AppController],
providers: [AppService],
})
export class AppModule {}
