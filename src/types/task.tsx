export type tag = 'Work' | 'College' | 'Study' | 'Personal';

export type task = {
  id: number;
  title: string;
  task: string;
  tag: tag;
};
