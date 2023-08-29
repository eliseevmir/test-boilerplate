import React from 'react';
import { graphql, useFragment } from 'react-relay';

import fragmentSpec, { TemplateSecondNews$key } from '~/relay/artifacts/TemplateSecondNews.graphql';
import ContentBlockLexical from '~/components/ContentBlock/ContentBlockLexical';

interface TemplateSecondContentProps {
  readonly fragmentRef: TemplateSecondNews$key | null;
}

const TemplateSecondContent: React.FC<TemplateSecondContentProps> = props => {
  const { fragmentRef } = props;
  const fragment = useFragment(fragmentSpec, fragmentRef);

  if (!fragment || !fragment.news) {
    return null;
  }

  return <ContentBlockLexical fragmentRef={fragment.news} />;
};

export default TemplateSecondContent;

graphql`
  fragment TemplateSecondNews on TemplateSecondPage {
    news {
      __typename
      ...ContentBlockLexicalFragment
    }
  }
`;
