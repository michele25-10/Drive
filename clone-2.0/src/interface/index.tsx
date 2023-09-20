interface Button {
  btnClass?: string; //Il punto di domanda sta a significare che il campo è opzionale
  title: string;
  onClick?: () => void;
}

interface AuthInterface {
  clientId: string;
  clientSecret: string;
}

interface Progress {
  progress: number;
}

interface ArrayType {
  map: Function;
}

interface FolderStructure {
  parentId: string;
}
