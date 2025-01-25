import { Injectable } from '@nestjs/common';
import { CreateAuthorInput } from './dto/create-author.input';
import { UpdateAuthorInput } from './dto/update-author.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Author } from './entities/author.entity';

@Injectable()
export class AuthorsService {
  constructor(
    @InjectRepository(Author) private authorRepository: Repository<Author>,
  ) {}

  create(createAuthorInput: CreateAuthorInput) {
    // /**
    //  * Crea un nuevo autor en el repositorio.
    //  *
    //  * @param createAuthorInput - Los datos necesarios para crear un nuevo autor.
    //  * @returns El autor creado y guardado en el repositorio.
    //  */
    const autor = this.authorRepository.create(createAuthorInput);
    return this.authorRepository.save(autor);
  }

  findAll() {
    return this.authorRepository.find();
  }

  async findOne(id: number): Promise<Author> {
    const author = await this.authorRepository.findOne({ where: { id } });
    if (!author) {
      throw new Error('Author not found');
    }
    return author;
  }

  update(id: number, updateAuthorInput: UpdateAuthorInput) {
    return `This action updates a #${id} author`;
  }

  remove(id: number) {
    return `This action removes a #${id} author`;
  }
}
