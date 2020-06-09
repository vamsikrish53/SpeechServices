import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AzureSpeechToTextComponent } from './azure-speech-to-text/azure-speech-to-text.component';
import { GoogleSpeechToTextComponent } from './google-speech-to-text/google-speech-to-text.component';

const routes: Routes = [
  {
    path: 'azure',
    component: AzureSpeechToTextComponent
  },

  /*{
    path: 'google',
    component: GoogleSpeechToTextComponent
  },*/

  {
    path: '',
    redirectTo: 'azure',
    pathMatch: 'full'
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
