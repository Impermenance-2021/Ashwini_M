import React from 'react';
import HyperLink from './HyperLink';
import type { Link } from '../../types/Link';
import { routes } from '../../constants/routes';

const Greeting = (): React.ReactElement => {
  const projectsLink: Link = {
    url: `${routes.projects.path}/`,
  };

  const blogLink: Link = {
    url: `${routes.blog.path}/`,
  };

  const projectsLinkElement = (
    <div className="inline-block">
      <HyperLink link={projectsLink} className="underline font-semibold">projects</HyperLink>
    </div>
  );

  const blogLinkElement = (
    <div className="inline-block">
      <HyperLink link={blogLink} className="underline font-semibold">articles</HyperLink>
    </div>
  );

  return (
    <>
      <p className="font-light">
        Hi there!
        I&apos;m Ashwini Mathur. I work as a full-time Educator and Assistant Teaching Professor. In my spare time I do
        open-sourcing <i>(normally it is about 1-2 hours in the morning before the work)</i>.
        Most of my open-source {projectsLinkElement} are focused
        on one thing &ndash; <i>to help people learn</i>. You may use these projects to
        learn about Full Stack Web-Devolepment and other useful learning snippets, etc. I also write {blogLinkElement} about life, Cloud Computing, Virtualization, web-development
        R programming, Linux and machine learning etc...
      </p>
    </>
  );
};

export default Greeting;
