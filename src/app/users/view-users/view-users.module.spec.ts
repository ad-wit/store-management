import { ViewUsersModule } from './view-users.module';

describe('ViewUsersModule', () => {
  let viewUsersModule: ViewUsersModule;

  beforeEach(() => {
    viewUsersModule = new ViewUsersModule();
  });

  it('should create an instance', () => {
    expect(viewUsersModule).toBeTruthy();
  });
});
