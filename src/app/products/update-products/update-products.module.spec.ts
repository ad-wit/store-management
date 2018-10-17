import { UpdateProductsModule } from './update-products.module';

describe('UpdateProductsModule', () => {
  let updateProductsModule: UpdateProductsModule;

  beforeEach(() => {
    updateProductsModule = new UpdateProductsModule();
  });

  it('should create an instance', () => {
    expect(updateProductsModule).toBeTruthy();
  });
});
