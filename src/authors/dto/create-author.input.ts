import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAuthorInput {
  @Field({ description: 'Example field (placeholder)' })
  name: string;
}
