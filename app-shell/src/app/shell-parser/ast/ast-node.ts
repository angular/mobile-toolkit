export interface ASTAttribute {
  name: string;
  value: string;
}

export interface ASTNode {
  attrs: ASTAttribute[];
  childNodes?: ASTNode[];
  parentNode?: ASTNode;
  nodeName: string;
}

