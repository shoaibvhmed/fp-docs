import React from "react";
import Layout from "@theme/Layout";
import styles from './faq.module.css';
import { locationTracking } from "../../components/Faq/faqSources";

export default function Faq() {
  return (
    <Layout
      title="FAQ's"
      description="All your FAQ's answered here"
    >
    <div className="docs-wrapper doc-page" > 
        <aside className={styles.sidebar}>
          <ul> 
          <li id='location-tracking'> Location Tracking </li> </ul>
        </aside>
      <main className={styles.mainbar} >
        <h3>Frequently Asked Questions </h3>
        <div>
        <h4> { locationTracking.title } </h4>
        <ol>
        {locationTracking.questions.map(q => <li key={q.question}> <h4>{ q.question } </h4>
        <p>{ q.answer} </p>
        </li>)           
          }
        </ol>          
        </div>
      </main>
    </div>

    </Layout>
  );
}
