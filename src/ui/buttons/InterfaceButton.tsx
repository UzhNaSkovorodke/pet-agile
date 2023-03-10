export interface IButton {
  children: JSX.Element | JSX.Element[] | string | string[];
  fontSize: string;
  buttonHandleFunc: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
