import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

export type TextBlockProps = {
  children?: React.ReactNode;
}

const urlRegex = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig

const TextBlock = (props: TextBlockProps) => {
  const { children } = props;

  return (<div className="font-code bg-neu-50 p-1.5 rounded text-neu-800">{children}</div>)
}

export default TextBlock;