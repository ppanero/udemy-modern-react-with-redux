import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 8:00 PM"
                    content="Nice blog post!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Jane"
                    timeAgo="Today at 2:00 PM"
                    content="Fire! but section B can be improved..."
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Nick"
                    timeAgo="Yesterday at 5:00 AM"
                    content="Bastante bien"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>

    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
