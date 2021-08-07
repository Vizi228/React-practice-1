import review from'./Review.module.css';

const Review = (props) => {
  return (
    <div className={review.body}>
        <div className={review.logo}>
          <img className={review.img} src="https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg" alt="fdfsd" />
        </div>
        <div className={review.text}>
          { props.text }
        </div>
    </div>
  );
}
export default Review;