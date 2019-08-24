import { NgModule } from '@angular/core';

import { FrontEndSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [FrontEndSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [FrontEndSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class FrontEndSharedCommonModule {}
