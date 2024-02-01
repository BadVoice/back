import { PartialType } from '@nestjs/mapped-types';
import { CreateСhannelDto } from './create-сhannel.dto';

export class UpdateСhannelDto extends PartialType(CreateСhannelDto) {}
