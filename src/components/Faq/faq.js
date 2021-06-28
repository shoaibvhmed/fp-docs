
import React from 'react';

const Faq = ({ data }) => (<div>
    <h3> Frequently Asked Questions </h3>
    <ol>
        {data.questions.map(q => <li key={q.question}> <h4>{q.question} </h4>
            <p>{q.answer} </p>
        </li>)
        }
    </ol>
</div>)


export default Faq;