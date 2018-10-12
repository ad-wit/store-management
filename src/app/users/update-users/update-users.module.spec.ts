import { UpdateUsersModule } from './update-users.module';

describe('UpdateUsersModule', () => {
  let updateUsersModule: UpdateUsersModule;

  beforeEach(() => {
    updateUsersModule = new UpdateUsersModule();
  });

  it('should create an instance', () => {
    expect(updateUsersModule).toBeTruthy();
  });
});
