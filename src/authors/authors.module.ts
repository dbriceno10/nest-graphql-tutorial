// Importa el decorador @Module de '@nestjs/common'
import { Module } from '@nestjs/common';
// Importa el módulo TypeOrmModule de '@nestjs/typeorm'
import { TypeOrmModule } from '@nestjs/typeorm';
// Importa la entidad Author
import { Author } from './entities/author.entity';
// Importa el resolver AuthorsResolver
import { AuthorsResolver } from './authors.resolver';
// Importa el servicio AuthorsService
import { AuthorsService } from './authors.service';

@Module({
  // Importa el módulo TypeOrmModule configurado con la entidad Author
  imports: [TypeOrmModule.forFeature([Author])],
  // Proveedores del módulo: AuthorsResolver y AuthorsService
  providers: [AuthorsResolver, AuthorsService],
  // Exporta el servicio AuthorsService para que pueda ser utilizado en otros módulos
  exports: [AuthorsService],
})
// Define la clase AuthorsModule como un módulo de NestJS
export class AuthorsModule {}
