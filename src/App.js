import PropTypes from 'prop-types';

function Food({name, picture, rating}){
  return (
    <div>
      <h3>I like {name}</h3>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}/>
    </div>
  );

}

const foodILike =[
  {
    id:1,
    name: 'Kimchi',
    image: 'https://health.chosun.com/site/data/img_dir/2021/09/01/2021090100998_0.jpg',
    rating: 5.0
  },
  {
    id:2,
    name: 'Samgyeopsal',
    image: 'https://src.hidoc.co.kr/image/board/2021/8/27/1630049957798_0.jpg',
    rating: 4.8
  },
  {
    id:3,
    name: 'Bibimbap',
    image: 'http://img.danawa.com/prod_img/500000/167/890/img/13890167_1.jpg?shrink=330:330&_v=20210517095810',
    rating: 4.5
  }
];


function App() {
  return (
    <div>
      <h1>Hello</h1>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
      ))}
    </div>
  );
}

Food.propTypes ={
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,

};

export default App;
