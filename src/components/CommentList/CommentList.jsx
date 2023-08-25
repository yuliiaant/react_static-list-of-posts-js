import './CommentList.scss';
import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comments }) => (
  <div className="CommentList">
    {!comments.length
      ? <b data-cy="NoCommentsMessage">No comments yet</b>
      : comments.map(comment => (<CommentInfo comment={comment} />))
    }
  </div>
);
