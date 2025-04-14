import React, { FC } from "react";
import type { TreeNode } from "../types/TreeNode";

interface TreeProps {
  data: TreeNode;
  depth?: number;
}


export const Tree: FC<TreeProps> = ({ data, depth = 0 }) => {
  return (
    <div style={{ paddingLeft: depth * 16 }}>
      <div>{data.value}</div>
      {data.children?.map(child => (
        <Tree key={child.id} data={child} depth={depth + 1} />
      ))}
    </div>
  );
};
