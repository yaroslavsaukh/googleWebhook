import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateRowDto {
  @ApiProperty({ example: 'Row content', description: 'Зміст рядка' })
  @IsString()
  @IsNotEmpty()
  content: string;
}
