export interface Site {
  id: string;
  url: string;
  text: string;
}

export interface AppStateData {
  versions: {
    core: string;
    ui: string;
  };
  sites: {
    databases: Site[];
    infos: Site[];
    tools: Site[];
  };
}

interface AppState extends AppStateData {
  loading: boolean;
  error?: string;
}

export type ContainerState = AppState;
