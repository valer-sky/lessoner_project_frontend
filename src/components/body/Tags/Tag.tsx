import classNames from "classnames";
import "./index.scss";

type TagProps = {
    text: string; 
    type?: 'status' | 'time' | 'category';
    className?: string,
}

const Tag:React.FC<TagProps> = ({text, type = 'category', className = ''}) => {
    const tagClassName = classNames({
        tag: true,
        'tag-status': type === "status",
        'tag-time': type === "time",
        'tag-category': type === "category",
    }, className)
    return(
        <div className={tagClassName}>{text}</div>
    )
}

export default Tag;