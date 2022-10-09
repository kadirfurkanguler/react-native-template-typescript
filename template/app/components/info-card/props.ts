export interface InfoCardProps {
  header: Header;
  contents: Content[];
}

interface Header {
  key: string;
  value: string;
}
export interface Content {
  title: string;
  content: string;
  icon: string;
}
