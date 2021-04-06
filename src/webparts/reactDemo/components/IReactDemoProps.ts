import {SPHttpClient} from '@microsoft/sp-http';

export interface IReactDemoProps {
  description: string;
  spHttpClient: SPHttpClient;
  currentSiteUrl: string;
}
