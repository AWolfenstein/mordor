import React, { Component } from 'react';
import { Row,Col ,Image,Card,Badge,Button,ListGroup,InputGroup,FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import useravatar from '../img/useravatar.jpg';
import Background from '../img/userbackground.jpg';
import heart from '../img/heart-icon.jpg'
import MarkdownRenderer from 'react-markdown-renderer';
import '../stylesheets/read.css';
var backimageStyle = {
    
    backgroundImage: `url(${Background})`
  };
class Profile extends Component {

	constructor(){
		super();

		this.state = {
			
		};
	}

	componentDidMount(){
		
	}
	render(){
        const markdown = '1. [Глава 1](ddd)         \n   1.1 [Единорог](http://localhost:3000/read/#Единорог)      \n /n  ddddddddddddddddddddddddddd /n    \n     \ ';
        const UserImage = ( <Image src={useravatar} style={{ width: "80px", height:"80px" }} roundedCircle /> );
        const Author = (
            
            <Row className="Profile head "  style={backimageStyle}>
                
                <Col className="Profile head  " >
                <div id="Author">Autor:</div> 
                <p></p>
                    {UserImage}
                    <div className="Profile head username">  {this.props.username}</div>
                </Col>
                
            </Row>            
        );
const intro=(
<Card>
  <Card.Header id="Header" as="h5" ><Row><Col sm={10}>Vikings</Col><Col sm={2}><span><Image src={heart} style={{ width: "20px", height:"20px" }}/>+7</span></Col></Row> </Card.Header>
  <Card.Body id="BodyCard">
     <Row>
         <Col sm={5}>
    <Card.Title>Category:</Card.Title>
    <Card.Text>
     Films
    </Card.Text>
    <Card.Title>Tags:</Card.Title>
    <Card.Text>
    <Badge variant="dark">Info</Badge> <Badge variant="dark">Info</Badge> <Badge variant="dark">Info</Badge>
    </Card.Text>
    </Col>
    <Col sm={7}>
    <Card.Title>Description:</Card.Title>
    <Card.Text>
    Vikings is a historical drama television series,[1] written and created by Michael Hirst for the television channel History.[2] The series broadly follows the exploits of the legendary Viking chieftain Ragnar Lothbrok and his crew, and in later seasons those of his sons. The first season premiered on March 3, 2013 in Canada and concluded on April 28, 2013, consisting of nine episodes. It begins at the start of the Viking Age, marked by the Lindisfarne raid in 793, and follows Ragnar's quest to become Earl, and his desire to raid England.
    </Card.Text>
    </Col>
    </Row> 
  </Card.Body>
</Card>

)
const readdiv=(
    <Card body id="readzone"><MarkdownRenderer markdown={markdown} /> Проснувшись, первым, что я почувствовал была лип… Стоп. Что-то мне это напоминает! Значит сейчас соблазнительный женский голос должен прошептать:
    — Нет, — вместо соблазнительного женского голоса, прошептал скучающий мужской, — Пока нет.
    — Бл*! — я вскочил с кровати, послышался смех Лайта, — Приколисты еб*еные!
    Я встал с кровати, но из-за того, что Миша лежал рядом на полу, споткнулся об него и растянулся на полу рядом с ним.
    — Да ёб твою…
    — Проснись и пой, Макс! — приветствовала меня моя личная каста Вшей.
    — Заткнись и спи! — я поднялся с пола, взял подушку и разорвал её.
    — У-у, сука, Я ЗО-О-ОЛ! — мои соседи никак не отреагировали на это, ведь каждое моё утро начинается именно так.
    — Есть какие-то планы на сегодня, кроме адского гринда на грани жизни и смерти? — спросил меня Син. Хм-м, а что здесь ещё можно поделать?
    — Ну-у-у, я думал сгонять в тот город, из которого мы «быстро» выбрались. У меня теперь всё же какое-никакое, а состояние появилось — здраво рассуждал я, будет интересно погулять по городу.
    — Ну, тогда, вперёд! Прикупим шмоток! — Лайт, как всегда был на радостной волне.
    — Может тогда там домик купим, куда будет не стыдно девушку привести? — А у Хима, как всегда, одни бабы на уме, этим он мне и нравится.
    — Там наверняка должны быть игроки, может даже найдешь себе слугу, — выдал Син предложение, которое меня сильно заинтересовало, особенно хорошо будет, если помощник, окажется помощницей, — И кстати, посмотри, что за кольцо вчера получил от Дж…
    — Сто-оп, не произноси её… Его имени, — эмоционально отреагировав, я всё-таки решаю проверить кольцо:

Кольцо дающее +20 к ловкости


    Оригинальненько… Но для меня не слишком полезно, хотя отказываться от него было бы преступлением. Поэтому экипируем!
    — Что же, коли все за поход в город, то не вижу смысла тут задерживаться, уходим! — выкрикнул я и выбежал на улицу.
    Когда на улицу наконец выбрались мои питомцы я залез на Алису, и радостным голосом скомандовал:
    — Вперёд, мои верные спутники! — на это Михал гордо зарычал, а моя ездовая паучиха злобно прошипела:
    — П-ш-ш-р-и-д-у-р-о-к!
    Ходящие рядом НПС и так странно на нас поглядывали, а после этого, вообще все оглянулись на нашу компашку.
    — Чего уставились? — добавил угрозы в голос, — Помереть хотите?! — я потянулся рукой к ножнам, где покоился меч. Видя, как я потянулся за оружием, и видимо посчитав, что я какой-то ненормальный, толпа рассосалась.
    — Нда-а, посчитав его ненормальным, они полностью угадали. — прошептал Син, видимо думая, что я его не слышу, вот ублюдок, ты ещё у меня попляшешь…
    — Наряд вне очереди! — покарал его я, а то ишь чего удумал…
    — Пф-ф, как скажешь, — он отвернулся (от кого?!), обиженно сопя.
    — Так, Алиса, чего ножками не работаешь? Я тебе за что плачу? За то что ты на одном месте топчешься, а?! — паучиха вновь зашипела и сбросила меня со спины, потопав в сторону Стартового Города.
    — Э-эй, ты не попутала там?! — на это она не отреагировала, хрм… 
    — Стоять! — Алиса всё также шла вперёд, пугая своим видом прохожих.
    Чёрт, неужели мне придётся произнести ТО САМОЕ СЛОВО?
    — Видимо придётся. Так, успокойся, сделай глубокий вдох, потом медленно выдохни, — я следовал указаниям Сина, — мы знаем, что для тебя это будет самое сложное, что вообще ты делал за всю свою жизнь, но тебе придётся. Или хочешь шагать пешком до города? — вот блин, Лайт, как всегда прав, — Я — Син! — фу-ух, ну что же…
    — Алиса! — паучиха обернулась на мой голос, — П… Пр… П… Да бл*ть! Про-Прости м-меня! — Да-да-да, у меня получилось! Надо признать это было трудно.
    Алиса посмотрела на меня высокомерным взглядом и остановилась, будто говоря, чтобы я залазил на её спину. Так и поступлю!

Через десять минут


    — Как мы здесь оказались? — спросил я, стоя на дне глубокого каньона. После этого и засыпай на Алисе…
    — Видимо, топографический кретинизм заразен, — нашёл логичный ответ Син, — Так что, как я уже говорил, тебя надо отгородить от общества, чтобы каждый на этой планете не потерялся на пути под названием жизнь! — проигнорировав его, получив в ответ обиженный взгляд, я посмотрел наверх.
    На глаз тут было пара километров. И всё же я не понимаю как? То есть, я спал, а Алиса, с моей тушкой на спине, и с Мишей рядом, шли в город.
    И вот теперь мы здесь, на дне, целые и невредимые.
    — Магия? По-любому! — хотя в SAO, по заявлениям разработчиков, магии нет. Хотя, как тогда назвать все эти кристаллы? Ой, да не важно.
Ну что же, давайте-ка осмотримся.
    — Сто-оп, отмотай-ка назад, — попросил меня Син, хм-м и зачем ему это? Но мне не трудно.

Мотаем


    — Агу-агу…
    — Не так далеко!

Мотаем


    — Че­му бу­дет ра­вен де­сятич­ный ло­гарифм от ты­сячи? Кто хочет ответить? Максим, может ты?
    — Ещё ближе!

Мотаем


    — Ага, граната значит.
    — БЛИЖЕ!

Мотаем


    — Ах-х, быстрее, Акио! Это так приятно!
    — НАЗАД!
    — Так, погоди немного, — с похотью, пробивающейся наружу, попросил Хим.

Мотаем


    — То есть, всё это время, кристаллы были у тебя в инвентаре?!
    — НАЗАД, Я СКАЗАЛ!

Мотаем

</Card>

)
const comments =(
<Card body id="BodyComments">
<Card>
  <Card.Header id="HeaderComment">Comment Now</Card.Header>
  <Card.Body>
  <InputGroup className="mb-3">
    <FormControl
      placeholder="Write comment.."
      aria-label="Write comment.."
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <Button variant="outline-secondary">Send</Button>
    </InputGroup.Append>
  </InputGroup>
  </Card.Body>
</Card>
<p></p>
<Card >
  <Card.Header id="HeaderComment">Comments</Card.Header>
  <ListGroup variant="flush" id="ListComments">
    <ListGroup.Item>Vova Good : Its coool</ListGroup.Item>
    <ListGroup.Item>Pasha Trust: Perfect</ListGroup.Item>
    <ListGroup.Item>Trinity Favayer: idsfdsfdsfsfsfsfsfseefsfesfesfesfefese</ListGroup.Item>
  </ListGroup>
</Card>
</Card>

)
		return (
			<Row className="ContentRow"> 
            <Col id="content" sm>
                 {Author} 
                 <p></p>
                 {intro} 
                 <p></p>
                 {readdiv} 
                 <p></p>
                 {comments} 
                 <p></p>
                 </Col>
             </Row>
		)
	}
}

const mapStateToProps = state => {
	return {
    
	}
}

export default connect(mapStateToProps)(Profile)