export interface Speaker {
  id: number;
  name: string;
  initial: string;
  role: string;
  description: string;
  photourl: string;
}

export interface ScheduleItem {
  id: number;
  time: string;
  speaker: string;
  topic: string;
}