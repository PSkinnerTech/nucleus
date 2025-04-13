import Code from './Code';

const MDXComponents = {
  // Override the default code block rendering
  pre: (props: any) => <div {...props} />,
  code: (props: any) => <Code {...props} />
};

export default MDXComponents; 