interface IChatField {
  sendMessage: (message: string) => Promise<void>;
}

interface IChatFormState {
  message: string;
}

export type {IChatField, IChatFormState};
