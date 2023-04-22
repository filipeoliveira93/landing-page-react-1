import React from "react";

function header() {
	return (
		<header class=' font-sans w-full flex flex-col bg-red justify-between align-middle items-stretch'>
			<div class='w-full flex flex-row justify-around items-stretch  '>
				<span className='flex w-24 12 m-5 bg-red-500 h-12 align-middle'>
					<a>
						<svg
							width='22'
							height='22'
							viewBox='0 0 22 22'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M21.0312 18.8438L16.3438 14.1562C17.3984 12.5938 17.9453 10.6406 17.6719 8.53125C17.1641 4.9375 14.2344 2.04688 10.6797 1.57812C5.36719 0.914062 0.875 5.40625 1.53906 10.7188C2.00781 14.2734 4.89844 17.2031 8.49219 17.7109C10.6016 17.9844 12.5547 17.4375 14.1562 16.3828L18.8047 21.0703C19.4297 21.6562 20.4062 21.6562 21.0312 21.0703C21.6172 20.4453 21.6172 19.4688 21.0312 18.8438ZM4.58594 9.625C4.58594 6.89062 6.8125 4.625 9.58594 4.625C12.3203 4.625 14.5859 6.89062 14.5859 9.625C14.5859 12.3984 12.3203 14.625 9.58594 14.625C6.8125 14.625 4.58594 12.3984 4.58594 9.625Z'
								fill='#1E2832'
							/>
							<path
								d='M21.0312 18.8438L21.396 18.5018L21.3905 18.4959L21.3848 18.4902L21.0312 18.8438ZM16.3438 14.1562L15.9293 13.8765L15.6986 14.2183L15.9902 14.5098L16.3438 14.1562ZM17.6719 8.53125L18.1678 8.46697L18.167 8.46129L17.6719 8.53125ZM10.6797 1.57812L10.7451 1.08241L10.7417 1.08199L10.6797 1.57812ZM1.53906 10.7188L1.04291 10.7808L1.04335 10.7841L1.53906 10.7188ZM8.49219 17.7109L8.42223 18.2061L8.42791 18.2068L8.49219 17.7109ZM14.1562 16.3828L14.5113 16.0307L14.2231 15.7401L13.8813 15.9652L14.1562 16.3828ZM18.8047 21.0703L18.4497 21.4224L18.4561 21.4289L18.4627 21.4351L18.8047 21.0703ZM21.0312 21.0703L21.3732 21.4351L21.385 21.424L21.396 21.4123L21.0312 21.0703ZM21.3848 18.4902L16.6973 13.8027L15.9902 14.5098L20.6777 19.1973L21.3848 18.4902ZM16.7582 14.436C17.8769 12.7786 18.4577 10.7042 18.1677 8.46697L17.176 8.59553C17.4329 10.5771 16.92 12.4089 15.9293 13.8765L16.7582 14.436ZM18.167 8.46129C17.6278 4.64581 14.5229 1.58059 10.7451 1.08242L10.6143 2.07383C13.9459 2.51316 16.7003 5.22919 17.1768 8.60121L18.167 8.46129ZM10.7417 1.08199C5.10567 0.377481 0.338419 5.14473 1.04292 10.7808L2.0352 10.6567C1.41158 5.66777 5.62871 1.45064 10.6177 2.07426L10.7417 1.08199ZM1.04335 10.7841C1.54153 14.5619 4.60675 17.6669 8.42223 18.206L8.56214 17.2159C5.19013 16.7394 2.4741 13.9849 2.03477 10.6534L1.04335 10.7841ZM8.42791 18.2068C10.6662 18.4969 12.7385 17.9151 14.4312 16.8004L13.8813 15.9652C12.3709 16.9599 10.5369 17.4718 8.55646 17.2151L8.42791 18.2068ZM13.8012 16.7349L18.4497 21.4224L19.1597 20.7182L14.5113 16.0307L13.8012 16.7349ZM18.4627 21.4351C19.28 22.2013 20.5559 22.2013 21.3732 21.4351L20.6893 20.7055C20.2566 21.1112 19.5793 21.1112 19.1467 20.7055L18.4627 21.4351ZM21.396 21.4123C22.1623 20.595 22.1623 19.3191 21.396 18.5018L20.6665 19.1857C21.0721 19.6184 21.0721 20.2957 20.6665 20.7283L21.396 21.4123ZM5.08594 9.625C5.08594 7.16422 7.09118 5.125 9.58594 5.125V4.125C6.53382 4.125 4.08594 6.61703 4.08594 9.625H5.08594ZM9.58594 5.125C12.0442 5.125 14.0859 7.16677 14.0859 9.625H15.0859C15.0859 6.61448 12.5965 4.125 9.58594 4.125V5.125ZM14.0859 9.625C14.0859 12.1198 12.0467 14.125 9.58594 14.125V15.125C12.5939 15.125 15.0859 12.6771 15.0859 9.625H14.0859ZM9.58594 14.125C7.08864 14.125 5.08594 12.1223 5.08594 9.625H4.08594C4.08594 12.6746 6.53636 15.125 9.58594 15.125V14.125Z'
								fill='white'
							/>
						</svg>
					</a>
				</span>
				<div>
					<svg
						width='31'
						height='15'
						viewBox='0 0 31 15'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M0.353554 7.5L7.5 0.353554L14.6464 7.5L7.5 14.6464L0.353554 7.5Z'
							stroke='black'
							stroke-width='0.5'
						/>
						<path
							d='M8.35355 7.5L15.5 0.353554L22.6464 7.5L15.5 14.6464L8.35355 7.5Z'
							stroke='black'
							stroke-width='0.5'
						/>
						<path
							d='M16.3536 7.5L23.5 0.353554L30.6464 7.5L23.5 14.6464L16.3536 7.5Z'
							stroke='black'
							stroke-width='0.5'
						/>
					</svg>
					<h1>CORAL</h1>
					<svg
						width='31'
						height='15'
						viewBox='0 0 31 15'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M0.353554 7.5L7.5 0.353554L14.6464 7.5L7.5 14.6464L0.353554 7.5Z'
							stroke='black'
							stroke-width='0.5'
						/>
						<path
							d='M8.35355 7.5L15.5 0.353554L22.6464 7.5L15.5 14.6464L8.35355 7.5Z'
							stroke='black'
							stroke-width='0.5'
						/>
						<path
							d='M16.3536 7.5L23.5 0.353554L30.6464 7.5L23.5 14.6464L16.3536 7.5Z'
							stroke='black'
							stroke-width='0.5'
						/>
					</svg>
				</div>
				<div>
					<span>
						<svg
							width='19'
							height='21'
							viewBox='0 0 19 21'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M9.5 10.5C12.2344 10.5 14.5 8.27344 14.5 5.5C14.5 2.76562 12.2344 0.5 9.5 0.5C6.72656 0.5 4.5 2.76562 4.5 5.5C4.5 8.27344 6.72656 10.5 9.5 10.5ZM11.4531 12.375H7.50781C3.75781 12.375 0.75 15.4219 0.75 19.1719C0.75 19.9141 1.33594 20.5 2.07812 20.5H16.8828C17.625 20.5 18.25 19.9141 18.25 19.1719C18.25 15.4219 15.2031 12.375 11.4531 12.375Z'
								fill='#1E2832'
							/>
						</svg>
						<a>Account</a>
						<svg
							width='19'
							height='21'
							viewBox='0 0 19 21'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M5.125 4.875C5.125 2.49219 7.07812 0.5 9.5 0.5C11.8828 0.5 13.875 2.49219 13.875 4.875V6.75H16.375C17.3906 6.75 18.25 7.60938 18.25 8.625V16.75C18.25 18.8203 16.5703 20.5 14.5 20.5H4.5C2.39062 20.5 0.75 18.8203 0.75 16.75V8.625C0.75 7.60938 1.57031 6.75 2.625 6.75H5.125V4.875ZM7 6.75H12V4.875C12 3.50781 10.8672 2.375 9.5 2.375C8.09375 2.375 7 3.50781 7 4.875V6.75ZM6.0625 10.5C6.57031 10.5 7 10.1094 7 9.5625C7 9.05469 6.57031 8.625 6.0625 8.625C5.51562 8.625 5.125 9.05469 5.125 9.5625C5.125 10.1094 5.51562 10.5 6.0625 10.5ZM12.9375 8.625C12.3906 8.625 12 9.05469 12 9.5625C12 10.1094 12.3906 10.5 12.9375 10.5C13.4453 10.5 13.875 10.1094 13.875 9.5625C13.875 9.05469 13.4453 8.625 12.9375 8.625Z'
								fill='#1E2832'
							/>
						</svg>

						<a>Shopping</a>
					</span>
				</div>
			</div>

			<div class='w-full flex flex-col justify-between my-10 '>
				<ul class=' border-solid  font-light flex flex-row justify-between mx-10 '>
					<li className=' mx-8 duration-200 ease-linear hover:text-sky-600 antialiased hover:font-semibold'>
						<a href=''>Jewelry & Accessories</a>
					</li>
					<li className=' mx-8 duration-200 ease-linear hover:text-sky-600 antialiased hover:font-semibold'>
						<a href=''>Clothing & Shoes</a>
					</li>
					<li className=' mx-8 duration-200 ease-linear hover:text-sky-600 antialiased hover:font-semibold'>
						<a href=''>Wedding & Party</a>
					</li>
					<li className=' mx-8 duration-200 ease-linear hover:text-sky-600 antialiased hover:font-semibold'>
						<a href=''>Toys & Entertainment</a>
					</li>
					<li className=' mx-8 duration-200 ease-linear hover:text-sky-600 antialiased hover:font-semibold'>
						<a href=''>Art & Collectibles</a>
					</li>
					<li className=' mx-8 duration-200 ease-linear hover:text-sky-600 antialiased hover:font-semibold'>
						<a href=''>Craft Supplies & Tools</a>
					</li>
				</ul>
			</div>

			<div className='flex w-full bg-red-400'>
				<div>
					<h2 className=''>Collections</h2>
					<h3 className='font-semibold '>
						you can explore ans shop many differnt collection from various barands
						here.
					</h3>
					<button>
						<svg
							width='19'
							height='21'
							viewBox='0 0 19 21'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M5.125 4.875C5.125 2.49219 7.07812 0.5 9.5 0.5C11.8828 0.5 13.875 2.49219 13.875 4.875V6.75H16.375C17.3906 6.75 18.25 7.60938 18.25 8.625V16.75C18.25 18.8203 16.5703 20.5 14.5 20.5H4.5C2.39062 20.5 0.75 18.8203 0.75 16.75V8.625C0.75 7.60938 1.57031 6.75 2.625 6.75H5.125V4.875ZM7 6.75H12V4.875C12 3.50781 10.8672 2.375 9.5 2.375C8.09375 2.375 7 3.50781 7 4.875V6.75ZM6.0625 10.5C6.57031 10.5 7 10.1094 7 9.5625C7 9.05469 6.57031 8.625 6.0625 8.625C5.51562 8.625 5.125 9.05469 5.125 9.5625C5.125 10.1094 5.51562 10.5 6.0625 10.5ZM12.9375 8.625C12.3906 8.625 12 9.05469 12 9.5625C12 10.1094 12.3906 10.5 12.9375 10.5C13.4453 10.5 13.875 10.1094 13.875 9.5625C13.875 9.05469 13.4453 8.625 12.9375 8.625Z'
								fill='#fff'
							/>
						</svg>
						<p>Shop now</p>
					</button>
				</div>
				<div class="flex flex-row bg-blue-500 " >
					<img
						className=" bg-gray-500 w-[424px] h-[542px]"
						src='../assets/header/foto-banner-header.png'
						alt=''
						// width={300}
						// height={500}
					/>
					<div class="flex w-[400px] h-[542px] bg-yellow-500"></div>
					
				</div>
			</div>
		</header>
	);
}

export default header;
