import { ExcludeMaybe } from '@app/core/types/ExcludeMaybe';
import { GQL_ResolversParentTypes, Maybe } from 'graphql-resolvers';
import { FieldNode, InlineFragmentNode } from 'graphql';

type ValidNodeType = ExcludeMaybe<GQL_ResolversParentTypes['Node']['__typename']>;
export function getNodeType(fieldNode: Maybe<FieldNode>): ValidNodeType | null {
  if (!fieldNode?.selectionSet) {
    return null;
  }

  const selection = fieldNode.selectionSet.selections.find((x) => x.kind === 'InlineFragment');
  if (!selection) {
    return null;
  }

  const inlineFragmentNode = selection as InlineFragmentNode;
  if (!inlineFragmentNode.typeCondition) {
    return null;
  }

  return inlineFragmentNode.typeCondition.name.value as ValidNodeType;
}
