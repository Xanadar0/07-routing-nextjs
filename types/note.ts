export interface Note {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  tag: string;
}

export interface NewNoteData {
  title: string;
  content: string;
  tag: string;
}

type Tag = "Work" | "Personal" | "Meeting" | "Shopping" | "Todo";

export interface FetchNotesValues {
  notes: Note[];
  totalPages: number;
}