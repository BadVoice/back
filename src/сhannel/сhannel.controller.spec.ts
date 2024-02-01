import { Test, TestingModule } from '@nestjs/testing';
import { СhannelController } from './сhannel.controller';
import { СhannelService } from './сhannel.service';

describe('СhannelController', () => {
  let controller: СhannelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [СhannelController],
      providers: [СhannelService],
    }).compile();

    controller = module.get<СhannelController>(СhannelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
