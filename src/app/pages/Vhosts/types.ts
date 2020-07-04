export interface Vhost {
  id: string;
  project: string;
  path: string;
  config_path: string;
  custom_config_path?: string;
  initial_error?: string;
  domain: string;
}

export interface ErrorTemplate {
  missing_vhost_dir: string;
  missing_dns_record: string;
}

export interface VhostsStateData {
  vhosts: Vhost[];
  global_config_path: string;
  tld_suffix: string;
  vhost_dir: string;
  error_templates: ErrorTemplate;
}

interface VhostsState extends VhostsStateData {
  __meta: {
    fetch: 'unstarted' | 'started' | 'done';
  };
  error?: string;
}

export type ContainerState = VhostsState;
