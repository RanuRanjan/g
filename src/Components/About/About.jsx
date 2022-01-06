import React from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import WindowSize from '../../Utils/WindowSize';
import styles from './About.module.css';

const About = () => {
	const { newTheme } = React.useContext(ThemeContext);
	const [width] = WindowSize();
	const img =
		width < 650
			? 'https://avatars.githubusercontent.com/u/87422053?v=4' // my Picture
			// : 'https://github.com/himrd95/portfolio/blob/main/public/developer.gif?raw=true';
			:'https://miro.medium.com/max/1360/1*IRGHmiGsa16stedQvIaZfw.gif';
			// anything
	return (
		<div
			className={styles.container}
			style={{ boxShadow: `3px 3px 5px ${newTheme.line}` }}
		>
			<div className={styles.first}>
				<img src={"https://miro.medium.com/max/1360/1*IRGHmiGsa16stedQvIaZfw.gif"} alt='' />
			</div>
			<div className={styles.second}>
				<h1
					style={{ color: `${newTheme.title}` }}
					className={styles.heading}
				>
					About Me
				</h1>
				<div className={styles.borderBottom} />
				<p
					style={{ color: `${newTheme.para}` }}
					className={styles.aboutMe}
				>
					Hello! My name is Yash and My curiosity to explore the world of technology grew,
					 and this curiosity led me to the field of technology. I came to learn technology
					  because I knew something was waiting for me there. Stumbling into this field
					   made me realize I have found the missing piece. 
					I believe in this industry like once a tech giant believed. <br />
					<br /> Fast Forwarding to today, I built a number of web
					applications and  major projects. Learned a great deal
					about teamwork, leadership, and communication. After months
					of rigorous training, here I am
					<span style={{ color: `#00a0a0` }}>
						{' '}
						looking for an opportunity as a full stack web developer
					</span>
					.
				</p>
			</div>
		</div>
	);
};

export default About;
