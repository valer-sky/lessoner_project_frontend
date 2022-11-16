import React from 'react';
import { FormattedMessage } from "react-intl";
import LessonCard from "../../../LessonCard";

import items from '../../../../assets/lessonCard.json';
import "./index.scss";

const Lessons: React.FC = () => {
    return (
        <div className="lessons">
            <FormattedMessage id="app.lessons" />
            {items.map((obj) => (
                <LessonCard key={obj.id} 
                    title={obj.title} 
                    status={obj.status}
                    duration={obj.duration}
                    imagePreview={obj.imagePreview}
                    id={obj.id}
                    published={obj.published}
                    view={obj.view}
                    category={obj.category}
                    rating={obj.rating}
                    totalVotes={obj.totalVotes}
                />))
            }
        </div>
    );
};

export default Lessons;
