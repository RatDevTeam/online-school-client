import React, { useEffect } from 'react';
import AOS from 'aos';
import Feedback from '../FeedbackCarousel';
import './styles.scss';

interface ILandingPageProps {}

const LandingPage: React.FC<ILandingPageProps> = () => {
	useEffect(() => {
		AOS.init({
			delay: 400,
		});
	});
	return (
		<>
			<div className="landing__container">
				<div className="landing__title">
					<div className="landing__title__left" data-aos="fade-right">
						<h2>
							{' '}
							Подготовка к ЕГЭ
							<br /> в онлайн формате
						</h2>
						<p>
							Преподаватели и тьюторы ЛикБез нацелены на то,
							<br /> чтобы ты максимально эффективно
							<br /> подготовился к экзамену
						</p>
						<button type="button">Я сдам на 100!</button>
					</div>
					<img
						src="/public/likbez-main.svg"
						alt="Ликбез"
						data-aos="fade-left"
					/>
				</div>
				<div
					className="landing__how-to-study"
					data-aos="fade-up"
					data-aos-duration="1000"
				>
					<div className="landing__how-to-study__title">
						<h2>
							Как проходят занятия<span>?</span>
						</h2>
					</div>
					<div className="landing__how-to-study-body">
						<div className="landing__how-to-study-body__img" />
						<p>
							Занятия проходят онлайн. Для каждого занятия есть скрипт, чтобы
							было проще вести конспект, а информация лучше усваивалась.
							Длительность: от часа до полутора часов (в зависимости от темы).
							Начало всегда по московскому времени. Но не переживай, если ты не
							успел посетить занятие: мы всегда сохраняем видеозапись. Личный
							тьютор будет помогать тебе, а преподаватель ответит на вопросы
						</p>
					</div>
				</div>
				<div className="landing__free-webinar">
					<div className="landing__free-webinar__parallax landing__free-webinar-back">
						<div className="landing__free-webinar__title">
							<h2>Посети первое занятие бесплатно</h2>
						</div>
						<div className="landing__free-webinar__body">
							<div className="landing__free-webinar__body__left">
								<p>
									Подпишись на нас вКонтакте
									<br />и получи приглашение на первое занятие. Пора готовиться!
								</p>
								<button type="button">Подписаться</button>
							</div>
							<div className="landing__free-webinar__body__right">
								<h3>Тебе доступны курсы</h3>
								<ul>
									<li>Английский язык. ЕГЭ</li>
									<li>История. ЕГЭ</li>
									<li>Обществознание. ЕГЭ</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="landing__free-webinar__parallax landing__free-webinar-front">
						<p>Lorem</p>
						<p>Lorem</p>
					</div>
				</div>
			</div>
			<h2>Отзывы учеников</h2>
			<Feedback />
		</>
	);
};
export default LandingPage;
