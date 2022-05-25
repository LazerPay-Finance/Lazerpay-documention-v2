import React from "react"
import { path } from 'ramda';
import classNames from "classnames"
import { DocumentTypes } from "contentlayer/generated"
import { Divider, FooterWrapper, Header, LzContainer, LzSidebar, Reaction, TableOfContents } from "components"
import Styles from './Layout.module.scss';

type DocsLayoutProps = {
  children: React.ReactNode
  doc: DocumentTypes
}

export default function DocsLayout({ children, doc }: DocsLayoutProps) {
  const hideToc = path(['frontmatter', 'toc', 'length'], doc) < 3;

  return (
    <div className={classNames(Styles.LayoutWrapper)}>
      <section className='w-full'>
        <LzSidebar />
        <main className="float-right w-4/5 min-h-screen">
          <Header />
          <LzContainer>
            <div className="w-full pt-14">
              <section className='float-left whitespace-pre w-/3'>
                {children}
              </section>
              {
                !hideToc && (
                  <div className="sticky top-0 float-right h-full w-60">
                    <TableOfContents data={doc.frontmatter.toc} />
                  </div>
                )
              }
              <div className="clear-both" />
            </div>
            <Reaction />
            <Divider className='mb-10 mt-7' />
            <FooterWrapper />
          </LzContainer>
        </main>
        <div className='clear-both' />
      </section>
    </div>
  )
}
