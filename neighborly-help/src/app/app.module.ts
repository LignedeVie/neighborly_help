import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { NgZorroAntdModule, NZ_I18N, pl_PL } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import pl from '@angular/common/locales/pl';
import { FirebaseModule } from './firebase/firebase.module';
import { FirestoreTaskService } from './firebase/firestore/services/firestore-task.service';
import { TaskApi } from './api/task-api';
import { FirestoreAppUserService } from './firebase/firestore/services/firestore-app-user.service';
import { AppUserApi } from './api/app-user-api';

registerLocaleData(pl);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FirebaseModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: pl_PL },
    { provide: TaskApi, useClass: FirestoreTaskService },
    { provide: AppUserApi, useClass: FirestoreAppUserService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
