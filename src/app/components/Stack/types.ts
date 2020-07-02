export interface Container {
  id: string;
  name: string;
  version: string;
  status: 'running' | 'warning' | 'error';
  error?: string;
}
