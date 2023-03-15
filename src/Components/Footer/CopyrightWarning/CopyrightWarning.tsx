import React from 'react';
import { Link } from 'react-router-dom';

export function CopyrightWarning() {
  return (
    <h1>
      <span className="text-discreet text-sm">
        © 2023 Rapptr Labs. All Rights Reserved |
        <Link
          className="hover:text-rapptr-blue focus-visible:text-rapptr-blue"
          to="/policy"
        >
          &nbsp;Privacy Policy&nbsp;
        </Link>
        |&nbsp;
        <Link className="hover:text-rapptr-blue focus-visible:text-rapptr-blue" to="/tos">
          &nbsp;Terms of Service&nbsp;
        </Link>
      </span>
    </h1>
  );
}
