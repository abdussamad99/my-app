import Link from "next/link";


const Post = ({post}) => {
 const {id,title,author,category,description,} = post;

    return (

        <div className="card card-border bg-base-100 w-96">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <h1>{author}</h1>
                <p>{description}</p>
                <Link href={`/blogs/${id}`}>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Show Details</button>
                </div>
                </Link>
            </div>
        </div>
    );
};

export default Post;