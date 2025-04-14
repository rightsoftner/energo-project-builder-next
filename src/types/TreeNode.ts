export interface TreeNode<T = string> {
    id: string;
    value: T;
    children?: TreeNode<T>[];
  }
  