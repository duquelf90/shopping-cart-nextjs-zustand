'use client';

interface Props {
	isOpen: boolean
	children: React.ReactNode
	onCartIconClick: () => void
}

const CartDrawer = ({ children, isOpen, onCartIconClick }: Props) => {
	return (
		<div className='relative'>
			<div
				className={`fixed top-0 right-0 h-full w-80 text-white transition duration-700 ease-in-out transform z-10 ${
					isOpen ? "translate-x-0" : "translate-x-full"
				}`}
				style={{ boxShadow: isOpen ? "rgba(0, 0, 0, 0.4) 0px 30px 30px" : "none" }}
			>
				<aside className='h-full overflow-y-auto bg-white'>
					<header className='bg-gray-900 text-white py-4 flex items-center justify-end px-4 h-14'>
						<div>
							<div onClick={onCartIconClick}>Close</div>
						</div>
					</header>
					<main className='p-4 text-black'>{children}</main>
				</aside>
			</div>
		</div>
	)
}

export default CartDrawer
