export interface NetworkItem {
  docker_name: string;
  host_name: string;
  ip: string;
}

export interface MountItem {
  docker_name: string;
  host_path: string;
  docker_path: string;
}

export interface PortItem {
  docker_name: string;
  host_port: string;
  docker_port: string;
}

export interface SettingsItem {
  id: string;
  url: string;
  text: string;
}

export interface ContainerStatusConnectionItem {
  error?: string;
  hostname: string;
  success: boolean;
}

export interface ContainerStatusItem {
  available: boolean;
  connection: ContainerStatusConnectionItem[];
}

export interface ContainerItemInitial {
  id: string;
}

export interface ContainerItem extends ContainerItemInitial {
  default_name: string;
  name: string;
  is_running: boolean;
  stack: string;
  status: ContainerStatusItem;
  version: string;
}

export interface StackItem {
  id: string;
  text: string;
}

export interface AppStateData {
  versions: {
    core: string;
    ui: string;
  };
  stacks: StackItem[];
  containers: (ContainerItemInitial | ContainerItem)[];
  networking: NetworkItem[];
  mounts: {
    data: MountItem[];
    config: MountItem[];
    log: MountItem[];
  };
  ports: PortItem[];
  settings: {
    databases: SettingsItem[];
    infos: SettingsItem[];
    tools: SettingsItem[];
  };
}

interface AppState extends AppStateData {
  loading: boolean;
  error?: string;
}

export type ContainerState = AppState;
