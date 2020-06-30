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

export interface AppStateData {
  devilbox_version: string;
  container_ids: string[];
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
