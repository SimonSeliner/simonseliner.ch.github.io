export interface Paragraph {
  spanItems: SpanItem[];
}

export interface SpanItem {
  text: string;
  link: string | null;
}
