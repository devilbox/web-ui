export interface Network {
  docker_name: string;
  hostname: string;
  ip: string;
}

export interface Mount {
  docker_name: string;
  host_path: string;
  docker_path: string;
}

export interface Port {
  id: string;
  docker_name: string;
  host_port: string[];
  docker_port: string[];
}

export interface ContainerStatusConnection {
  error?: string;
  hostname: string;
  success: boolean;
}

export interface ContainerStatus {
  available: boolean;
  connection: ContainerStatusConnection[];
}

export interface ContainerInitial {
  id: string;
}

export interface Service {
  id: string;
  name: string;
  hostnames: string[];
}

export interface Container extends ContainerInitial {
  default_name: string;
  name: string;
  is_running: boolean;
  stack: string;
  status: ContainerStatus;
  version: string;
  services: Service[];
}

export interface Stack {
  id: string;
  text: string;
}

export interface Tool {
  id: string;
  name: string;
  version?: string;
}

export interface Setting {
  setting: string;
  value: string;
}

export interface DockerStateData {
  stacks: Stack[];
  containers: (ContainerInitial | Container)[];
  networking: Network[];
  mounts: {
    data: Mount[];
    config: Mount[];
    log: Mount[];
  };
  ports: Port[];
  tools: Tool[];
  settings: Setting[];
}

interface AppState extends DockerStateData {
  __meta: {
    fetch: 'unstarted' | 'started' | 'done';
  };
  error?: string;
}

export type ContainerState = AppState;
