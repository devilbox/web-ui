import { ContainerState as AppState } from 'app/types';
import { ContainerState as DockerState } from 'app/pages/Home/types';

export default interface RootState {
  app: AppState;
  docker: DockerState;
}
