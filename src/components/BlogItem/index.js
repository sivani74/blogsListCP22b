// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {description, title, publishedDate} = blogDetails

  return (
    <li className="blog-details">
      <div className="title-container">
        <h1 className="title">{title}</h1>
        <p className="description">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
      <hr className="line" />
    </li>
  )
}

export default BlogItem
