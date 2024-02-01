import { PartialType } from '@nestjs/mapped-types';
import { CreateButtonDto } from './create-button.dto';

export class UpdateButtonDto extends PartialType(CreateButtonDto) {}
