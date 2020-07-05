import { ContainerState as AppState } from 'app/types';
import { ContainerState as DockerState } from 'app/pages/Home/types';
import { ContainerState as VhostsState } from 'app/pages/Vhosts/types';
import { ContainerState as MailState } from 'app/pages/Mails/types';

export default interface RootState {
  app: AppState;
  docker: DockerState;
  vhosts: VhostsState;
  mails: MailState;
}
