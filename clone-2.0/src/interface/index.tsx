interface Button {
  btnClass?: string; //Il punto di domanda sta a significare che il campo è opzionale
  title: string;
  onClick?: () => void;
}

interface GithubAuth {
  clientId: string;
  clientSecret: string;
}
