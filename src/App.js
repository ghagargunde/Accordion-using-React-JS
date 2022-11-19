
import { useState } from 'react'
import "./App.css";

function FAQ() {
    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected == i) {
            return setSelected(null)
        }

        setSelected(i)
    }

    
const data = [
    {
        question: 'How to label images ?',
        answer: 'Image labeling is the process of identifying and marking various details in an image. Image labeling is useful when automating the process of generating metadata or making recommendations to users based on details in their images.'
    },
    {
        question: 'How to train datasets ?',
        answer: 'Machine learning requires us to have existing data—not the data our application will use when we run it, but data to learn from. You need a lot of real data, in fact, the more the better. The more examples you provide, the better the computer should be able to learn. So just collect every scrap of data you have and dump it and voila! Right? '
    },
    {
        question: 'How to detect defects ?',
        answer: 'Defects are one of the major causes of a decrease in improvement and quality of products. Therefore, identification of defects is very important to control and minimize its impact on system. Identification or detection of defects is not an easy process'
    },

]

    return (
       
      
       
        <div className='wrapper'>
            <div className='accordion'>
                {data.map((item, i) => (
                    <div className='item'>
                        <div className='title' onClick={() => toggle(i)}>
                            <h2>{item.question}</h2>
                            <span>{selected == i ? '-' : '+'}</span>
                        </div>
                        <div className={selected == i ? 'content show' : 'content'}>{item.answer}</div>
                    </div>
                ))}
            </div>
        </div>
        
    )
}
export default FAQ