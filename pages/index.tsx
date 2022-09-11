import React from 'react';
import { NextPage } from 'next';
import Section from '../components/Section';
import SectionContent from '../components/SectionContent';
import SectionHeading from '../components/SectionHeading';
import EditorVideoPlayerContainer from '../components/EditorVideoPlayerContainer';
import EditorTimelineContainer from '../components/EditorTimelineContainer';

const Editor: NextPage = () => {
  return (
    <div className="pt-12">
      <Section>
        <SectionHeading title="My new video"></SectionHeading>
        <SectionContent className="px-4 pt-8 sm:px-0">
          <EditorVideoPlayerContainer />
        </SectionContent>
      </Section>
      <Section>
        <SectionContent>
          <EditorTimelineContainer />
        </SectionContent>
      </Section>
    </div>
  );
};

export default Editor;
