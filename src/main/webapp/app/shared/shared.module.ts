import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FrontEndSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [FrontEndSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [FrontEndSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FrontEndSharedModule {
  static forRoot() {
    return {
      ngModule: FrontEndSharedModule
    };
  }
}
