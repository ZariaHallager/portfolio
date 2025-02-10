import { Mail, GithubIcon, X, LinkedinIcon } from "lucide-react";

export default function ContactNav() {
  return (
    <nav>
      <ul>
        <li>
          <a
            href='https://github.com/zariahallager'
            target='_blank'
            rel='noopener noreferrer'>
            <GithubIcon size={28} />
          </a>
        </li>
        <li>
          <a
            href='https://x.com/zariahallager'
            target='_blank'
            rel='noopener noreferrer'>
            <X size={28} />
          </a>
        </li>
        <li>
          <a
            href='https://linkedin.com/in/zariahallager'
            target='_blank'
            rel='noopener noreferrer'>
            <LinkedinIcon size={28} />
          </a>
        </li>
        <li>
          <a href='mailto:zariahallager@outlook.com'>
            <Mail size={28} />
          </a>
        </li>
      </ul>
    </nav>
  );
}
