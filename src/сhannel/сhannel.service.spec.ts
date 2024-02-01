import { Test, TestingModule } from '@nestjs/testing';
import { СhannelService } from './сhannel.service';

describe('СhannelService', () => {
  let service: СhannelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [СhannelService],
    }).compile();

    service = module.get<СhannelService>(СhannelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
