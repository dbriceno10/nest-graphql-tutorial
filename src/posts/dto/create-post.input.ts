import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

@InputType()
export class CreatePostInput {
  @MinLength(3, { message: 'Title is too short' })
  @MaxLength(10, { message: 'Title is too long' })
  @IsNotEmpty({
    message: 'Title is required',
  })
  @Field()
  title: string;

  @MaxLength(255)
  @Field({ nullable: true })
  content: string;
}
