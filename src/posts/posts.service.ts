import { Injectable } from '@nestjs/common';
import { Post } from './post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostInput } from './dto/create-post.input';
import { Author } from 'src/authors/entities/author.entity';
import { AuthorsService } from 'src/authors/authors.service';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
    private authorsRepository: Repository<Author>,
    private authorsService: AuthorsService,
  ) {}
  async findAll(): Promise<Post[]> {
    const posts = await this.postRepository.find();
    return posts;
  }

  async findPostById(id: number): Promise<Post> {
    const post = await this.postRepository.findOne({ where: { id } });
    if (!post) {
      throw new Error('Post not found');
    }
    return post;
  }

  createPost(post: CreatePostInput): Promise<Post> {
    const newPost = this.postRepository.create(post);
    return this.postRepository.save(newPost);
  }

  // async getAuthor(authorId: number): Promise<Author> {
  //   const author = await this.authorsRepository.findOne({
  //     where: { id: authorId },
  //   });
  //   if (!author) {
  //     throw new Error('Author not found');
  //   }
  //   return author;
  // }

  getAuthor(authorId: number): Promise<Author> {
    return this.authorsService.findOne(authorId);
  }
}
