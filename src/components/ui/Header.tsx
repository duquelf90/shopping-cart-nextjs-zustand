
import useFromStore from "@/hooks/useFromStore"
import { useCartStore } from "@/stores/useCartStore"
import { Icon } from "@iconify/react"

interface Props {
	onCartIconClick: () => void
}

export default function Header({ onCartIconClick }: Props) {
	const cart = useFromStore(useCartStore, state => state.cart)

	return (
		<header className='bg-gray-900 text-white py-4 flex items-center justify-between h-14 sticky top-0 z-10'>
			<nav className='container mx-auto md:w-10/12 px-4 flex justify-between'>
				<span className='text-lg font-semibold'>My E-commerce</span>
				<div className='relative'>
					<button
						type='button'
						title='Mini Cart'
						className='text-white text-xl flex items-center'
						onClick={onCartIconClick}
					>
						<Icon icon="iconoir:cart" width="24" height="24"></Icon>
						<div className='text-white rounded-full bg-blue-700 w-5 h-5 text-sm -ml-1'>{cart?.length}</div>
					</button>
				</div>
			</nav>
		</header>
	)
}
