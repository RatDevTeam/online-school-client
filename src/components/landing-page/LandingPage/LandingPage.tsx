import React, { useEffect } from 'react';
import FeedbackSlider from '../../Feedback/FeedbackSlider';
import AOS from 'aos';
import advantages from '../../../utils/advantages';

import './styles.scss';

interface ILandingPageProps {}

const LandingPage: React.FC<ILandingPageProps> = () => {
	useEffect(() => {
		AOS.init({
			delay: 500,
		});
	});
	return (
		<>
			<div className="landing__container">
				<div className="landing__title">
					<div className="landing__title__left" data-aos="fade-right">
						<h2> Подготовка к ЕГЭ в онлайн формате</h2>
						<p>
							Преподаватели и тьюторы ЛикБез нацелены на то,
							<br /> чтобы ты максимально эффективно
							<br /> подготовился к экзаменам
						</p>
						<button
							type="button"
							onClick={() => {
								window.location.href = '#following';
							}}
						>
							Я сдам на 100!
						</button>
					</div>
					<div className="landing__title__img" data-aos="fade-left" />
				</div>
				<div className="landing__advantages">
					<h1 className="landing__advantages__title">
						Подготовим к <span>ЕГЭ</span>
					</h1>
					<div className="landing__advantages__body">
						<div className="landing__advantages__body__box">
							{advantages.left.map(
								(a: { id: number, title: string, list: string[] }) => (
									<div className="landing__advantages__body__box__el">
										<div className="landing__advantages__body__box__el__img" />
										<div className="landing__advantages__body__box__el__text">
											<h2>
												<span>Без</span> {a.title}
											</h2>
											<ul>
												{a.list.map((l: string) => (
													<li>{l}</li>
												))}
											</ul>
										</div>
									</div>
								)
							)}
						</div>
						<div className="landing__advantages__body__box right">
							{advantages.right.map(
								(advantage: { id: number, title: string, list: string[] }) => (
									<div className="landing__advantages__body__box__el">
										<div className="landing__advantages__body__box__el__img" />
										<div className="landing__advantages__body__box__el__text">
											<h2>
												<span>Без</span> {advantage.title}
											</h2>
											<ul>
												{advantage.list.map((l: string) => (
													<li>{l}</li>
												))}
											</ul>
										</div>
									</div>
								)
							)}
						</div>
					</div>
				</div>
				<div className="landing__how-to-study">
					<div className="landing__how-to-study__title">
						<h1>
							Как проходят занятия<span>?</span>
						</h1>
					</div>
					<div className="landing__how-to-study-body">
						<div className="landing__how-to-study-body__img" />
						<div className="landing__how-to-study-body__text">
							<p>
								Занятия проходят онлайн. Для каждого занятия есть скрипт, чтобы
								было проще вести конспект, а информация лучше усваивалась.
							</p>
							<p>
								Длительность: от 1 часа до 1,5 часов (в зависимости от темы).
								Начало вебинаров по московскому времени. Не переживай, если ты
								не успел посетить занятие - мы всегда сохраняем видеозапись
							</p>
						</div>
					</div>
				</div>
				<div className="landing__free-webinar" id="following">
					<div className="landing__free-webinar__title">
						<h1>Посети первое занятие бесплатно</h1>
					</div>
					<div className="landing__free-webinar__body">
						<div className="landing__free-webinar__body__left">
							<p>
								Подпишись на нас вКонтакте
								<br />и получи приглашение на первое занятие. <br /> Пора
								готовиться!
							</p>
							<button
								type="button"
								onClick={() =>
									window.open('https://www.instagram.com/likbez_online/')
								}
							>
								Подписаться
							</button>
						</div>
						<div className="landing__free-webinar__body__right">
							<h1>Тебе доступны курсы</h1>
							<ul>
								<li>Английский язык. ЕГЭ</li>
								<li>История. ЕГЭ</li>
								<li>Обществознание. ЕГЭ</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="landing__feedback">
					<h1 className="landing__advantages__title">Отзывы учеников</h1>
					<FeedbackSlider />
				</div>
			</div>
		</>
	);
};
export default LandingPage;
