import { PartialType } from '@nestjs/mapped-types';
import { CreateKeyboardDto } from './create-keyboard.dto';

export class UpdateKeyboardDto extends PartialType(CreateKeyboardDto) {}
