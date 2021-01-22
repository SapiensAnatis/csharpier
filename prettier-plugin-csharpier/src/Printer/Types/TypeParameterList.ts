import { printCommaList } from "../Helpers";
import { PrintMethod } from "../PrintMethod";
import { SyntaxTreeNode } from "../SyntaxTreeNode";
import { concat, group, hardline, indent, join, softline, line, doubleHardline } from "../Builders";
import { ParameterNode } from "./Parameter";

export interface TypeParameterListNode extends SyntaxTreeNode<"TypeParameterList"> {
    parameters: ParameterNode[];
}

export const printTypeParameterList: PrintMethod<TypeParameterListNode> = (path, options, print) => {
    const node = path.getValue();
    if (node.parameters.length === 0) {
        return "";
    }

    return group(concat(["<", indent(concat([softline, printCommaList(path.map(print, "parameters"))])), ">"]));
};
