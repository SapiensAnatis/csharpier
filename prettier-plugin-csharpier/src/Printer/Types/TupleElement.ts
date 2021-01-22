import { PrintMethod } from "../PrintMethod";
import { HasIdentifier, printPathSyntaxToken, SyntaxTreeNode } from "../SyntaxTreeNode";
import { concat, group, hardline, indent, join, softline, line, doubleHardline } from "../Builders";

export interface TupleElementNode extends SyntaxTreeNode<"TupleElement">, HasIdentifier {
    type: SyntaxTreeNode;
}

export const printTupleElement: PrintMethod<TupleElementNode> = (path, options, print) => {
    return path.call(print, "type");
};
