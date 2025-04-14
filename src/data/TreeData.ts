import React from "react";
import { Tree } from "../components/Tree";
import type { TreeNode } from "../types/TreeNode";

export const treeData: TreeNode = {
    id: "root",
    value: "Root",
    children: [
      {
        id: "child-1",
        value: "Child 1",
        children: [
          { id: "g1", value: "Grandchild 1" },
          { id: "g2", value: "Grandchild 2" },
        ],
      },
      {
        id: "child-2",
        value: "Child 2",
      },
    ],
  };