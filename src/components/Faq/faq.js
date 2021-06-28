
import React, { useState, useEffect } from 'react';
import styles from './faq.module.css';
import { Icon, InlineIcon } from '@iconify/react';
import searchOutline from '@iconify-icons/teenyicons/search-outline';
import xCircleSolid from '@iconify-icons/teenyicons/x-circle-solid';

const Faq = ({ data }) => {

    const [searchText, setSearchText] = useState('');
    const [filteredQuestions, setFilteredQuestions] = useState([]);

    useEffect(() => {
        if (searchText) {
            const filteredQuestions = data.questions.filter(d => (d.question && d.question.toLowerCase()).includes(searchText.toLowerCase()));
            setFilteredQuestions(filteredQuestions);
        }
    }, [searchText]);

    return (
        <div>
            <h3> Frequently Asked Questions </h3>
            <div className={styles.searchContainer}>
                <div className={styles.prefix}>
                    <Icon width={"14px"} height={"14px"} icon={searchOutline} />
                </div>
                <input className={styles.searchInput} type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder="Search Questions" />
                {
                    searchText.length ? <div className={styles.suffix} onClick={() => setSearchText('')}> <Icon width={"14px"} height={"14px"} icon={xCircleSolid} /> </div> : ''
                }
            </div>
            <ol>
                {!searchText.length ? data.questions.map(q => <li key={q.question}>
                    <h4>{q.question} </h4>
                    <p>{q.answer} </p>
                </li>) : filteredQuestions.length ? filteredQuestions.map((q) => <li key={q.question}>
                    <h4>{q.question} </h4>
                    <p>{q.answer} </p>
                </li>) : <div> No related questions for term <b>{searchText}</b> </div>
                }
            </ol>
        </div>)
}

export default Faq;