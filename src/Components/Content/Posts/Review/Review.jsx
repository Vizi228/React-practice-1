import review from'./Review.module.css';

const Review = (props) => {
  return (
    <div className={review.body}>
        <div className={review.logo}>
          <img className={review.img} src={ props.src } alt="fdfsd" />
        </div>
        <div className={review.text}>
          { props.text }
        </div>
    </div>
  );
}
let ReviewInfo = [
  { src: "https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg", text: "Hi, its my first post"},
  { src: "https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg", text: "Hi"}
]

let ReviewData = ReviewInfo.map( rev => <Review text = {rev.text} src = {rev.src} />)



export default ReviewData;