import { IsEmpty, IsIn, IsString } from 'class-validator';

export class CreateTicketDto {
  @IsString()
  @IsEmpty()
  subject: string;
  @IsString()
  @IsEmpty()
  description: string;
  @IsIn(['low', 'medium', 'high'])
  priority: 'low' | 'medium' | 'high';
}
