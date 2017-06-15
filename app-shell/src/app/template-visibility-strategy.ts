export interface DirectiveNodes {
  [marker: string]: any[];
};

export abstract class TemplateVisibilityStrategy {
  protected _rootNodes: DirectiveNodes = {};

  abstract show(marker: string): void;
  abstract hide(marker: string): void;

  setRootNodes(marker: string, ...rootNodes: any[]) {
    const nodes = this._rootNodes[marker] || [];
    this._rootNodes[marker] = nodes.concat(rootNodes);
  }
}
