export interface Mail {
  id: string;
  date: string;
  from: string;
  to: string;
  subject: string;
  body: string;
  raw: string;
}

export interface MailStateData {
  sent: Mail[];
}

interface MailState extends MailStateData {
  __meta: {
    fetch: 'unstarted' | 'started' | 'done';
  };
  error?: string;
}

export type ContainerState = MailState;
