export interface Menu {
  heading: string;
  icon?: string;
  link?: string;
  pages?: SubMenu[];
}

export interface SubMenu {
  heading: string;
  icon?: string;
  link?: string;
}
