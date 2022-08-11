import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { useFlexSearch } from "react-use-flexsearch";
import * as queryString from "query-string";

import { rhythym } from "../utils/typography";

const searchPosts = ({ results }) => {
    results.length > 0 ? (
        results.map(node => {
            const date = node.date
            const title = node.title || node.slug
            const description = node.description
            const excerpt = node.excerpt
            const slug = node.slug
            
            return (
                <div key={slug}>
                    <h3 style={{
                        marginBottom: rhythym(1 / 4),
                    }}>
                        <Link style={{ boxShadow: `none` }} to={`/blog/${slug}`}>
                            {title}
                        </Link>
                    </h3>
                </div>
            )
        })
    ) : (
        <p style={{
            textAlign: "center"
        }}>
            Sorry! No posts match this search.
        </p>
    )
}

const SearchBar = styled.div`
  display: flex;
  border: 1px solid #dfe1e5;
  border-radius: 10px;
  margin: 0 auto ${rhythm(1)};
  width: 100%;
  height: 3rem;
  background: #fdfdfd;
  svg {
    margin: auto 1rem;
    height: 20px;
    width: 20px;
    color: #9aa0a6;
    fill: #9aa0a6;
  }
  input {
    display: flex;
    flex: 100%;
    height: 100%;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 0;
    padding-right: 0.5rem;
    color: rgb(55, 53, 47);
    word-wrap: break-word;
    outline: none;
  }
`

export default searchPosts